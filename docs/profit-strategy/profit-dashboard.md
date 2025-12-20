---
id: profit-dashboard
title: Understanding the Profit Dashboard
sidebar_label: Profit Dashboard
description: How to read your Profit vs. Spend reports.
---

# Understanding the Profit Dashboard

The **Profit Dashboard** (available on the *Archmage* tier) gives you a real-time view of your business health, moving beyond simple revenue metrics.

## Key Metrics Explained

### 1. Gross Revenue
The total value of sales processed by your store.
* *Source:* WooCommerce Orders.

### 2. Ad Spend
The total amount spent on connected ad platforms (Google Ads, Meta Ads).
* *Source:* API Sync.

### 3. Cost of Goods (COGS)
The total cost to acquire or produce the products sold.
* *Source:* Your product inputs (via `_adsmagic_cost` field).

### 4. Net Profit
The "True North" metric.
* *Formula:* `Revenue - (COGS + Ad Spend + Shipping/Tax)`.

## The Chart
The main chart visualizes these metrics over time.
* **Green Bar:** Revenue.
* **Red Line:** Ad Spend.
* **Blue Line:** Net Profit.

:::tip
Use this dashboard to spot trends. If Revenue is going up but Profit is flat, your Ad Spend or COGS might be eating your margins.
:::
