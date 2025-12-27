---
id: health-check
title: Running a Feed Health Check
sidebar_label: The Health Check
description: Understand your Profit Audit and fix critical errors.
---

# The Feed Health Check

Most plugins just generate a file. Ads Magic performs a **Profit Audit** to ensure that file actually makes you money.

## How to Run It
1.  Go to **Ads Magic > Dashboard**.
2.  The scan runs automatically upon loading.
3.  Look at the **"Feed Health"** card at the top.

## Understanding the Status

### 🟢 Healthy (Green)
Your data is clean. You are ready to upload your feed to Google Merchant Center.

### 🟡 Warning (Yellow)
Your feed will work, but it's not optimized.
* *Example:* "Missing Brand attribute" or "Short Description."
* *Impact:* Lower ad rank, but products will likely be approved.

### 🔴 Critical (Red)
**Stop!** These errors will get your products disapproved or your account suspended.
* *Example:* "Missing GTIN," "Price Mismatch," or "Missing Image."
* *Action:* You must fix these before enabling the feed.

## Supported Formats
The Health Check works for all feed types:
*   **XML Feeds**: Analyzed structure and content.
*   **CSV/TSV Feeds**: We scan for standard headers (e.g., `google_product_category`, `id`, `price`) to ensure compliance with Google's spreadsheet requirements.

## Troubleshooting Common Errors

### "Missing Google Product Category"
*   **Cause**: You haven't mapped your WooCommerce category to Google's Taxonomy.
*   **Fix**: Go to **Manage Feeds > Edit (Pencil Icon)** and complete **Step 3: Category Mapping**.

### "Missing GTIN"
*   **Cause**: Missing UPC/EAN barcode.
*   **Fix**: Add the barcode to the `_gtin`, `_wpm_gtin_code`, or standard WooCommerce identifier fields.

:::tip Quick Fix
Click the **"Fix"** button next to any error to jump directly to the product edit screen or bulk editor where you can resolve the issue.
:::
