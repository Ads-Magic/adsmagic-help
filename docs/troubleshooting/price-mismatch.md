---
id: price-mismatch
title: Resolving "Price Mismatch" Warnings
sidebar_label: Price Mismatch Fix
description: Why Google sees a different price than your store and how to fix it.
---

# Resolving "Price Mismatch" Warnings

Google constantly crawls your website to ensure the price in your ad matches the price on your landing page. If they differ, your product is disapproved.

## Common Causes & Solutions

### 1. Caching Plugins (The #1 Culprit)
Your caching plugin (WP Rocket, W3 Total Cache) might be serving an old version of the page to Google's bot.
* **The Fix:** Exclude the Google Bot User Agent (`Googlebot`) from your cache settings.

### 2. Currency Converters
If you use a multi-currency switcher, Google might be seeing the price in Euros while your feed is in Dollars.
* **The Fix:** Ensure your currency switcher defaults to the feed's currency when no geo-IP is detected.

### 3. Sync Delay
If you just changed a price in WooCommerce, it might take 24 hours for a standard feed to update.
* **The Fix:** Click **"Sync Now"** in the Ads Magic dashboard to force an immediate API update (Requires Pro).

:::tip
Always use the **[Google Rich Results Test](https://search.google.com/test/rich-results)** to see exactly what price Google is reading from your page code.
:::
