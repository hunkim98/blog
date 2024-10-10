---
title: "Sky Palette Project: 1. The Beginning of the Journey"
excerpt: "Sky Palette Project is a project that I started to extract colors from the sky. A professor once told me that the sky is the best color palette that a designer can use. The sky has a natural color gradient that is harmonious. I wanted to extract the colors of the sky and make it into a color palette. To begin that journey I first created a sky capturer for capturing the image of the skies"
date: "2023-08-19"
author:
  name: Kim Dong Hun
keyword: "vision"
categories: ["project", "AI", "color"]
WIP: false
thumbnail: "/assets/posts/sky_palette/sky_palette_kmeans_initial.png"
---

## The sky is the best color palette


![Design Homework 2020](/assets/posts/sky_palette/design_hw.jpeg)

In a design basics class that I took in 2020, the professor gave students a homework to create a color palette out of their photos. The professor recommended us to take multiple photos that we preferred and extract the colors from them. Students were free to take new pictures if they wanted to. I did not take the class seriously, and I just used photos from my college life and extracted colors from them. After everyone submitted their homeworks, the professor told us one thing that I still remember to this day. She said, **When you have trouble finding the right colors to use in your design, look up to the sky and take a picture of it. The sky is the best color palette one can use because the color harmony is already there.** The sky is where light and darkness meet. The clouds add variance to the colors. The master of colors is right above your head, each day with a different palette.

Ever since I heard those words, I was always fascinated with the beauty of the sky. It is nature color untainted by human hands. Unfortunately, I never had a chance to use the colors of the sky. Design homeworks could be finished just by surfing through many reference images shared in the internet. I would glance at the sky when I was tired of my work. It was full of awe, but I was not ready to digest it.

Now, transformed into a researcher interested in both Visual Communication Design and Computer Science, I began to experiment on the intersections of the two fields. While I was reading a dissertation on color palette recommendation and its application in design, the words of my design professor back in 2020 came back to me. In the dissertation, the color dataset for training the recommendation algorithm were extracted from visuals examined by design experts. I thought to myself, **"Why do we need to rely on professionals for color recommendation? Can't the nature itself present us with the best color palette?"** This is how I embarked on the journey of extracting colors from the sky.

## Gathering data from the sky with a sky capturer

To extract colors from the sky, I first needed to capture the sky. I first approached this problem in a technological perspective. I created a web app that periodically captures images every interval.


![Sky Capturer Web App](/assets/posts/sky_palette/sky_capturer.PNG)

In the web app, I prepared features where a user could set an interval time for capturing the sky image. I first thought of making the capture interval time static, but I realized that the sky would change its color rapidly when the sun is setting or rising. Thus, I connected the web app to an api that tells the sun set time and sun rise time according to the user's location. I made the web app change its capture interval time to 5 minutes when the current time is near the sun set or sun rise time. This was to capture the sky effectively when the sky is changing its color rapidly. The captured images were stored in a cloud storage.

![Capturing Image at home](/assets/posts/sky_palette/capturing_image.jpg)

I first tested the feasability of the web app in my home. I opened my web app in an iPad and started recording the sky. I set my iPad like the above image for one day. Thankfully, the iPad withstanded the heat of the sun. However, the captured image quality was poor. I could not fully capture the sky because there were buildings that were obstructing the view of the sky. Moreover, due to the window screen, the image was blurry. I needed to find a better place to capture the sky.

![Captured Image Sample (Home)](/assets/posts/sky_palette/captured_at_home.jpeg)

## Gathering sky image data from the internet

I thought of capturing the image of the sky in another place. However, after much thought, I realized that I could search some images online. Though capturing images manually would be great, the first priority was to see if my sky palette project will work. Thus, I started surfing the web to find the adequate images for the sky palette project.

I first searched for sky image datasets in google. Some datasets that were used for analyzing cloud patterns were available. Most datasets required a request to the owner of the dataset. Thus, I went on to request the dataset in multiple websites. I got some images from NUS (National University of Singapore). Vision & interaction group in NUS had gathered sky cloud images of Singapore for their [research](https://vintage.winklerbros.net/swimcat.html). I got the data from NUS, however, I soon found out that I could not use their image dataset for extracting colors. Most images were basically images of the clouds. Moreover, there seemed to have not much variance in the color of the sky. I needed to find another dataset.


![SWIMCAT sample images](/assets/posts/sky_palette/swimcat.png)

I kept searching google for image datasets. I founds some noteworthy datasets that were simply collected as a hobby. However, many of them had objects or artifacts other than the sky, which would make it difficult to extract the colors of the sky. I needed to find a dataset that was specifically made for the sky. I could go on and perform color segmentation to distinguish the sky from other objects, but that could be done after I had made a working prototype of the sky palette project. I needed to find a find dataset that I could use right away.

After much surfing, I found an adequate dataset from a artist named [Eric Cahan](https://ericcahan.com/bio/). He was a photographer who had special interest in taking photos of beautiful skies. In his [Sky Series Selected Work](https://ericcahan.com/portfolio/sky-series/), there were some fabulous images that I could use to extract the color of the sky. Thus, I downloaded his images and started to extract the colors of the sky.

## Color Extracting Algorithm Approach: K-Means Clustering

I first approached the problem of extracting colors from the sky with a simple algorithm. I used K-Means clustering to cluster the colors of the sky. Many blogs explained that K-Means clustering is a simple algorithm that can be used to extract colors from an image. Thus, I first tried to use K-Means clustering to extract colors from the sky. I first tried to extract 5 colors from the sky.


![Simple Kmeans Palette](/assets/posts/sky_palette/sky_palette_kmeans_initial.png)

The result was not too bad. But I felt it was not enough. I first tried extracting 5 colors. However, the 5 colors did not seem to harmonize well. What made it worse was that the 5 colors did not seem to represent the whole sky image. The sky image was beautiful and had many colors. Especially, the mix of red and blue was beautiful. However, due to Kmeans clustering method of taking the average of the colors, the represented colors were very dull.

I thought that increasing the clusters would solve the problem. Though it did seem to improve, the colors were still dull. To me, when the cluster size was set to 15, the extracted colors seemed to represent the sky image well. I felt the need to tweak the Kmeans clustering algorithm to better extract the representative colors of the sky image. Also, in the hindsight, I felt that the ordering of the palette colors could have affected me to view the 5 clusters representation as a mispresentation of the sky image. Due to the random ordering of the colors, the colors seemed to not harmonized. If you see the sky image, you can see there is a gradual change in the color of the sky. However, once the images are seperated and presented discretly and color blocks, they look a bit awkward. I began to think that there is a need to order the colors as the sky image is ordered to lessen the awkwardness of the color blocks.

I end this post here since my initial goals, gathering sky image data and going through basic kmeans algorithm approach, were sufficed. I will continue writing about this project in the next post. Anyone interested in the project can check out the [github repository](https://github.com/hunkim98/sky-palette)

You can read the next story in [Sky Palette Project (2)](./sky_palette_2)
