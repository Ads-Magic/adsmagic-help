# **Ads Magic: Help Content Pack (v4.0)**

Format: Docusaurus Markdown  
Status: Ready to Publish

## **1\. Connecting Google Merchant Center**

**File:** /docs/tracking-fixing/connect-gmc.md

\---  
id: connect-gmc  
title: Connecting Google Merchant Center  
sidebar\_label: Connect GMC  
description: How to link your Google Merchant Center account for product syncing.  
\---

\# Connecting Google Merchant Center

To list your products on Google Shopping, you must connect your Google Merchant Center (GMC) account to Ads Magic.

\#\# The Connection Flow

1\.  Go to \*\*Ads Magic \> Settings\*\* in WordPress.  
2\.  Click the \*\*"Google"\*\* tab.  
3\.  Click the \*\*"Sign in with Google"\*\* button.  
    \* \*Note:\* Ensure you sign in with the Google account that has admin access to your GMC account.  
4\.  Grant the requested permissions (Manage Merchant Center).  
5\.  Once connected, select your \*\*Merchant Center ID\*\* from the dropdown list.  
6\.  Click \*\*"Save & Sync"\*\*.

\#\# Verification  
Go to your \[Google Merchant Center\](https://merchants.google.com/) dashboard. Check the \*\*Products \> Feeds\*\* section. You should see a new feed named \`Ads Magic Content API\` with a status of "Processing" or "Success".

## **2\. Connecting Meta (Facebook/Instagram)**

**File:** /docs/tracking-fixing/connect-meta.md

\---  
id: connect-meta  
title: Connecting Meta (Facebook/Instagram)  
sidebar\_label: Connect Meta  
description: How to link your Meta Business Manager for catalogs and pixels.  
\---

\# Connecting Meta (Facebook/Instagram)

Ads Magic allows you to sync your product catalog to Facebook/Instagram shops and track conversions via the Meta Pixel and CAPI.

\#\# The Connection Flow

1\.  Go to \*\*Ads Magic \> Settings\*\* in WordPress.  
2\.  Click the \*\*"Meta"\*\* tab.  
3\.  \*\*Pixel ID:\*\* Enter your Meta Pixel ID.  
4\.  \*\*Access Token:\*\* Enter your Conversion API Access Token (found in Events Manager \> Settings).  
5\.  \*\*Catalog ID:\*\* (Optional) Enter your Catalog ID if you want to sync products directly.  
6\.  Click \*\*"Save Changes"\*\*.

\#\# Generating a Feed URL for Meta  
If you prefer a scheduled fetch:  
1\.  Go to \*\*Ads Magic \> Dashboard\*\*.  
2\.  Copy the \*\*"XML Feed URL"\*\*.  
3\.  In Meta Commerce Manager, go to \*\*Catalog \> Data Sources \> Add Items\*\*.  
4\.  Select \*\*"Data Feed"\*\* \> \*\*"Scheduled Feed"\*\*.  
5\.  Paste your XML Feed URL.

## **3\. Understanding the Profit Dashboard**

**File:** /docs/profit-strategy/profit-dashboard.md

\---  
id: profit-dashboard  
title: Understanding the Profit Dashboard  
sidebar\_label: Profit Dashboard  
description: How to read your Profit vs. Spend reports.  
\---

\# Understanding the Profit Dashboard

The \*\*Profit Dashboard\*\* (available on the \*Archmage\* tier) gives you a real-time view of your business health, moving beyond simple revenue metrics.

\#\# Key Metrics Explained

\#\#\# 1\. Gross Revenue  
The total value of sales processed by your store.  
\* \*Source:\* WooCommerce Orders.

\#\#\# 2\. Ad Spend  
The total amount spent on connected ad platforms (Google Ads, Meta Ads).  
\* \*Source:\* API Sync.

\#\#\# 3\. Cost of Goods (COGS)  
The total cost to acquire or produce the products sold.  
\* \*Source:\* Your product inputs (via \`\_adsmagic\_cost\` field).

\#\#\# 4\. Net Profit  
The "True North" metric.  
\* \*Formula:\* \`Revenue \- (COGS \+ Ad Spend \+ Shipping/Tax)\`.

\#\# The Chart  
The main chart visualizes these metrics over time.  
\* \*\*Green Bar:\*\* Revenue.  
\* \*\*Red Line:\*\* Ad Spend.  
\* \*\*Blue Line:\*\* Net Profit.

:::tip  
Use this dashboard to spot trends. If Revenue is going up but Profit is flat, your Ad Spend or COGS might be eating your margins.  
:::

## **4\. Data Deduplication Explained**

**File:** /docs/tracking-fixing/deduplication.md

\---  
id: deduplication  
title: Data Deduplication Explained  
sidebar\_label: Deduplication  
description: How we ensure you don't count the same sale twice.  
\---

\# Data Deduplication Explained

When using both a \*\*Browser Pixel\*\* and \*\*Server-Side API (CAPI)\*\*, there is a risk of counting the same purchase event twice (once from the browser, once from the server). Ads Magic handles this automatically.

\#\# How it Works

1\.  \*\*Event ID:\*\* We generate a unique \`event\_id\` for every purchase transaction.  
2\.  \*\*Double Send:\*\* We send this ID with \*both\* the Browser Pixel event and the Server-Side CAPI event.  
3\.  \*\*Platform Logic:\*\* Meta and Google receive both events. They check the \`event\_id\`.  
    \* If they receive the Browser event first, they process it.  
    \* When the Server event arrives with the \*same\* ID, they discard it (deduplicate).  
    \* If the Browser event was blocked (e.g., ad blocker), they process the Server event instead.

\#\# Why this Matters  
This "Redundant Setup" ensures you get maximum data accuracy without inflating your reporting numbers. You don't need to do anything; Ads Magic manages the IDs for you.

## **5\. Agency Multi-Tenant Access**

**File:** /docs/agency/multi-tenant.md

\---  
id: multi-tenant  
title: Managing Multiple Clients (Multi-Tenant)  
sidebar\_label: Multi-Tenant Access  
description: How to switch between client accounts in the Agency Dashboard.  
\---

\# Managing Multiple Clients (Multi-Tenant)

As an Agency Partner, you can manage all your client stores from a single \*\*Command Center\*\*.

\#\# Accessing Client Accounts

1\.  Log in to your \*\*Partner Dashboard\*\* (\`app.adsmagic.us\`).  
2\.  Click the \*\*"Clients"\*\* tab in the sidebar.  
3\.  You will see a list of all connected stores.  
4\.  Click \*\*"Manage"\*\* next to any store name.  
5\.  You are now viewing that specific store's dashboard. You can configure feeds, check health, and view profit reports as if you were the merchant.

\#\# Adding a New Client  
1\.  Click \*\*"Add Client"\*\*.  
2\.  Enter the client's Store URL.  
3\.  Use your \*\*Master API Key\*\* to generate a connection link.  
4\.  Send this link to your client (or install the plugin yourself using your Agency License Key).  
