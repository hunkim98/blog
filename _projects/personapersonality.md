---
title: 'Persona Personality: Discover the personality masks of my friends!'
excerpt: 'Persona Personality is an Enneagram-based personality test designed to explore the multifaceted personalities of acquaintances. It helps users understand others while challenging the notion of static personality definitions.'
startDate: '2020-09-01'
date: '2021-06-01'
author:
  name: Kim Dong Hun
keyword: 'enneagram'
# Category must be either: Data Visualization, Machine Learning, Web Development, Product Design, Computer Graphics, Other
categories: ['Web Development']
thumbnail: '/assets/project/personapersonality/thumbnail.png'
WIP: false
---

<!-- [View Website →](https://www.personapersonality.com/) -->

In 2021, young people (mostly 20s) in Korea were crazy with MBTI (Myers-Briggs Type Indicator). MBTI is a personality test that divides human personalities into 16 types. It figures out one's personality by discovering one's preference in four categories: Extroversion(E) vs. Introversion(I), Sensing(S) vs. Intuition(N), Thinking(T) vs. Feeling(F), and Judging(J) vs. Perceiving(P). In each of the four categories, one can be either one of the two types.

The simple and easy-to-understand MBTI test captivated many young Korean people thanks to its quick and intuitive results. Nowadays, more and more MBTI test websites are created daily, and their contents are constantly consumed by many young people.

### MBTI being misued

However, I noticed a pattern of misuse of MBTI results among many young people. MBTI is known as one of the tests that has its basis in 'positive psychology' - it was intended to enable people to see positive parts of oneself. Unfortunately, young people started to treat MBTI as an ultimate truth and started to use it as a tool to define limitations on oneself. 

Let me give you one example misusage pattern. Let us say one person found out that he/she is classified as I (Introversion) rather than E (Extroversion) in MBTI's first category. Then the person would think that he/she is not good at socializing with others and use that result to explain to others why he/she cannot do something that has to do with confronting others in public. As such, MBTI results started to be consumed as an excuse or justifications to one's limitations.

The main reason to this phenomenon was because most MBTI web-based tests aim to to give a single interpretation on one's personality. I found this faulty, I felt the need for a new test that allows one to realize that one's personality is in fact multi-faceted and something dynamic.

I embarked on creating a new personality test that figures out the personality of one's acquaintances rather than oneself. I devised it in a way that the recepient of the personality result receives multiple interpretations of his/her own personality from others, and realize that one's personality cannot be defined into a single statement.

![9 Mask Results in Personapersonality](/assets/project/personapersonality/masks.png)

### Building the application, Enneagram

Personapersonality is the application that I created for this purpose. Its pyshcology test basis is Enneagram, which is a personality trait theory that divides human personalities into 9 types. 

The reason Enneagram was chosen instead of MBTI was because 1) MBTI had a limited explanation on one's personality while Enneagram explained one's personality holistically, and 2) I wanted to prevent people from interpreting the results in the MBTI point of view. The questions asked in the application were based on the user's acquaintance, and questions such as "What do you think your (acquaintance's name) would do when he has to lead a classroom conference?". 

After answering custom curated 15 questions, one could get the enneagram result of the other person. The personality result was presented as a form of a mask, which is a visual representation of the personality type in Personapersonality. This was intended since in my point of view, one's personality can be understood differently based on how the person interacts with that person. Thus, the name 'Persona' personality was given to the application.

![Question Screen](/assets/project/personapersonality/question.png)

![Mask Result Screen](/assets/project/personapersonality/mask_result.png)


### Features

Tips on maintaining a good relationship with people with such personality were provided alongside the explanation of the other person's personality, and this was because the application itself was intended to be used as a tool to understand others better. 

Since the initial goal was to preven people from understanding one's personality as one single truth, I also provided a data visualization of the analyzed results, where one could check the percentage of each personality type that was given to the person. This was to show that one's personality is not a single truth, but rather a combination of multiple personalities.

![Personality Mask Result Analysis](/assets/project/personapersonality/result_analysis.png)

As of today (2023.07.18), 204495 people have used the application to figure out the personality of their acquaintances.
