---
id: margin-labels
title: Using Profit Margin for Custom Labels
sidebar_label: Margin Custom Labels
description: Segmenting your feed by profitability for smarter campaigns.
---

# Using Profit Margin for Custom Labels

One of the most powerful features of the **Archmage** tier is the ability to dynamically assign **Custom Labels** (0-4) based on your product's profit margin.

## Why Do This?
Google Shopping campaigns bid on groups of products. By grouping products with similar margins, you can set the perfect ROAS target for each group.

## Configuration Guide

1.  Go to **Ads Magic Cloud > Feeds > Custom Labels**.
2.  Select **Custom Label 0** (or any available slot).
3.  Choose **"Dynamic Rule"**.
4.  **Create Rule 1 (High Margin):**
    * *Condition:* If `Margin %` is **Greater Than 50%**
    * *Value:* `High Margin`
5.  **Create Rule 2 (Low Margin):**
    * *Condition:* If `Margin %` is **Less Than 20%**
    * *Value:* `Low Margin`
6.  **Create Rule 3 (Medium Margin):**
    * *Condition:* Default (Matches everything else)
    * *Value:* `Medium Margin`
7.  Click **Save & Sync**.

## In Google Ads
1.  Create a **Standard Shopping** or **PMax** campaign.
2.  Subdivide your product groups by **Custom Label 0**.
3.  Set aggressive bids for "High Margin" and conservative bids for "Low Margin."
