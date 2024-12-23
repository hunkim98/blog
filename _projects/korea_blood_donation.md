---
title: "Visualizing a Nation's Blood Donation and Demand"
excerpt: 'There have been multiple articles explaining the blood donation system worldwide is suffering from a lack of blood donation. To understand whether such a problem exists, this data visualization project targeted the blood donation system of South Korea and visualized its blood donation status.'
date: '2024-12-21'
author:
  name: Kim Dong Hun
keyword: 'Data Visualization'
categories: ['Data Visualization', 'Policy']
WIP: false
thumbnail: '/assets/project/korea_blood_donation/thumbnail.gif'
---

[Visit Website →](https://hunkim98.github.io/korea-blood-donation/)

![Demo](/assets/project/korea_blood_donation/thumbnail.gif)

Many report that the blood donation rate is decreasing worldwide. In January 2024, Red Cross announced that the current status of blood donation is a emergency blood shortage, explaining that the number of U.S. blood donors hit all-time low for the past 20 years. To confirm whether such a problem exists, I decided to target a country that has a centralized blood donation system, South Korea, and visualize its blood donation status from 2000 to 2022.

The data was collected from KOSIS(KOrean Statistical Information Service). We gathered the number of blood donors, the number of blood donation, and the number of blood donation centers. We defined data that was related to donation as supply. To gather data related to demand, we collected additional data from KOSIS such as the number of patients, the number of surgeries, and the number of blood transfusions. By extrapolating how much blood is used for each surgeries and blood transfusions, we were able to estimate the demand for blood. Lastly, we also collected data related to what events the Red Cross held to promote blood donation in the hopes of finding correlation between the promotional events and the number of blood donors.

![Data Heatmap](/assets/project/korea_blood_donation/heatmap.png)

With all our data, we decided to create an effective visual representation of the blood donation supply, blood usage demand, and the promotional events. Since we found that there is an uneven distribution of blood donation frequencies depending on the month, we decided to find a way to effectively visualize the ratio of blood donation and blood usage rather than their absolute values. We ended up using a balancer-looking shape to represent the ratio of blood donation and blood usage. The left thick line represented the blood donation, and the right colorless thin line represented the blood usage. The thicker the left area, the more blood donation there was compared to the blood usage. We used color and angle to represent how much the ratio is off.

![Data Heatmap](/assets/project/korea_blood_donation/tokenization.png)

Through the visualization we could find that South Korea especially has a healthy ratio of blood donation and blood usage especially near May, and this seems to be due to the summer season and the frequency of promotional events held by the Red Cross. However, the ratio of blood donation and blood usage is not as healthy in the winter season. Also, after March 2020, the time when COVID-19 started to spread in Korea, the ratio of blood donation and blood usage has decreased significantly. From this, we can know that the COVID-19 pandemic has had a significant impact on the blood donation system in South Korea.