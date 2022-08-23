---
title: '컴퓨터 구조 - Cache
excerpt: '컴퓨터 구조의 핵심적인 내용인 Cache에 대해서 배운다.'
date: '2022-08-23'
author:
  name: Kim Dong Hun
keyword: 'Cache'
categories: ['computer-architecture']
---

Cache는 사실 이후 프로그래밍을 할 때 언젠가 써볼 수 있는 개념이라고 생각된다. Cache는 일종의 임시 table이라고 볼 수 있는데, 수업시간 때 배운 대부분 cache의 구조는 이러했다. 1 Valid bit, Tag(address의 상위 bit), Data 가 하나의 line을 구성했다. 이렇게 써 놓으니깐 이해하기 힘들기 때문에 사진을 첨부하겠다. 

<img width="1395" alt="Screen Shot 2022-06-14 at 10 31 29 PM" src="https://user-images.githubusercontent.com/57612141/186070139-9a7fc183-94ce-4db8-8cf7-ad677b15bf12.png">

이런 식으로 구성된다. 2^s개의 line이 존재하고 input(table을 위한 열쇠라고도 볼 수 있겠다) address에서 s bit을 활용해 index, line number를 찾고, valid 한지 여부를 확인하고 나머지 offset bit을 활용하여 data를 추출해내는 구조였다. 실제 이런 구조는 memory cache뿐만 아니라 TLB(virtual page number를 physical page number로 바꿔주는 친구), BTB(instruction address로부터 target branch prediction을 바로 찾게 해주는 친구)에도 쓰였다. 이 table은 access time이 훨씬 더 걸리는 더 큰 메모리에 접근하는 시간을 최대한 낮춰주고자 만든 개념이라고 보면 된다.

지금 사진에서는 direct mapped cache가 나와있는데, 이는 하나의 line이 하나의 address에만 대응되게끔 한 단순 cache이다. 이를 조금 더 복잡하게 구현하면 n way set associative cache 도 존재하는 이는, 하나의 line에 n개의 address가 대응될 수 있게 만든 것이다. 다만 이것의 문제는 이제 line안에서 또 찾는 시간이 걸리기 때문에 access time이 더 증가할 수 있는 것이 문제다.

cache는 실제 전체 메모리가 아닌 관계로 항상 원하는 결과를 내놓지 않을 수 있고, 심지어 index를 했는데 알고보니 tag와 달라서 miss가 날 때도 있다. 이 miss가 날 경우 실제 메모리에 접근해서 옳은 값을 가져와 table을 수정해야 하는데 그러한 다양한 고려사항을 수업시간 때 배웠다.
