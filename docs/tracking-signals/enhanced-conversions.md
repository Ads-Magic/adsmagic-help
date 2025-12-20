---
id: enhanced-conversions
title: Setting Up Google Enhanced Conversions
sidebar_label: Enhanced Conversions
description: Improve Google Ads accuracy by sending hashed customer data.
---

# Setting Up Google Enhanced Conversions

**Enhanced Conversions** allows Google Ads to match more sales to ad clicks by using hashed customer data (email, phone, address) captured at checkout. This is the Google equivalent of Meta's CAPI.

## Why Enable It?
* **Recover Data:** Matches users who might not have a cookie (cross-device, incognito).
* **Improve Bidding:** Gives Google's AI better data to optimize your campaigns.

## Setup Steps

1.  **Enable in Google Ads:**
    * Go to **Google Ads > Goals > Conversions**.
    * Open your "Purchase" conversion action.
    * Expand "Enhanced conversions" and check **"Turn on enhanced conversions."**
    * Select **"API"** as the method.

2.  **Enable in Ads Magic:**
    * Go to **Ads Magic > Settings > Tracking**.
    * Toggle **"Enable Google Enhanced Conversions"** to **ON**.
    * Ensure your **Conversion ID** and **Label** are correct.
    * Click **Save**.

## Verification
Wait 24-48 hours. Check the "Diagnostics" tab in your Google Ads Conversion settings. You should see a status of **"Recording (Enhanced Conversions)"**.
