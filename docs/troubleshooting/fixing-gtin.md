---
id: fixing-gtin
title: 'How to Resolve "Missing Attribute: GTIN"'
sidebar_label: Missing GTIN Fix
description: Learn how to fix the most common Google Merchant Center disapproval.
---

# How to Resolve "Missing Attribute: GTIN"

Learn how to fix the most common Google Merchant Center disapproval.

## The Problem

You see a red error in your Health Check: `Missing Attribute: GTIN`.
This means your product feed does not contain the barcode (UPC/EAN/ISBN) for a product. Google requires this for all branded goods.

## The Solution

### Method 1: For Custom/Handmade Products (No Barcode)

If you sell custom goods (like handmade crafts or print-on-demand) that *do not* have a manufacturer barcode, you must tell Google that the "Identifier Exists" is False.

1. Log in to your **WordPress Admin**.
2. Go to **Products > All Products**.
3. Click **Edit** on the product with the error.
4. Scroll down to the **Product Data** box.
5. Click the **Ads Magic** tab (added by our plugin).
6. Find the **"Google Attributes"** section.
7. Set **Identifier Exists** to **"No" (False)**.
8. Click **Update** to save the product.

### Method 2: For Branded Products (Has Barcode)

If you are reselling branded goods (e.g., Nike, Sony), you *must* provide the GTIN.

1. Locate the barcode number on your product packaging.
2. Go to **Products > Edit Product** in WordPress.
3. Open the **Ads Magic** tab in the Product Data box.
4. Enter the number in the **GTIN / UPC** field.
5. Click **Update**.

*Note: For variable products, you must enter a unique GTIN for each variation (e.g., Red Shirt vs. Blue Shirt).*
