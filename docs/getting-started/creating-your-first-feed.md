---
id: creating-your-first-feed
title: Creating Your First Feed
sidebar_label: Create a Feed
description: How to generate a Google Shopping or generic Product Feed.
---

# Creating a Product Feed

AdsMagic makes it easy to generate product feeds for Google Merchant Center, Meta (Facebook/Instagram), and other platforms.

## The Feed Wizard

1.  Navigate to **Ads Magic > Manage Feeds** in your WordPress dashboard.
2.  Click the **"Create New Feed"** button to start the wizard.

### Step 1: Feed Basics
*   **Feed Name**: Give your feed a descriptive name (e.g., "Google Shopping US").
*   **Provider**: Select **Google** (Standard) or **Meta** (Catalog).
*   **File Format**: Choose **XML** (Recommended for Google) or **CSV/TSV** (Better for spreadsheets).
*   **Refresh Schedule**: Choose how often the feed should update (Hourly, Daily, etc.).

### Step 2: Filtering Products
You can choose which products to include in your feed. By default, all published products are included.

*   **Categories**: Select specific WooCommerce categories.
*   **Tags**: Filter by product tags.
*   **Product Brands**: (New!) Filter by brand if you are using a supported brands plugin (YITH, Perfect Brands, etc.).

### Step 3: Category Mapping
Map your internal WooCommerce categories to the official **Google Product Taxonomy**. 
*   This is critical for ad performance.
*   Use the search box to find the closest match for each of your categories.
*   *Tip*: Using broad mappings (e.g., "Apparel") is better than leaving it empty.

### Step 4: Generation
The plugin will generate your feed in the background. Once complete, you will see a **Success** screen with your Feed URL.

## Feed Content
Your feed automatically includes:
*   **Identifiers**: GTIN, MPN, SKU, and Brand.
*   **Pricing**: Regular and Sale price.
*   **Stock**: Live inventory count (`sell_on_google_quantity`).
*   **Profit**: Gross profit margin (calculated from your Cost of Goods).
