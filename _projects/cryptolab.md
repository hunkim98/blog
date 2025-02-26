---
title: 'Private Chatbot: Encrypted Financial Complaint Chatbot'
excerpt: 'Private Chatbot is a user complaint chatbot application created with two technologies: Homomorphic Encryption and ChatGPT. Cryptolab, a startup that creates cryptographic solutions, provided us with SDKs to use Homomorphic encryption technology allowing us to encrypt chat messages.'
startDate: '2023-03-03'
date: '2023-06-16'
author:
  name: Kim Dong Hun
keyword: 'cryptography'
# Category must be either: Data Visualization, Machine Learning, Web Development, Product Design, Computer Graphics, Other
categories: ['Machine Learning']
thumbnail: '/assets/project/cryptolab/thumbnail.png'
WIP: true
---

ChatGPT is gaining popularity as a new way to create chatbots. With the ChatGPT making chat responses more natural, developers can create chatbots that are fully serviceable with little effort. However, in the midst of the advancement of ChatGPT, one now small but yet to be big problem is emerging: the privacy of the user. During the conversation with ChatGPT, users may reveal their personal information. There should be a way to protect the user's privacy while using ChatGPT.

Cryptolab is an cryptography startup me and my teamates partnered with to find software mechanisms for making a private chatgpt-based chatbot. Cryptolab provides a Homomorphic encryption SDK that allows developers to encrypt data and perform calculations on the encrypted data. Devoid of an android SDK for using their homomorphic SDK, our team embarked on a mission to compile an android SDK for the homorphic algorithms and create an example application that incorporates ChatGPT and cryptography into a chatbot.

![Demo](/assets/project/cryptolab/thumbnail.png)

We chose the financial domain for our chatbot. The reason for choosing the financial domain is that the financial domain is one of the most sensitive domains in terms of privacy. People are very sensitive about their financial information, and they are very reluctant to share their financial information with others. If there were to be a chatbot that can handle financial information, it should be able to protect the user's privacy.

![Service Architecture](/assets/project/cryptolab/architecture.png)

For the architecture flow, we divided steps for our chatbot. The first step was the step where users can freely enter their complaints freely. Since there is a possibility of privacy leak in this stage, we set this stage to utilize the homomorphic encryption. We implemented it by classifying the user complaint into 7 financial complaint categories. Thanks to homomorphic encryption, the user complain input could only be decrpyted in the user's device and the linear classification model in the server did not have access to the chat message but could still classify the message thanks to homomorphic encryption technology.

After the user's complaint was successfully classified we would use that as an input for ChatGPT to give context to how the ChatGPT to respond to further steps in the chatbot. ChatGPT guided users to file a formal complaint on their situation and successfully submit a complaint to the financial authorities. We also created an admin page for the financial authorities to view the complaints and respond to them.
