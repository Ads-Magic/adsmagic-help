---
id: fixing-gtin
title: 'How to Fix "Missing GTIN" Errors'
sidebar_label: Missing GTIN Fix
description: Resolve the #1 reason for Google Shopping disapproval.
---

# How to Fix "Missing GTIN" Errors

One of the most common reasons products are disapproved is a missing **Global Trade Item Number (GTIN)**. Google requires this for all branded goods to verify authenticity.

## The Solution

Since you are using the **Ads Magic Plugin**, we read data directly from your standard WooCommerce fields to keep things simple.

### Scenario A: Selling Custom / Handmade Goods
If you sell products you make yourself (e.g., art, print-on-demand) that **do not** have a manufacturer barcode:

1.  Go to **Products** in your WordPress Admin.
2.  Edit the product with the error.
3.  Scroll down to the **Product Data** section.
4.  Click the **Inventory** tab.
5.  Find the **"MPN / GTIN"** or **"Global Identifier"** fields (Ads Magic enriches this area).
6.  *Note:* For custom goods, you usually do not enter a GTIN. Instead, ensure your feed settings in Ads Magic have "Identifier Exists" set to **No** for this category.
7.  **Update** the product.

### Scenario B: Selling Branded Goods (Nike, Sony, etc.)
If you resell products that have a barcode:

1.  Find the barcode (UPC/EAN) on the product packaging.
2.  Go to **Products > Edit Product**.
3.  Open the **Inventory** tab in the Product Data box.
4.  Enter the number in the **GTIN / UPC** field provided.
5.  **Update** the product.

:::info
**Why this matters:** Products with valid GTINs receive up to **40% more impressions** on Google Shopping. It is worth the effort to find them.
:::
