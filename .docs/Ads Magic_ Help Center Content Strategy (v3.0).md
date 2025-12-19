# **Ads Magic: Help Center Content Strategy (v3.0)**

URL: help.adsmagic.us  
Theme: The Grimoire (Knowledge Base)  
Goal: Instant ticket deflection via intuitive navigation.

## **1\. Homepage Hero Section**

* **Layout:** Clean, search-focused. Dark background with a subtle "search beam" effect.  
* Headline:  
  How can we help you grow?  
* Search Placeholder:  
  Type a keyword (e.g., "GTIN", "CAPI", "Installation")...  
* Subhead:  
  Search the Grimoire for instant answers on installation, tracking setup, and profit optimization.

## **2\. Quick Start (The "Spark" Path)**

**New to Ads Magic? Start here.**

* 🚀 **\[Installation Guide\]**: How to install the plugin on WordPress in 2 minutes.  
* 🏥 **\[Running a Health Check\]**: Understanding your first Profit Audit report.  
* 🔗 **\[Connecting Google\]**: How to link your Merchant Center account securely.  
* 🛒 **\[Connecting Meta\]**: Setting up your first Pixel and Catalog.

## **3\. Browse by Topic (The Categories)**

### **🛠️ Troubleshooting & Fixes**

*Solve the most common feed errors instantly.*

* \[Fix "Missing GTIN" or MPN errors\]  
* \[Fix "Image Too Small" or Quality issues\]  
* \[Why are my products "Disapproved"?\]  
* \[Understanding "Price Mismatch" warnings\]

### **⚡ Tracking & Signals (The Alchemist)**

*Secure your data with Server-Side accuracy.*

* \[Setting up Server-Side Tracking (CAPI)\]  
* \[Verifying your Pixel Match Quality\]  
* \[How "Real-Time Sync" works\]  
* \[Debugging conversion discrepancies\]

### **💰 Profit & Strategy (The Archmage)**

*Stop bidding on revenue. Bid on profit.*

* \[How to calculate and input COGS\]  
* \[Understanding the Profit Dashboard\]  
* \[Setting up POAS Bidding in Google Ads\]  
* \[Using Smart Repricing Rules\]

### **🤝 Agency & Partners (The Guild)**

*Scale your client operations.*

* \[Setting up the White Label Dashboard\]  
* \[Managing multiple clients (Multi-Tenant)\]  
* \[Client Onboarding Checklist\]  
* \[Agency Billing & Licensing FAQ\]

## **4\. Popular Articles (Trending Magic)**

* 🔥 *How to recover lost iOS14 sales with CAPI*  
* 🔥 *The difference between XML Feeds and API Sync*  
* 🔥 *Why your ROAS doesn't match your Bank Account*

## **5\. Critical Article: How to Fix "Missing GTIN" Errors**

*This addresses your specific correction regarding WooCommerce native fields.*

Title: How to Resolve "Missing Attribute: GTIN"  
Description: Learn how to fix the most common Google Merchant Center disapproval.

### **The Problem**

You see a red error in your Health Check: Missing Attribute: GTIN.  
This means your product feed does not contain the barcode (UPC/EAN/ISBN) for a product. Google requires this for all branded goods.

### **The Solution**

#### **Method 1: For Custom/Handmade Products (No Barcode)**

If you sell custom goods (like handmade crafts or print-on-demand) that *do not* have a manufacturer barcode, you must tell Google that the "Identifier Exists" is False.

1. Log in to your **WordPress Admin**.  
2. Go to **Products \> All Products**.  
3. Click **Edit** on the product with the error.  
4. Scroll down to the **Product Data** box.  
5. Click the **Ads Magic** tab (added by our plugin).  
6. Find the **"Google Attributes"** section.  
7. Set **Identifier Exists** to **"No" (False)**.  
8. Click **Update** to save the product.

#### **Method 2: For Branded Products (Has Barcode)**

If you are reselling branded goods (e.g., Nike, Sony), you *must* provide the GTIN.

1. Locate the barcode number on your product packaging.  
2. Go to **Products \> Edit Product** in WordPress.  
3. Open the **Ads Magic** tab in the Product Data box.  
4. Enter the number in the **GTIN / UPC** field.  
5. Click **Update**.

*Note: For variable products, you must enter a unique GTIN for each variation (e.g., Red Shirt vs. Blue Shirt).*

## **6\. Footer**

* **Return to Main Site:** \[adsmagic.us \-\>\]  
* **Login to Dashboard:** \[app.adsmagic.us \-\>\]  
* **System Status:** *\[Omitted for Launch\]*