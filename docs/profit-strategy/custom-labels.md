---
id: custom-labels
title: Creating Custom Labels for Bidding
sidebar_label: Custom Labels
description: How to segment your products by Margin, Price, or Seasonality.
---

# Creating Custom Labels for Bidding

**Custom Labels** (0-4) allow you to group products in Google Ads for specific bidding strategies. Ads Magic can populate these dynamically based on your data.

## Popular Strategies

### Strategy A: Margin Buckets (The "Profit" Play)
Group products by how much money they make you.
* **Label 0:** "High Margin" (> 50%)
* **Label 0:** "Low Margin" (< 20%)
* *Action:* Bid aggressively on "High Margin" products; bid conservatively on "Low Margin."

### Strategy B: Price Tiers (The "AOV" Play)
Group products by selling price.
* **Label 1:** "Under $20"
* **Label 1:** "Over $100"
* *Action:* Use different ROAS targets for cheap vs. expensive items.

## How to Set It Up
1.  Go to **Ads Magic Cloud > Feeds > Custom Labels**.
2.  Select **Custom Label 0**.
3.  Choose **"Dynamic Rule"**.
4.  Set Logic: `If [Margin] > 50% then "High Margin"`.
5.  Save & Sync.
