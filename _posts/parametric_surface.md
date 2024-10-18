---
title: 'Parametric Curves and Parametric Surfaces'
excerpt: 'Parametric Curves has to do with the idea of representing equations into a single vector form. The concept can be used to create 3D geometric surfaces which can lead to beautiful visualizations.'
date: '2024-10-18'
author:
  name: Kim Dong Hun
keyword: 'Parametric Curves'
categories: ['Geometry', 'Mathematics']
WIP: false
thumbnail: '/assets/posts/parametric_surface/pasta_surface.png'
---

## Representing a curve in $\mathbb{R}^3$

We all know who to create a line or a curve in $\mathbb{R}^2$ using the equation $y = f(x)$. We just need to have a single equation that have two variables in it. What happens if you want to represent a curve in $\mathbb{R}^3$? We can use the concept of parametric curves to represent a curve in $\mathbb{R}^3$.

However, creating a line or a curve in $\mathbb{R}^3$ is not as simple as creating a curve in $\mathbb{R}^2$. Yes, if the function is simple enough like $z = x^2 + y^2$, then we can easily represent the curve in $\mathbb{R}^3$. But what if we were given two equations instead and need to find the intersecting lines, such as $x^2 + y^2 = 1$ and $y=xz$? Finding a curve to represent the intersection of these two equations is not as simple as finding the intersection of two lines in $\mathbb{R}^2$.

In fact, if you think this problem in a practical point of view, this is in fact how many of our social science models are introduced. We do not have a single equation that can represent the behavior of the system. Instead, we have multiple equations that can represent the behavior of the system. Thus, being able to solve the intersection of these equations is a very important skill to have.

## Parametric Curves

Now to solve the intersection of somewhat complex equations, we can use the concept of parametric curves. The idea is to represent the equations into a single vector form. For example, the intersection of the two equations $x^2 + y^2 = 1$ and $y=xz$ can be represented as a parametric curve as follows:

$$
\begin{align*}
x &= 5\cos(t) \\
y &= 5\sin(t) \\
z &= 25\cos(t) \sin(t)
\end{align*}
$$

This is a parametric curve that represents the intersection of the two equations. The approach we used was to use a common variable $t$ to represent the equations. This is a very powerful concept that can be used to represent complex equations in a single vector form.
