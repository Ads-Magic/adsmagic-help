# **Ads Magic: Help Content Pack (v3.0)**

Format: Docusaurus Markdown  
Status: Ready to Publish

## **1\. Setting Up CAPI (Server-Side Tracking)**

**File:** /docs/tracking/setup-capi.md

\---  
id: setup-capi  
title: Enabling Server-Side Tracking (CAPI)  
sidebar\_label: Enable CAPI  
description: How to bypass ad blockers and recover lost sales data.  
\---

\# Enabling Server-Side Tracking (CAPI)

Standard browser pixels lose about 15-20% of conversion data due to ad blockers and iOS14 restrictions. \*\*Server-Side Tracking (CAPI)\*\* fixes this by sending purchase events directly from your server to Meta/Google.

\#\# Prerequisites  
\* \*\*Ads Magic Pro\*\* (Alchemist) or higher.  
\* A connected \*\*Ads Magic Cloud\*\* account.

\#\# The Setup Flow

1\.  Go to \*\*Ads Magic \> Settings\*\* in WordPress.  
2\.  Click the \*\*"Tracking"\*\* tab.  
3\.  Toggle \*\*"Enable Server-Side Tracking"\*\* to \*\*ON\*\*.  
4\.  \*\*Meta (Facebook/Instagram):\*\*  
    \* Enter your \*\*Pixel ID\*\*.  
    \* Enter your \*\*Conversion API Access Token\*\* (Found in Facebook Events Manager \> Settings).  
5\.  \*\*Google Ads:\*\*  
    \* Enter your \*\*Conversion ID\*\* (e.g., AW-123456).  
    \* Enter your \*\*Conversion Label\*\*.  
6\.  Click \*\*Save Changes\*\*.

\#\# Verification  
Wait 24 hours. Check your \*\*Facebook Events Manager\*\*. You should see events labeled as \*\*"Server"\*\* in the "Connection Method" column. The \*\*Match Quality\*\* score should increase to "Great" (8.0+).

## **2\. Fixing "Price Mismatch" Errors**

**File:** /docs/troubleshooting/price-mismatch.md

\---  
id: price-mismatch  
title: Resolving "Price Mismatch" Warnings  
sidebar\_label: Price Mismatch Fix  
description: Why Google sees a different price than your store and how to fix it.  
\---

\# Resolving "Price Mismatch" Warnings

Google constantly crawls your website to ensure the price in your ad matches the price on your landing page. If they differ, your product is disapproved.

\#\# Common Causes & Solutions

