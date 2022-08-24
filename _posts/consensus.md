---
title: '분산시스템 - Consensus(Raft)'
excerpt: ''
date: '2022-08-24'
author:
  name: Kim Dong Hun
keyword: 'Raft'
categories: ['distributed-systems','Raft']
---

`WIP - Writing in Progress`

# 네이버에서 시작된 분산시스템에 대한 관심

학교에서 제공하는 체험형 인턴 덕분에 네이버에서 2022년 여름 방학 기간동안 동시 문서 편집 오픈소스 프로젝트인 [Yorkie](https://github.com/yorkie-team)에 기여를 할 수 있었다. 원래부터 Figma와 같이 창작자가 무언가를 만드는 것을 돕는 도구를 만드는 것에 관심이 많던 터라, 이번 경험을 통해 나만의 동시문서편집 서비스를 만들 수 있는 능력을 갖출 수 있겠다는 희망을 가졌었다. 하지만, 동시문서편집 서비스는 내가 생각했던 것보다 훨씬 거대한 개념이었고, 알아야 할 지식이 많았다.

## 동시문서편집 = 분산시스템?

사실, 분산시스템에 대한 용어는 많이 보긴 했지만 그 뜻을 잘 몰랐다. "분산되어 있는 시스템이면 그냥 나뉘어진 것인가"하고 넘어가는 경우가 많았다. 지나고 보니, 최근에 학교에서 배운 컴퓨터 구조 수업들이 분산시스템과 큰 관련이 있었다는 것을 알 수 있었다. 컴퓨터 구조 수업에서 배운 내용은 [Cache](https://hunkim98.vercel.app/posts/cache), [Pipeline](https://hunkim98.vercel.app/posts/pipeline)에 써놓았다. 정확히 말하자면, Pipeline 부분이 분산시스템과 긴밀한 연결관계를 가진다고 볼 수 있는데, 이는 분산시스템이 Pipeline처럼 하나의 일을 여러 개로 쪼개서 한다는 점에서 비슷하기 때문이다. 
