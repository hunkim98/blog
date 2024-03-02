---
title: "VAE the basics"
excerpt: "Ever since I got interested in generative art, I felt a need to understand the basics of multiple neural networks. In many dissertations, I always found some articles that referenced VAE for generative purposes. In this post, I go through a brief overview of how VAE works"
date: "2024-03-02"
author:
  name: Kim Dong Hun
keyword: "VAE"
categories: ["AI"]
WIP: true
thumbnail: "/assets/posts/vae_overview/vae.png"
---

## What is VAE for?

Variational Autoencoder (VAE) is known to be a more advance Autoencoder (AE). The main difference between AE and VAE is that VAE has an additional statistical feature added to it in the middle. Both AE and VAE network inputs a mutli-dimensional data and outputs a multi-dimensional output that has high resemblance to the inputted data. Thus, it means that AE and VAE is a network that tries its best to output the same data that was initially inputted. How they train the parameters for making such output is through an encoder and decoder network, where the encoder tries to compress the multi-dimensional input into a smaller data and make the decoder recreate(=reconstruct) the image with that compressed data. In the AI realm, this compressed data is called a vector in a latent space.

<p>
<img alt="Encoder_Decoder" width="100%" src="/assets/posts/vae_overview/encoder_decoder.png">
<em>Encoder Decoder network</em>
</p>

Though AE and VAE have similar structures, their purposes differ. While AE's main focus is on the encoder, the VAE's main focus is on the decoder. This means that AE's purpose is to compress the multi-dimensional data into a compressed vector while VAE's purpose is to generate images. For instance, AE can be mainly used to create a image-based search system where every uploaded image goes through the encoder network to output a vector composed of numbers, which will be used to find similar images compared to a newly inputted image. VAE can be used for generative purposes such as generating a new image.

In this post, the main focus is to get a glimpse into how VAE works. As mentioned above, the feature that makes VAE more advanced compared to AE is that it has a statistical feature added in the middle of the network.

<p>
<img alt="VAE" width="100%" src="/assets/posts/vae_overview/vae.png">
<em>VAE network</em>
</p>

## The additional statistical feature in VAE
