---
id: poas-101
title: Why ROAS is a Lie (Intro to POAS)
sidebar_label: POAS 101
description: Stop bidding on revenue. Start bidding on profit.
---

# Profit on Ad Spend (POAS) 101

Most merchants optimize their ads for **ROAS** (Return on Ad Spend).
* *Formula:* Revenue / Ad Spend.

The problem? **ROAS is blind.** It doesn't know your product costs.

## The Trap
* **Product A:** Sell for $100. Cost is $20. Profit = $80.
* **Product B:** Sell for $100. Cost is $90. Profit = $10.

If you spend $30 to sell Product B, you have a **3.3 ROAS** (Good on paper), but you **lost $20** (Bad in reality).

## The Ads Magic Solution: POAS
We inject your **Cost of Goods (COGS)** into the data we send to Google. This allows you to see **Net Profit** inside Google Ads.

### How to Switch (Step-by-Step)

1.  **Input Cost Data:** Ensure you have entered **Cost** data for your products in WooCommerce (using the Ads Magic field or a COGS plugin).
2.  **Upgrade:** Move to the **Archmage (Elite)** plan to enable profit tracking.
3.  **Wait 24 Hours:** We will automatically calculate `Net Profit` for every new order and send it to Google as a custom conversion value.
4.  **Configure Google Ads:**
    * Go to **Google Ads > Tools > Conversions**.
    * Ensure the "Ads Magic Purchase" conversion action is set to "Primary."
    * Go to **Campaigns > Columns > Modify Columns**.
    * Click **"Custom Columns"** -> **"+ New Column"**.
    * Name it **"POAS"**.
    * Formula: `( Conversion Value (Profit) / Cost )`.
    * Save and Apply.
5.  **Bid on POAS:** Now, instead of targeting "ROAS 400%," target "POAS 100%" (Break Even) or "POAS 200%" (2x Profit).

> **Result:** Google will stop bidding on Product B (Low Margin) and spend more on Product A (High Margin).
