---
title: 'Cryptogalaxy: Visualizing cypto markets'
excerpt: 'CryptoGalaxy is an attempt to visualize the crypto market. It borrows its concept from the ‘space’ and connects galaxy components with several crypto market indicators. The main purpose of the project was to create a dynamic visualization that responds to the market in real time.'
startDate: '2022-09-01'
date: '2022-12-11'
author:
  name: Kim Dong Hun
keyword: 'crypto'
# Category must be either: Data Visualization, Machine Learning, Web Development, Product Design, Computer Graphics, Other
categories: ['Data Visualization', 'Computer Graphics']
thumbnail: '/assets/project/cryptogalaxy/demo.gif'
WIP: false
---

[Visit Website →](https://hunkim98.github.io/cryptogalaxy/)

![CryptoGalaxy Logo](/assets/project/cryptogalaxy/logo.png)

![Demo](/assets/project/cryptogalaxy/demo.gif)

CryptoGalaxy is an attempt that visualizes the Crypto Market in a fun and interactive way.

Traditionally, markets are represented as a table of numbers, full of jargon. CryptoGalaxy aims to change that by providing a fun and interactive way to visualize the Crypto Market.

![Crypto Planets Orbiting BTC Sun](/assets/project/cryptogalaxy/screen.png)

The conduits that convey information in CryptoGalaxy are the sun, planet, and spaceships. The Sun represents Bitcoin(BTC), and planets represent other coins such as Ethereum(ETH), Dogecoin(DOGE). The sentiments regarding a specific coin(planet) was shown with the in-and-outs of the spaceships.

The indicators used for visualization were Moving Average Increase Rate, Market Capital, Relative Strength Index(RSI), Money Flow Index(MFI), and Correlation Coefficient of the trend similarity between BTC and a specific coin. 


### Sun 

In CryptoGalaxy, the sun represents the Bitcoin as it is the first crypto currency to have appeared. To a sun, the most important feature is its brightness, and its brightness was connected with the Moving Average Increase Reat of the Bitcoin. 

### Planets

The planets that orbit around the sun represent other coins such as Ethereum(ETH), Dogecoin(DOGE). The size of the planet was connected to the Market Capital of the coin. Different from the sun, the planets have more features that can be connected with the indicators. The planet's orbit speed and ice-age degree were the features that were connected with the indicators. Similar to how the sun's brightness was connected to the Moving Average Increase Rate of the Bitcoin, the orbit speed of the planet was connected to the Moving Average Increase Rate of the coin. The ice-age degree was connected to the MFI of the coin.

### Spaceships

The most dynamic component, the spaceships, represent the main activity happening to a specific coin. The in-and-outs represent the buying and selling of the coin. Since RSI is an indicator that shows the sentiment of the market, the in-and-outs of the spaceships were connected to the RSI of the coin.

The project was built using Typescript and HTML Canvas. The data was fetched from Dunamu's Upbit API in real time. The project was deployed using Github Pages and later exhibited in Seoul National University's 2022 Visual Design Graduation Exhibition.

![Installation Viewed from Side](/assets/project/cryptogalaxy/front.jpg)
