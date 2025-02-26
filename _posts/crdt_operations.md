---
title: '하나의 원본에서 파생된 여러 복사본에 가해지는 operation을 취합하여 통일된 새로운 원본을 만드는 마술(CRDT) - 1. Operation의 디자인 방법'
excerpt: '디지털 세계에서는 하나의 원본이 존재하되, 실제 사용은 여러 개의 복사본으로 사용되는 경우가 대다수다. 때에 따라, 원본에서 파생된 복사본에서는 operation이 가해질 수 있다. 가장 대표적인 예시로 동시문서편집기가 있다. 동시문서편집기를 사용할 때 각 사용자의 문서편집행위는 사실 원본에서 파생된 복사본에서 이루어지는 operation이다. 각 복사본에 행해진 operation은 나중에 추합되어 새로운 원본을 만들게 되는데 각 operation을 통일하기 위해서 사용되는 CRDT를 이해하기 위한 첫 관문인 operation의 디자인 방법에 대해서 탐구하겠다.'
date: '2022-10-10'
author:
  name: Kim Dong Hun
keyword: 'CRDT Basics'
# Category must be either: Data Visualization, Machine Learning, Web Development, Product Design, Computer Graphics, Other
categories: ['Web Development']
WIP: true
---

## CRDT에서 말하는 Operation의 디자인 원칙

디지털 세계에서는 하나의 원본이 존재하되, 실제 사용은 여러 개의 복사본으로 사용되는 경우가 대다수다. 여러분이 보고 있는 이 블로그 웹사이트 또한 사실 원본에서 파생한 복사본이라고 볼 수 있다. 인터넷 연결이 갑자기 중단된다고 해도 여러분은 이 블로그 웹사이트가 아직 인터넷이 연결된 것처럼 사용할 수 있을 것이기 때문이다. 하지만 어떤 서비스 같은 경우 단순히 보는 것에 그치지 않고 사용자가 직접 행위를 할 수 있게끔 기능을 제공하기도 한다. 가장 대표적인 예시로 동시문서편집기가 있다. 동시문서편집기를 사용할 때 사용자는 자유롭게 글자를 넣거나 빼고 글자에 스타일을 넣기도 한다. 하지만 방금 언급한 블로그 웹사이트 사례처럼, 사실 사용자가 자기 컴퓨터에서 행하는 모든 행위는 원본에서 파생된 복사본에서 이루어지는 행위(operation)이다. 사용자 한 명만 operation을 행했다면 걱정거리가 없다. 복사본에서 행해진 operation을 그대로 원본에다 적용하면 된다. 하지만 동시문서편집기는 그런 의도로 사용되지 않는다. 동시문서편집기는 다수의 사용자가 동시에 작업을 하기 위한 서비스이다. 모두가 각자의 복사본에서 operation을 가한다. 이 모든 operation들을 통일해서 동일한 새로운 원본을 각 사용자에게 다시 복사본으로 제공해야 하는데 이것은 어떻게 해결할까? 그것을 해결하기 위한 하나의 방법인 CRDT에 대해서 글을 쓰고자 한다.

#### 여담..

CRDT는 네이버에서 [Yorkie](https://yorkie.dev/)를 작업하면서 알게 된 개념이다. 1달동안 인턴을 해도 제대로 이해하지 못했던 개념이라, 언젠가 한번 꼭 제대로 이해해야겠다는 생각을 했었다. 그러던 어느 날 최근에 [yorkie-js-sdk](https://github.com/yorkie-team/yorkie-js-sdk)을 개선할 일이 생겼는데, CRDT를 이해하지 못한 이상 개선하기가 어렵다는 것을 깨닫고 미루고 미루었던 CRDT 공부를 하기 시작했다. 사실 CRDT를 제대로 공부하고 싶었던 이유는 이후 한번 만들어보고 싶은 `게임 서버`를 제작할 때 도움이 될 것 같았기 때문이다. 그동안 프론트엔드 세계에서만 지낸 것 같아서 다른 컴퓨터 세상을 맛보고 싶었다. 그런 갈증을 느끼던 와중 학교에서 컴퓨터 구조 수업을 들으면서 concurrency 개념을 맛보고 그런 쪽으로 지식을 좀 더 쌓고 싶은 생각이 들었다. 여름방학이 되자 네이버에서 인턴을 하게 되었는데 마침 concurrency와 관련된 동시문서편집기를 위한 라이브러리에 기여하는 일을 하게 되었다. CRDT는 이때 처음 맞닥뜨렸고, 이 내용을 좀 더 제대로 이해하면 클라우드나 서버 제작에서 사용할 수 있는 유용한 지식이라는 생각이 들었다 (무언가 만들면서 배우는 것을 좋아하는 사람이다보니..). 나중에 CRDT를 제대로 이해하고 나서 게임 서버를 만드는 여정에 대해서도 써볼까 한다.

#### state <= Operation(state) : Operations should be monotonic updates!

`CRDT에는 원본 update를 위한 두가지 방법인 operation-based replication과 state-based replication이 있다. 이 글은 state-based replication에 바탕하여 CRDT를 설명한다`

복사본에서 이루어지는 행위들은 겹칠 수 있기 때문에 문제시된다. 밑에 예시를 한번 보자

1. A와 B가 {1,2}라는 집합을 갖고 시작한다.
2. A와 B의 인터넷 연결이 끊긴다
3. A는 집합에다 3을 추가하고 나서 바로 3을 삭제한다.
4. B는 집합에다 3을 추가한다
5. 인터넷이 다시 연결된다
6. 결과는?

여기서 인터넷 연결이 끊기는 상황을 연출한 이유는 원본에서 파생된 복사본이라는 사실을 명확히하기 위해서이다. 인터넷 연결이 끊긴 시점부터 A와 B는 각자 복사본에다 operation을 가하고 있는 것이다. 인터넷이 다시 연결되면 각 복사본에서 행해진 operation은 취합되어 새로운 원본(=집합)을 서로에게 줘야 한다. 맥락만 보면 {1,2,3}이 정답이 되어야 할 것 같다. 그러나 이것을 어떻게 컴퓨터가 이해하도록 operation을 디자인할까?

CRDT에서 state-based replcation에 기반한 operation은 monotonic update만 허락된다 <sup>[1](#footnote_1)</sup>.

Reference)
<a name="footnote_1">1</a> Conflict-free Replicated Data Types
CRDT vs OT: https://channel.io/ko/blog/crdt_vs_ot
