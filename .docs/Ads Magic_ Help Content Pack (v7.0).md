# **Ads Magic: Help Content Pack (v7.0)**

Format: Docusaurus Markdown  
Status: Ready to Publish

## **1\. Connecting TikTok Shop & Ads**

**File:** /docs/tracking-fixing/connect-tiktok.md

\---  
id: connect-tiktok  
title: Connecting TikTok Shop & Ads  
sidebar\_label: Connect TikTok  
description: Sync products to TikTok Shop and track Pixel events.  
\---

\# Connecting TikTok Shop & Ads

Ads Magic helps you tap into the massive social commerce potential of TikTok by syncing your catalog and tracking conversions.

\#\# 1\. Setting up the TikTok Pixel  
1\.  Go to \*\*Ads Magic \> Settings\*\* in WordPress.  
2\.  Click the \*\*"TikTok"\*\* tab.  
3\.  \*\*Pixel ID:\*\* Paste your TikTok Pixel ID (from TikTok Ads Manager \> Assets \> Events).  
4\.  \*\*Events API:\*\* Toggle \*\*"Enable Server-Side Events"\*\* to ON.  
5\.  \*\*Access Token:\*\* Generate an Access Token in your TikTok Events Manager and paste it here.  
6\.  Click \*\*Save Changes\*\*.

\#\# 2\. Syncing Your Catalog  
\*Currently, we support Catalog Sync via Feed URL.\*

1\.  Go to \*\*Ads Magic \> Dashboard\*\*.  
2\.  Copy your \*\*"XML Feed URL"\*\*.  
3\.  Log in to \*\*TikTok Business Center\*\*.  
4\.  Go to \*\*Assets \> Catalogs\*\*.  
5\.  Create a new Catalog and select \*\*"Upload Products" \> "Schedule"\*\*.  
6\.  Paste your Ads Magic Feed URL.  
7\.  Set the schedule to \*\*Daily\*\*.

## **2\. Using Smart Filters to Exclude Products**

**File:** /docs/profit-strategy/smart-filters.md

\---  
id: smart-filters  
title: Using Smart Filters to Exclude Products  
sidebar\_label: Smart Filters  
description: How to remove low-stock or low-margin items from your feed automatically.  
\---

\# Using Smart Filters to Exclude Products

You don't want to pay for clicks on products that are out of stock or unprofitable. \*\*Smart Filters\*\* allow you to exclude these items from your Google Feed automatically.

\#\# Common Filter Rules

