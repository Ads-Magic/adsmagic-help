---
id: google-analytics
title: Google Analytics 4 & Google Ads Setup
sidebar_label: GA4 & Google Ads
description: How to configure Google tracking pixels.
---

# Google Analytics & Ads Tracking

AdsMagic allows you to inject the official Google tracking tags (gtag.js) directly into your site, supporting both Google Analytics 4 (GA4) and Google Ads Conversion Tracking.

## Where to Configure

1.  Go to **Ads Magic > Settings**.
2.  Scroll down to the **Google Tracking** section.

## Google Analytics 4 (GA4)

To enable GA4 tracking:
1.  Enter your **Measurement ID** (e.g., `G-XXXXXXXXXX`) in the **GA4 Measurement ID** field.
2.  This automatically enables:
    *   `page_view` tracking.
    *   `view_item` (Product views).
    *   `add_to_cart`.
    *   `purchase` (with transaction value).

## Google Ads Conversion Tracking

To enable Google Ads tracking for remarketing and conversions:
1.  Enter your **Conversion ID** (e.g., `AW-123456789`) in the **Google Ads ID** field.
2.  (Optional) Enter your **Conversion Label** if strictly required for specific conversion actions.

### Enhanced Conversions
AdsMagic automatically collects and hashes user data (Email, Phone) provided during checkout to support Google's **Enhanced Conversions**. This improves attribution accuracy by matching customers even if cookies are blocked.
