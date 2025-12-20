---
id: setup-capi
title: Enabling Server-Side Tracking (CAPI)
sidebar_label: Enable CAPI
description: How to bypass ad blockers and recover lost sales data.
---

# Enabling Server-Side Tracking (CAPI)

Standard browser pixels lose about 15-20% of conversion data due to ad blockers and iOS14 restrictions. **Server-Side Tracking (CAPI)** fixes this by sending purchase events directly from your server to Meta/Google.

## Prerequisites
* **Ads Magic Pro** (Alchemist) or higher.
* A connected **Ads Magic Cloud** account.

## The Setup Flow

1.  Go to **Ads Magic > Settings** in WordPress.
2.  Click the **"Tracking"** tab.
3.  Toggle **"Enable Server-Side Tracking"** to **ON**.
4.  **Meta (Facebook/Instagram):**
    * Enter your **Pixel ID**.
    * Enter your **Conversion API Access Token** (Found in Facebook Events Manager > Settings).
5.  **Google Ads:**
    * Enter your **Conversion ID** (e.g., AW-123456).
    * Enter your **Conversion Label**.
6.  Click **Save Changes**.

## Verification
Wait 24 hours. Check your **Facebook Events Manager**. You should see events labeled as **"Server"** in the "Connection Method" column. The **Match Quality** score should increase to "Great" (8.0+).
