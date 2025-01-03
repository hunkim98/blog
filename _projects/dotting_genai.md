---
title: 'Dotting GenAI: Pixel Art Editor With Generative AI'
excerpt: "Dotting GenAI explores the integration of generative AI into pixel art editing, offering tools for direct modification of AI-generated images. The project was tested with design experts and recognized as a top 16 project at Primer's 2023 Hackathon."
startDate: '2023-03-22'
date: '2023-04-11'
author:
  name: Kim Dong Hun
keyword: 'Generative AI'
# Category must be either: Data Visualization, Machine Learning, Web Development, Product Design, Computer Graphics, Other
categories: ['Machine Learning', 'Product Design', 'Web Development']
thumbnail: '/assets/project/dotting_genai/demo.gif'
WIP: false
---

<!-- [Hackathon Presentation Video →](https://www.youtube.com/watch?v=nKYJNuTxfTs) -->

![Demo](/assets/project/dotting_genai/demo.gif)

Generative AI is everyday nowadays. Everyone in town are hype about it. However, while generative features such as text-to-image AI are promising, there is one limitation: it is not easy to modify the generated contents as you intended. Especially for text-to-image generation tasks, delivering your intention of how you want to modify an image only through text prompts is a nightmare.

For mass adoption of generative AI, allowing users to easily modify generated image output as they intend to do so is crucial. In fact, in most scenarios, the tools that users want to use for modifying images are changing a color of an area or removing a specific region out of the image. To achieve that goal, generative AI services should be integrated into an editor that provides additional modification tools. At the moment, however, there exists no definitive software design principles on how to merge the two distinct experiences: generating and editing.

To test the methods of integrating Generative AI into editors myself, I created a pixel-art editor with Generative AI features and named it Dotting GenAI. I also used this project to participate in a 2023 Hackathon hosted by the a Korean Venture Capital, Primer. Dotting GenAI was awarded as one of the top 16 projects in the hackathon. It was created with an opensource project that I have started to provide React developers a pixel art editor, `Dotting`.

![Editor screen](/assets/project/dotting_genai/home.png)

### Chat Agent for Generating Pixel-art

Dotting GenAI allows users to interact with the generative AI through a chat interface positioned on the right of the screen. The user can ask the generative AI to generate an image, and the generative AI will generate an image based on the user's request. The generated images will return as replies in the chat log. The user can place the generated image on the pixel art canvas and then modify the generated image with the editor tools provided by Dotting GenAI.

### User Test

After the development of the service, I conducted a user test with people who specialize in desing to figure out 1) whether my software design approach was effective, and 2) whether the generative AI was useful for them. The user test was conducted with 12 design experts, and the results showed some interesting insights.

Most users thought the experience of being able to modify the generated images directly in the editor as comfortable. However, they had many worries about using generative AI in their work. Some reported that although generated images do encourage untried styles, they become a burden when the user wants to create a specific image they have in mind. Some also reported that they rather wanted a generative AI that learns from their own styles, rather than some random generated images based on prompts. People more interested in the study may download the [PDF file](/assets/project/dotting_genai/dissertation.pdf) for more details.

![Presentation at Primer Hackathon](/assets/project/dotting_genai/presentation.png)
