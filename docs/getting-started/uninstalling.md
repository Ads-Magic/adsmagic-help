---
id: uninstalling
title: Uninstalling Ads Magic
sidebar_label: Uninstall Guide
description: How to safely remove the plugin and clean up data.
---

# Uninstalling Ads Magic

We're sorry to see you go! If you need to remove the plugin, here is how to do it cleanly.

## Step 1: Disconnect Cloud
1.  Go to **Ads Magic > Settings**.
2.  Click **"Disconnect Account"**. This stops any active subscriptions and API syncs.

## Step 2: Delete Plugin
1.  Go to **Plugins > Installed Plugins**.
2.  Find **Ads Magic**.
3.  Click **Deactivate**, then **Delete**.

## Data Cleanup
Upon deletion, Ads Magic automatically:
* Removes all scheduled cron jobs (Action Scheduler).
* Removes the `_adsmagic_cost` fields from your database (optional setting).
* Cleans up temporary cache files.

*Note: Your product data in Google Merchant Center will remain until it expires (30 days) or you manually delete it in Google.*
