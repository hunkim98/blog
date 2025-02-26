---
title: "Visualize my friend's social network"
excerpt: "LinkLink is a social networking app designed to simplify the 'friend of a friend' process. It visualizes connections and offers evaluation features to find reliable companions for specific purposes like startups."
startDate: '2022-09-01'
date: '2022-12-08'
author:
  name: Kim Dong Hun
keyword: 'social network'
# Category must be either: Data Visualization, Machine Learning, Web Development, Product Design, Computer Graphics, Other
categories: ['Data Visualization', 'Web Development', 'Product Design']
thumbnail: '/assets/project/linklink/demo.gif'
WIP: false
---

[Project Wiki →](https://github.com/swsnu/swppfall2022-team9/wiki/Requirements-and-Specification)

![Demo](/assets/project/linklink/demo.gif)

When people start a startup, they start by finding suitable people to work with. In most cases, they reach out to their friends and ask them to join the startup. If the friends say that they are unavailable, then the person ask them to introduce their friends. This is because getting referrals from trusted relationships is the best way one can gather suitable companions.

The case described above happens very often in the startup world, and I have experienced the process myself. Unfortunately, the problem is that this process is very inefficient. You have to meet each of your friends to get information about their acquaintances, and then ask them to introduce you some friends they think might be a good fit with you.

Can this whole process be simplified? Why not create an application that directly shows my friend's network?. That is why I came up with LinkLink, a social networking application just for that purpose. There are many social networking applications out there such as LinkedIn. However the problem is that their purpose is too general, and thus not suitable for special purposes. LinkLink focuses on the "friend of a friend" process, where one can view the qualities of the friends of their friends, and then ask the intermediary friend to introduce him or her to oneself.

![Friend Network Visualization](/assets/project/linklink/home.png)

### Previous Works

LinkedIn previously did a [similar project](https://blog.linkedin.com/2011/01/24/linkedin-inmaps) in 2011. It visualized all the networks of the acquaintances you had. However, the problem was that the visualization was too complex, and thus not very useful. There was too much information in the visualized network resulting in an ununderstandable mess. 

LinkLink solves this visual mess by putting a limit to how many direct friend connections one can have (one can only have a maximum of 15 direct friends). This benefits the service in two ways: 1) The service is more reliable since one has to carefully choose who to connect with, resulting in a more reliable network, 2) The user is able to understand the network better since there are less connections to look at.

![Personal Profile UI](/assets/project/linklink/profile.png)

![Evaluate Friends](/assets/project/linklink/evaluate.png)


### Features

Since the main purpose of the application was to provide users with reliable networks, our team devised evaluation features for users to evaluate their directly connected friends. This allows users to not only judge the fitness of another person based on their skillsets but also their character. When one finally decides they want to connect with that person, they can chat with the person directly or ask their intermediary friend to introduce them to the person.

![Chat](/assets/project/linklink/chat.png)