\#\#\# Rule 1: Exclude Out of Stock  
\* \*Condition:\* If \`Stock Status\` is \*\*"Out of Stock"\*\*  
\* \*Action:\* \*\*Exclude from Feed\*\*  
\* \*Why:\* Google hates clicks on out-of-stock items and may disapprove your account.

\#\#\# Rule 2: Exclude Low Price Items  
\* \*Condition:\* If \`Price\` is \*\*Less Than $10\*\*  
\* \*Action:\* \*\*Exclude from Feed\*\*  
\* \*Why:\* If your average CPC is $1.00, you will likely lose money on a $10 item.

\#\#\# Rule 3: Exclude Low Margin (Archmage Tier)  
\* \*Condition:\* If \`Margin %\` is \*\*Less Than 15%\*\*  
\* \*Action:\* \*\*Exclude from Feed\*\*  
\* \*Why:\* Protect your profitability.

\#\# How to Configure  
1\.  Go to \*\*Ads Magic Cloud \> Feeds\*\*.  
2\.  Click \*\*"Manage Filters"\*\* next to your Google Feed.  
3\.  Click \*\*"Add New Rule"\*\*.  
4\.  Select your Condition and Value.  
5\.  Click \*\*"Save & Re-Sync"\*\*.

## **3\. Dealing with Merchant Center Suspensions**

**File:** /docs/troubleshooting/account-suspensions.md

\---  
id: account-suspensions  
title: Dealing with Merchant Center Suspensions  
sidebar\_label: Account Suspensions  
description: What to do if Google suspends your account for "Misrepresentation."  
\---

\# Dealing with Merchant Center Suspensions

A suspension notice from Google is scary, but usually fixable. The most common reason is \*\*"Misrepresentation"\*\* (Trustworthiness).

\#\# The "Trust Audit" Checklist  
Before appealing, ensure your site meets these strict standards:

1\.  \*\*Contact Info:\*\* You must have a physical address, email, and phone number visible in your footer or Contact page.  
2\.  \*\*Policies:\*\* You must have clear "Shipping," "Returns," and "Privacy" policy pages linked in the footer.  
3\.  \*\*Checkout:\*\* Your checkout must be secure (HTTPS) and functional.  
4\.  \*\*Price Accuracy:\*\* The price in the feed matches the price on the page exactly. (Use our \*\*Price Mismatch\*\* fix).

\#\# How Ads Magic Helps  
Run a \*\*Health Check\*\* in the plugin. We check for:  
\* SSL Certificate validity.  
\* Price consistency.  
\* Missing policy pages.

\*\*Next Step:\*\* Once you have fixed these items, go to Google Merchant Center \> Account Issues and click \*\*"Request Review."\*\*

## **4\. GDPR, CCPA, and Data Privacy**

**File:** /docs/tracking-fixing/privacy-compliance.md

\---  
id: privacy-compliance  
title: GDPR, CCPA, and Data Privacy  
sidebar\_label: Data Privacy  
description: How Ads Magic handles customer data securely.  
\---

\# GDPR, CCPA, and Data Privacy

As a merchant, you are responsible for your customers' data. Ads Magic is designed to be your compliant partner.

\#\# How We Process Data (CAPI)  
When using Server-Side Tracking, we send customer data (Email, Phone, IP) to Meta/Google.  
\* \*\*Hashing:\*\* We \*\*SHA-256 hash\*\* all personally identifiable information (PII) like emails \*before\* it leaves your server.  
\* \*\*Encryption:\*\* All data in transit is encrypted via TLS 1.3.  
\* \*\*No Storage:\*\* We process the event and forward it. We do not store detailed customer profiles.

\#\# Consent Mode (Cookie Banners)  
Ads Magic respects your site's cookie consent status.  
\* If you use a Consent Management Platform (e.g., Cookiebot), ensure it is configured to block our scripts until consent is granted.  
\* We provide a hook \`adsmagic\_consent\_granted()\` that you can trigger when a user accepts cookies.

:::info  
\*\*Your Responsibility:\*\* You must update your site's Privacy Policy to disclose that you use "Server-Side Tracking" and share data with third-party advertising platforms.  
:::

## **5\. Uninstalling Ads Magic**

**File:** /docs/getting-started/uninstalling.md

\---  
id: uninstalling  
title: Uninstalling Ads Magic  
sidebar\_label: Uninstall Guide  
description: How to safely remove the plugin and clean up data.  
\---

\# Uninstalling Ads Magic

We're sorry to see you go\! If you need to remove the plugin, here is how to do it cleanly.

\#\# Step 1: Disconnect Cloud  
1\.  Go to \*\*Ads Magic \> Settings\*\*.  
2\.  Click \*\*"Disconnect Account"\*\*. This stops any active subscriptions and API syncs.

\#\# Step 2: Delete Plugin  
1\.  Go to \*\*Plugins \> Installed Plugins\*\*.  
2\.  Find \*\*Ads Magic\*\*.  
3\.  Click \*\*Deactivate\*\*, then \*\*Delete\*\*.

\#\# Data Cleanup  
Upon deletion, Ads Magic automatically:  
\* Removes all scheduled cron jobs (Action Scheduler).  
\* Removes the \`\_adsmagic\_cost\` fields from your database (optional setting).  
\* Cleans up temporary cache files.

\*Note: Your product data in Google Merchant Center will remain until it expires (30 days) or you manually delete it in Google.\*  
