---
id: privacy-compliance
title: GDPR, CCPA, and Data Privacy
sidebar_label: Data Privacy
description: How Ads Magic handles customer data securely.
---

# GDPR, CCPA, and Data Privacy

As a merchant, you are responsible for your customers' data. Ads Magic is designed to be your compliant partner.

## How We Process Data (CAPI)
When using Server-Side Tracking, we send customer data (Email, Phone, IP) to Meta/Google.
* **Hashing:** We **SHA-256 hash** all personally identifiable information (PII) like emails *before* it leaves your server.
* **Encryption:** All data in transit is encrypted via TLS 1.3.
* **No Storage:** We process the event and forward it. We do not store detailed customer profiles.

## Consent Mode (Cookie Banners)
Ads Magic respects your site's cookie consent status.
* If you use a Consent Management Platform (e.g., Cookiebot), ensure it is configured to block our scripts until consent is granted.
* We provide a hook `adsmagic_consent_granted()` that you can trigger when a user accepts cookies.

:::info
**Your Responsibility:** You must update your site's Privacy Policy to disclose that you use "Server-Side Tracking" and share data with third-party advertising platforms.
:::
