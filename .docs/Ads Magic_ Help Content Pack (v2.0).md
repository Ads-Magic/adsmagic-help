# **Ads Magic: Help Content Pack (v2.0)**

Format: Docusaurus Markdown  
Status: Ready to Publish

## **1\. Installation Guide**

**File:** /docs/getting-started/installation.md

\---  
id: installation  
title: Installing Ads Magic  
sidebar\_label: Installation Guide  
description: How to install and activate the Ads Magic plugin on WooCommerce.  
\---

\# Installing Ads Magic on WooCommerce

Welcome to the Guild\! Installing \*\*Ads Magic Google Product Feed and Profit Tracking\*\* is the first step to turning your product data into a profit engine.

\#\# Prerequisites  
\* A working \*\*WordPress\*\* website.  
\* \*\*WooCommerce\*\* installed and active.  
\* PHP 7.4 or higher (Recommended).

\#\# Step-by-Step Installation

\#\#\# Method 1: Via WordPress Admin (Easiest)  
1\.  Log in to your WordPress Dashboard.  
2\.  Navigate to \*\*Plugins \> Add New\*\*.  
3\.  In the search bar, type: \`Ads Magic Google Product Feed and Profit Tracking\`.  
4\.  Look for the plugin with the \*\*Purple Prism Icon\*\* by \*AdsMagic\*.  
5\.  Click \*\*Install Now\*\*.  
6\.  Once installed, click \*\*Activate\*\*.

\#\#\# Method 2: Manual Upload (Zip File)  
If you downloaded the plugin from \[WordPress.org\](https://wordpress.org/plugins/adsmagic-product-feeds-for-woocommerce/):  
1\.  Go to \*\*Plugins \> Add New\*\*.  
2\.  Click \*\*Upload Plugin\*\* at the top.  
3\.  Select the \`adsmagic-product-feeds-for-woocommerce.zip\` file from your computer.  
4\.  Click \*\*Install Now\*\* and then \*\*Activate\*\*.

\#\# Next Steps  
Once activated, you will see a new \*\*Ads Magic\*\* menu item in your sidebar. Click it to run your first \*\*\[Health Check\](./health-check)\*\*.

## **2\. Running a Health Check**

**File:** /docs/getting-started/health-check.md

\---  
id: health-check  
title: Running a Feed Health Check  
sidebar\_label: The Health Check  
description: Understand your Profit Audit and fix critical errors.  
\---

\# The Feed Health Check

Most plugins just generate a file. Ads Magic performs a \*\*Profit Audit\*\* to ensure that file actually makes you money.

\#\# How to Run It  
1\.  Go to \*\*Ads Magic \> Dashboard\*\*.  
2\.  The scan runs automatically upon loading.  
3\.  Look at the \*\*"Feed Health"\*\* card at the top.

\#\# Understanding the Status

\#\#\# 🟢 Healthy (Green)  
Your data is clean. You are ready to sync to Google Merchant Center.

\#\#\# 🟡 Warning (Yellow)  
Your feed will work, but it's not optimized.  
\* \*Example:\* "Missing Brand attribute" or "Short Description."  
\* \*Impact:\* Lower ad rank, but not disapproval.

\#\#\# 🔴 Critical (Red)  
\*\*Stop\!\*\* These errors will get your products disapproved or your account suspended.  
\* \*Example:\* "Missing GTIN," "Price Mismatch," or "Missing Image."  
\* \*Action:\* You must fix these before enabling the feed.

:::tip Pro Tip  
Click the \*\*"Fix"\*\* button next to any error to jump directly to the product edit screen or bulk editor.  
:::

## **3\. Fixing "Missing GTIN"**

**File:** /docs/troubleshooting/fixing-gtin.md

\---  
id: fixing-gtin  
title: How to Fix "Missing GTIN" Errors  
sidebar\_label: Missing GTIN Fix  
description: Resolve the \#1 reason for Google Shopping disapproval.  
\---

\# How to Fix "Missing GTIN" Errors

One of the most common reasons products are disapproved is a missing \*\*Global Trade Item Number (GTIN)\*\*. Google requires this for all branded goods to verify authenticity.

\#\# The Solution

Since you are using the \*\*Ads Magic Plugin\*\*, we read data directly from your standard WooCommerce fields to keep things simple.

\#\#\# Scenario A: Selling Custom / Handmade Goods  
If you sell products you make yourself (e.g., art, print-on-demand) that \*\*do not\*\* have a manufacturer barcode:

1\.  Go to \*\*Products\*\* in your WordPress Admin.  
2\.  Edit the product with the error.  
3\.  Scroll down to the \*\*Product Data\*\* section.  
4\.  Click the \*\*Inventory\*\* tab.  
5\.  Find the \*\*"MPN / GTIN"\*\* or \*\*"Global Identifier"\*\* fields (Ads Magic enriches this area).  
6\.  \*Note:\* For custom goods, you usually do not enter a GTIN. Instead, ensure your feed settings in Ads Magic have "Identifier Exists" set to \*\*No\*\* for this category.  
7\.  \*\*Update\*\* the product.

\#\#\# Scenario B: Selling Branded Goods (Nike, Sony, etc.)  
If you resell products that have a barcode:

1\.  Find the barcode (UPC/EAN) on the product packaging.  
2\.  Go to \*\*Products \> Edit Product\*\*.  
3\.  Open the \*\*Inventory\*\* tab in the Product Data box.  
4\.  Enter the number in the \*\*GTIN / UPC\*\* field provided.  
5\.  \*\*Update\*\* the product.

:::info  
\*\*Why this matters:\*\* Products with valid GTINs receive up to \*\*40% more impressions\*\* on Google Shopping. It is worth the effort to find them.  
:::

## **4\. Connecting to the Cloud**

**File:** /docs/getting-started/connect-cloud.md

\---  
id: connect-cloud  
title: Connecting to Ads Magic Cloud  
sidebar\_label: Connect Cloud  
description: Unlock Real-Time Sync and Server-Side Tracking.  
\---

\# Unlocking the "Magician" Tier

The free plugin handles your basic XML feeds. To unlock \*\*Real-Time Sync\*\* (instant price updates) and \*\*Server-Side Tracking\*\* (CAPI), you must connect to our Cloud Engine.

\#\# The Connection Flow

1\.  Go to \*\*Ads Magic\*\* in your WordPress Admin.  
2\.  Click the \*\*"Connect to Ads Magic Cloud"\*\* tab and follow the instructions, or click the blue \*\*"Connect Now"\*\* button at the top of the Ad Magic plugin pages.  
3\.  A popup window will appear asking you to \*\*"Sign in with Google"\*\*.  
    \* \*Note:\* This creates your secure account on \`app.adsmagic.us\`.  
4\.  Authorize the connection.  
5\.  The popup will close, and your plugin dashboard will reload.

\#\# What Changed?  
You will now see a \*\*"Connected"\*\* badge.  
\* \*\*Real-Time Sync:\*\* Enabled. Price changes now push to Google in \<5 minutes.  
\* \*\*CAPI:\*\* Enabled. We are now capturing server-side conversion events.

:::tip  
Connecting to the Cloud automatically starts your \*\*14-Day Free Trial\*\* of the Pro features. No credit card is required for the initial connection.  
:::

## **5\. POAS 101 (The Strategy)**

**File:** /docs/strategy/poas-101.md

\---  
id: poas-101  
title: Why ROAS is a Lie (Intro to POAS)  
sidebar\_label: POAS 101  
description: Stop bidding on revenue. Start bidding on profit.  
\---

\# Profit on Ad Spend (POAS) 101

Most merchants optimize their ads for \*\*ROAS\*\* (Return on Ad Spend).  
\* \*Formula:\* Revenue / Ad Spend.

The problem? \*\*ROAS is blind.\*\* It doesn't know your product costs.

\#\# The Trap  
\* \*\*Product A:\*\* Sell for $100. Cost is $20. Profit \= $80.  
\* \*\*Product B:\*\* Sell for $100. Cost is $90. Profit \= $10.

If you spend $30 to sell Product B, you have a \*\*3.3 ROAS\*\* (Good on paper), but you \*\*lost $20\*\* (Bad in reality).

\#\# The Ads Magic Solution: POAS  
We inject your \*\*Cost of Goods (COGS)\*\* into the data we send to Google. This allows you to see \*\*Net Profit\*\* inside Google Ads.

\#\#\# How to Switch (Step-by-Step)

1\.  \*\*Input Cost Data:\*\* Ensure you have entered \*\*Cost\*\* data for your products in WooCommerce (using the Ads Magic field or a COGS plugin).  
2\.  \*\*Upgrade:\*\* Move to the \*\*Archmage (Elite)\*\* plan to enable profit tracking.  
3\.  \*\*Wait 24 Hours:\*\* We will automatically calculate \`Net Profit\` for every new order and send it to Google as a custom conversion value.  
4\.  \*\*Configure Google Ads:\*\*  
    \* Go to \*\*Google Ads \> Tools \> Conversions\*\*.  
    \* Ensure the "Ads Magic Purchase" conversion action is set to "Primary."  
    \* Go to \*\*Campaigns \> Columns \> Modify Columns\*\*.  
    \* Click \*\*"Custom Columns"\*\* \-\> \*\*"+ New Column"\*\*.  
    \* Name it \*\*"POAS"\*\*.  
    \* Formula: \`( Conversion Value (Profit) / Cost )\`.  
    \* Save and Apply.  
5\.  \*\*Bid on POAS:\*\* Now, instead of targeting "ROAS 400%," target "POAS 100%" (Break Even) or "POAS 200%" (2x Profit).

\> \*\*Result:\*\* Google will stop bidding on Product B (Low Margin) and spend more on Product A (High Margin).  