\#\#\# 1\. Caching Plugins (The \#1 Culprit)  
Your caching plugin (WP Rocket, W3 Total Cache) might be serving an old version of the page to Google's bot.  
\* \*\*The Fix:\*\* Exclude the Google Bot User Agent (\`Googlebot\`) from your cache settings.

\#\#\# 2\. Currency Converters  
If you use a multi-currency switcher, Google might be seeing the price in Euros while your feed is in Dollars.  
\* \*\*The Fix:\*\* Ensure your currency switcher defaults to the feed's currency when no geo-IP is detected.

\#\#\# 3\. Sync Delay  
If you just changed a price in WooCommerce, it might take 24 hours for a standard feed to update.  
\* \*\*The Fix:\*\* Click \*\*"Sync Now"\*\* in the Ads Magic dashboard to force an immediate API update (Requires Pro).

:::tip  
Always use the \*\*\[Google Rich Results Test\](https://search.google.com/test/rich-results)\*\* to see exactly what price Google is reading from your page code.  
:::

## **3\. The "Zombie Product" Report**

**File:** /docs/strategy/zombie-products.md

\---  
id: zombie-products  
title: Identifying "Zombie Products"  
sidebar\_label: Zombie Products  
description: How to spot products that eat budget but never convert.  
\---

\# The Zombie Product Report

A "Zombie Product" is an item that gets clicks (spends money) but has \*\*Zero Sales\*\* over a long period (30+ days). These products silently kill your ROAS.

\#\# How to Find Them  
\*(Requires Archmage Tier)\*

1\.  Go to \*\*Ads Magic Cloud \> Dashboard\*\*.  
2\.  Click \*\*"Profit Analysis"\*\*.  
3\.  Sort the product table by \*\*"Spend"\*\* (High to Low).  
4\.  Filter for \*\*"ROAS \< 0.5"\*\* or \*\*"Orders \= 0"\*\*.

\#\# The Cure  
Once you identify a Zombie, you have three options:

1\.  \*\*Kill It:\*\* Exclude it from the feed using a \*\*Custom Filter\*\* ("Exclude if ID \= 123").  
2\.  \*\*Fix It:\*\* Often, the price is too high or the image is bad. Check the \*\*Click-Through Rate (CTR)\*\*. If CTR is low, fix the image. If CTR is high but conversion is low, fix the price.  
3\.  \*\*Optimize It:\*\* Use our \*\*Gen AI\*\* tool to rewrite the title and description to match search intent better.

## **4\. Agency White Label Setup**

**File:** /docs/agency/white-label.md

\---  
id: white-label  
title: Setting Up White Label Branding  
sidebar\_label: White Label Setup  
description: How to replace the Ads Magic logo with your Agency brand.  
\---

\# Setting Up White Label Branding

As an Agency Partner, you can rebrand the Ads Magic plugin so your clients see \*\*your\*\* logo and colors inside their WordPress admin.

\#\# Configuration Steps

1\.  Log in to your \*\*Partner Dashboard\*\* (\`app.adsmagic.us\`).  
2\.  Go to \*\*Settings \> White Label\*\*.  
3\.  \*\*Agency Name:\*\* Enter your company name (e.g., "Apex Media").  
4\.  \*\*Logo URL:\*\* Paste the link to your logo image (Recommended: 200x50px PNG).  
5\.  \*\*Menu Icon:\*\* Upload a square icon for the WP Admin sidebar.  
6\.  \*\*Color Scheme:\*\* Choose a primary color (Hex Code) for buttons and links.  
7\.  Click \*\*Save Branding\*\*.

\#\# Deployment  
This branding automatically applies to \*\*all\*\* sites connected to your Master API Key. You do not need to configure each client site individually.

:::note  
The "Billing" tab is automatically hidden for all White Label sub-accounts, ensuring your clients never see our wholesale pricing.  
:::

## **5\. Inputting Cost of Goods (COGS)**

**File:** /docs/strategy/calculating-cogs.md

\---  
id: calculating-cogs  
title: How to Input Cost of Goods (COGS)  
sidebar\_label: Input COGS  
description: The foundation of Profit Tracking.  
\---

\# How to Input Cost of Goods (COGS)

To calculate \*\*Net Profit\*\* and \*\*POAS\*\*, Ads Magic needs to know how much each product costs you to buy or make.

\#\# Where to Enter Data

\#\#\# Option A: The "All Products" List (Quick)  
1\.  Go to \*\*Products \> All Products\*\* in WordPress.  
2\.  We add a \*\*"Cost"\*\* column to this list.  
3\.  Click the \*\*"Quick Edit"\*\* button on any product.  
4\.  Enter the value in the \*\*"Cost ($)"\*\* field.  
5\.  Click Update.

\#\#\# Option B: Bulk Edit (Fastest)  
1\.  Select multiple products using the checkboxes.  
2\.  Select \*\*Edit\*\* from the "Bulk Actions" dropdown and click Apply.  
3\.  Enter a value in the \*\*Cost\*\* field to apply it to all selected items (good for uniform costs).

\#\#\# Option C: Import via CSV  
If you have thousands of products:  
1\.  Use the standard WooCommerce CSV Importer.  
2\.  Map your CSV cost column to the meta field: \`\_adsmagic\_cost\`.  
