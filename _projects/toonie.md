---
title: 'Toonie: Real-time Collaborative image review editor'
excerpt: 'Toonie is a real-time CRDT-based collaborative image review editor designed for streamlined image feedback. It introduces optimized techniques for multiplayer whiteboards, separating real-time interactions from committed actions for enhanced performance.'
startDate: '2022-06-27'
date: '2022-08-19'
author:
  name: Kim Dong Hun
keyword: 'collaboration'
# Category must be either: Data Visualization, Machine Learning, Web Development, Product Design, Computer Graphics, Other
categories: ['Web Development', 'Computer Graphics']
thumbnail: '/assets/project/toonie/thumbnail.png'
WIP: false
---

Collaborative editing is a rising star in software development. Now, people not only want smart editors, but they also want an editor that allows real-time collaboration with other people. Collaborating with other people is a great way to increase productivity and get feedback on your work. The COVID-19 pandemic familiarized people with the concept of collaborative editing, and now, many people are using collaborative editors in their daily lives.

### Difficulties in implementing multiplayer editors

However, implementing a multiplayer aspect into an editor is not an easy task. First, one should have basic knowledge of how to manage multiple actions from multiple agents. What happens if two people try to edit the same part of the document at the same time? What happens if one person deletes a part of the document while the other person is editing the same part? These are the questions that one should be able to answer when they want to implement a collaborative editor. 

Second, one should have to decide what features shall be communicated between users, and how their concurrent actions do not cause overhead. Relaying data between users can be costly and unreliable in some cases, so one should carefully design the data flow between users in a way that it does not harm user experience.

### Building a whiteboard multiplayer editor

Toonie is a real-time CRDT-based collaborative image review editor that I created to research optimization techniques for implementing CRDT mechanisms into whiteboards. In Toonie, users can review on images uploaded to the service together by sharing a URL to another person. The reason I chose an image review domain specifically is because most collaborative editors out there are for general purposes. Thus, I wanted to create a more narrow focused whiteboard where designers and marketers could review on images together by drawing sketches on the images in an online meeting setting.

![Editing Scene](/assets/project/toonie/edit.png)

Toonie wass built on top of the CRDT-based collaborative SDK called [Yorkie](https://github.com/yorkie-team/yorkie) which is an opensource document store for building collaborative applications created by Naver Alto TF. While contributing to the opensource project, I created Toonie for demonstrating the capabilities of Yorkie.

### How Toonie works

When creating a multiplayer whiteboard, one should distinguish between actions that need its commit order to be preserved and actions that do not need its commit order to be preserved. This is because in multiplayer operations, actions that needs its order to be preserved consume much computer resources during communication, which can eventually result in lags. 

In Yorkie, actions that do not need its order to be preserved were managed as `Presence`, and those that needed its order to be preserved (= that is in need of management through CRDT algorithms) were managed as `Data`. In a whiteboard application, the real-time action (interactions that the user commits to the whiteboard while their mouse is down) do not really need to be communcated with its order preserved since their actions are not finished, and thus can be managed as `Presence`. However, the committed action, which is a finished action of a user (mouse up after mouse down) should have its order preserved since it is a finished action. Those were managed as `Data`.

![User interaction recorded as presenc](/assets/project/toonie/soc_step1.png)

![User interaction finishes and presence is reset](/assets/project/toonie/soc_step2.png)

![Presence modifications are transferred to data](/assets/project/toonie/soc_step3.png)

### Methods of Optimization

Separation of concerns was used for implementing the distinction between `Presence` and `Data`, and thus multiple layers (presence canvas and data canvas) were designed for the whiteboard application. A user's real-time unfinished interactions (whiteboard modifications that occur while the user's mouse is pressed) were drawn in the `Presence` canvas. And as soon as the user's interaction finishes (user finishes modification by mouseup), then the `Presence` canvas data is reset and the modification data is sent to the `Data` Canvas. By doing so, I was able to design a software design approach for optimizing collaborative whiteboards.
