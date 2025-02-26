---
title: "Pixel_horizons: Procedural Generation of Pixel Art Landscapes using LLM"
excerpt: "This project attempts to leverage LLM's ability to contextually understand what is happening in the game world and generate adequate text descriptions to create pixel art landscapes."
date: '2025-01-26'
author:
  name: Kim Dong Hun
keyword: 'Machine Learning'
# Category must be either: Data Visualization, Machine Learning, Web Development, Product Design, Computer Graphics, Other
categories: ['Machine Learning']
WIP: false
thumbnail: '/assets/project/llm_procedural_generation/thumbnail.gif'
---

![Demo](/assets/project/llm_procedural_generation/thumbnail.gif)

Where can LLM be used in games? Many have approached this question by applying LLMs to NPCs, making them more human-like. Some have even went further and tried to make the game player have a smart companion interactable using speech. However, **do games benefit from such text-based interactions?** 

During Janaury 2025, I had a chance to take a class at MIT taught by Sony Interaction Entertainment (SIE). Students were lectured on the many research topics the SIE was working on. One of the topics had to do with applying LLMs into games. We were given the opportunity to work on applying LLMs into games, and I decided to leverage LLMs for procedurally generating game scenes.

![Game Scene](/assets/project/llm_procedural_generation/game_scene.png)

### Finding the intersections between LLM and games

Before starting this project, I took some time to discover the intersection between the core functionalities of games and areas LLMs are good at. It is well known that LLMs are proficient in many tasks, but whether its capabilities are effective relies on the target task. 

There are many features that consist a good game, but all of them are under the overarching theme, `JOY`. No matter what the feature may be, it contributes to bringing more JOY to the player.


LLMs are good at multiple tasks. The core feature that allows LLMs to perform all such tasks is its ability to `understand the context`. It is through this ability that LLMs impact the most in its tasks.


So the question is, how can we leverage LLM's ability to understand context to bring more JOY to the player? I came up with the assumption that players enjoy exploring new worlds. If there is a game feature that motivates the player to explore, it is worth implementing into a game. Thus, I thought of using the power of LLMs to contextually understand what is happening in the game world and generate adequate text descriptions to create pixel art landscapes.


### Strategy

The LLM was used for two tasks. **First** was to generate a seed text prompt that would be used to generate the initial pixel art landscape scene. A text-to-image model would use this seed text to generate a pixel art landscape image. The **second** task for the LLM was to generate a text description of the connected pixel art landscape image that extends the current player's view of the game world. This time, a image-to-image model would be used to generate a pixel art landscape image. A text prompt and the cropped version of the previously generated image would be used as input to inpaint given image.

![ComfyUI inpainting](/assets/project/llm_procedural_generation/comfyui.png)

An example of how the inpainting task would be done is shown above. In this particular example, you can see that it is generating the right side of the image since only the left half of the image is given as input. This means that the player is currently heading to the right side of the current scene. The models used for generating an image and inpainting an image used the same checkpoint and LoRA. The checkpoint used was [RealVisXL V5.0](https://civitai.com/models/139562/realvisxl-v50?modelVersionId=361593) and the LoRA used was [Pixel Art XL V1.1](https://civitai.com/models/120096/pixel-art-xl).

The system prompt used for generating and inpainting the images was 

> "You are a helpful landscape architecture assistant that designs a game. Your goal is to give a prompt for generating a 2D pixel game stage design. The prompt will be used for generating art with a text to image model. Remember that you should generate a top-view, satellite view image for the pixel game. Only give me prompt sentence for generating the scene. Add no other instructions or title."

Since I wanted to give players some control over the generated game scenes, I allowed players to input a seed text prompt. The LLM was tasked to create a adequate text prompt for generating the initial pixel art landscape scene. This allowed other images generated through inpainting to maintain the same style as the initial image. For example, if a player inputted a seed text prompt, "city", the LLM would generate a text prompt, "Top-down satellite view of a bustling urban cityscape, with grid-like streets, high-rise buildings, parks, residential areas, and commercial zones, in 2D pixel art style."

![Game Scene](/assets/project/llm_procedural_generation/initial_scene.png)

As the player explores the game world, I recorded the player's current grid index as well as their direction of movement. If a player moves to the right and if there is no game scene yet generated for the right side, the current game scene's right half side would be used as an input to the inpainting model. The LLM would be asked to generate a scene using the text prompt that was used to generate the current game scene and be asked to generate a text description of the connected pixel art landscape image based on the player's direction. The LLM would be asked,

> The player is heading **LEFT** from the current scene which was generated with this prompt ‘Top-down satellite view of a bustling urban cityscape, with grid-like streets, high-rise buildings, parks, residential areas, and commercial zones, in 2D pixel art style.’. What would be the adequate prompt for the scene to be seen?”

The diagram describes the whole inpainting process in detail.

![Inpainting Process](/assets/project/llm_procedural_generation/inpaint.png)

### Experiments

I have experimented with multiple seed prompts for generating the images. Thanks to LLM, the generated game scenes were dynamic but also consistent with the seed prompt. For example, when the seed prompt was 'japan, samurai', the LLM would first generate a scene with traditional japanese architecture, but also generate a scene with Fuji mountain when the player went north. 


![Japan Scene](/assets/project/llm_procedural_generation/japan.png)

Though the consistency of the connected images was not perfect, the consistency was significantly improved when the game scene was themed with a landscape city. Especially for a game scene generate with a seed prompt 'urban, city', the consistency was very high.

![City Scene](/assets/project/llm_procedural_generation/city.png)

### Some noteworthy prompts

Interesting enough, LLMs showed their creativity in generating text prompts. It especially did well when it was tasked to create landscape scenes. Here are some slides I used to show LLM showed its creativity in generating text prompts.

![Slide 1](/assets/project/llm_procedural_generation/prompts1.png)

In the example shown above, we can see that the LLM managed to expand the landscape to include a shopping mall to connect the urban residential commercial zones.

![Slide 2](/assets/project/llm_procedural_generation/prompts2.png)

In the above example, we can see that the LLM managed to create a bus terminal right next the the existing shopping mall, showing that it understands that many bus terminals are located next to shopping malls.

The project was created using Unity C# as the game client and FastAPI as the game server. For more information on the project, please visit the [GitHub repository](https://github.com/hunkim98/LLM_procedural_terrain).

