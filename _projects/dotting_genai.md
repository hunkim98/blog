---
title: "Dotting GenAI: Pixel Art Editor With Generative AI"
excerpt: "Despite Generative AI sheding light on the possibility of revolutionizing the image creation process for many people, there are no definitive software design principles on how to merge the two distinct experiences: generating and editing. Dotting GenAI is an experimental project that aims to incorporate generative AI into the realm of pixel art. Alongside software development, a user research was conducted in order to gain insights into how experienced designers perceive the collaborative potential with Generative AI."
startDate: "2023-03-22"
date: "2023-04-11"
author:
  name: Kim Dong Hun
keyword: "Generative AI"
categories: ["hackathon", "AI", "editor"]
coverImg: "/assets/project/dotting_genai/home.png"
WIP: false
---

[Hackathon Presentation Video →](https://www.youtube.com/watch?v=nKYJNuTxfTs)

Generative AI is a hot topic discussed everywhere. In the hopes of decreasing the barrier for creating images, many researchers are publishing better image generation models everyday. However, one problem exists in current Generative AI services: You cannot modify the generated images once they are generated.

For generative AI to be usable, the user should be able to modify the generated image. The modification can be as simple as changing the color of the generated image, or as complex as changing the shape of the generated image. For enabling modifications, the generative AI services should be integrated into an editor that provides additional tools that can be used to modify the generated images. However, there are no definitive software design principles on how to merge the two distinct experiences: generating and editing.

To test the methods of integrating Generative AI into editors, I created a pixel art editor with Generative AI named Dotting GenAI. The project was also a contestant for the 2023 Hackathon hosted by the a Korean Venture Capital, Primer. Dotting GenAI was awarded as one of the top 16 projects in the hackathon. It was created with an opensource project that I have started to provide React developers a pixel art editor, `Dotting`.

<p>
<img alt="Editor screen" width="600px" src="/assets/project/dotting_genai/home.png">
<em>Editor Screen</em>
</p>

Dotting GenAI allows users to interact with the generative AI through a chat interface positioned on the right of the screen. The user can ask the generative AI to generate an image, and the generative AI will generate an image based on the user's request. The generated images will return as replies in the chat log. The user can place the generated image on the pixel art canvas and then modify the generated image with the editor tools provided by Dotting GenAI.

After the development of the service, I conducted a user test on design experts to figure out 1) whether my software design approach was effective, and 2) whether the generative AI was useful for the design experts. The user test was conducted with 12 design experts, and the results showed some interesting insights.

Most users thought the experience of being able to modify the generated images directly in the editor as comfortable. However, they had many worries about using generative AI in their work. Some reported that although generated images do encourage untried styles, they become a burden when the user wants to create a specific image they have in mind. Some also reported that they rather wanted a generative AI that learns from their own styles, rather than some random generated images based on prompts. People more interested in the study may download the <a target="_blank" href="/assets/project/dotting_genai/dissertation.pdf"></a> for more details.

<p>
<img alt="Editor screen" width="600px" src="/assets/project/dotting_genai/presentation.png">
<em>Presentation in Primer Hackathon</em>
</p>
