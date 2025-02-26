---
title: '컴퓨터 구조 - 파이프라인'
excerpt: '흔히 어떤 일을 수행하기 위해서 single cycle을 생각하는 것이 흔하다. 하나의 기계가 있다면 그 기계는 일단 하나를 수행 완료한 뒤에 다른 것을 수행하는 것이 정상적으로 느껴진다. 하지만, 수행하는 일을 단계로 나눠서 한꺼번에 여러 단계를 수행할 수 있게 하면 어떨까? 각 단계를 중첩해서 실행하게 하면 걸리는 시간이 크게 줄어지는 것을 확인할 수 있다.'
date: '2022-08-23'
author:
  name: Kim Dong Hun
keyword: 'Pipeline'
# Category must be either: Data Visualization, Machine Learning, Web Development, Product Design, Computer Graphics, Other
categories: ['computer-architecture']
WIP: true
thumbnail: '/assets/posts/pipeline/thumbnail.png'
---

## Make Common Case Fast!

컴퓨터 발전에 있어서 제일 중요한 것은 최적화였다. 어떻게 하면 컴퓨터의 부하를 낮추고 성능을 높일 수 있을까? 이를 접근할 수 있는 방법은 다양하지만, 2022년 1학기 컴퓨터구조 수업에서 배웠던 가장 중요한 것은 common case를 빠르게 만드는 것이었다. 자주 일어나는 것은 최대한 최적화를 하고, 그 과정에서 다른 것이 significant해지면 또 그것을 최적화하는 식으로 최적화를 진행하는 것이다.

## Two most important concepts

교수님께서 말씀하시길 컴퓨터구조에서 면접은 두가지밖에 없다 `Pipeline`과 `cache`이다.

### Pipeline!

여러 instruction을 병렬 수행하는 것이라고 보면 된다. Risc-v에서 배운 pipeline 단계는 Instruction Fetch, Instruction Decode / Register Read, Execute, Memory fetch, Write back 이었다.

![pipeline memo](/assets/posts/pipeline/thumbnail.png)

위는 교재 ppt 자료이다. 흔히 어떤 일을 수행하기 위해서 single cycle을 생각하는 것이 흔하다. 하나의 기계가 있다면 그 기계는 일단 하나를 수행 완료한 뒤에 다른 것을 수행하는 것이 정상적으로 느껴진다. 하지만, 수행하는 일을 단계로 나눠서 한꺼번에 여러 단계를 수행할 수 있게 하면 어떨까? 각 단계를 중첩해서 실행하게 하면 걸리는 시간이 크게 줄어지는 것을 확인할 수 있다.

이런 것을 병렬적 수행이라고 볼 수 있는데, 하드웨어는 대부분 병렬적 수행을 하도록 프로그램 되어있다고 보아도 괜찮다. (그렇게 안 되어있으면 컴퓨터는 아예 쓰는 게 불가능하다..) 이러한 단계를 나누는 것을 pipeline이라고 하는데, 한 stage에 중첩되어서 최대로 할 수 있는 일의 갯수를 pipeline depth라고 한다. 지금 우리 사진에서는 depth가 5다.

다만 pipeline을 성능을 매우 높이더라도 여러 성가신 일들을 벌인다. 예로들면 Register Fetch를 하는데 이전 instruction에서 Mem 단계에서 load해서 값을 업데이트한 register를 실제로 읽어야 한다면 문제가 생긴다. 이럴 경우 해결방법은 해당 inst가 수행 완료될때까지 stall할 수 있다. 하지만 이럴 경우 pipelline을 도입하는 것이 무의미해진다. 동시에 여러 일을 수행하기 위해서 pipeline을 도입했는데, 이전 instruction이 수행 완료 될때까지 기다리는 일을 반복하면 pipeline이 없는 것이랑 다를 바 없다. 이와 같은 성가신 문제들을 hazard라고 부르는데, 여기 컴퓨터 pipeline에서 대표적 hazard는 structural hazard, data hazard, control hazard 가 있다.

Data hazard: load use hazard, write and write hazard

Control hazard: branch prediction wrong

이런 hazard를 해결하는 다양한 방법을 수업시간 때 배웠다.
