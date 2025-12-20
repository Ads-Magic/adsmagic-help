---
id: deduplication
title: Data Deduplication Explained
sidebar_label: Deduplication
description: How we ensure you don't count the same sale twice.
---

# Data Deduplication Explained

When using both a **Browser Pixel** and **Server-Side API (CAPI)**, there is a risk of counting the same purchase event twice (once from the browser, once from the server). Ads Magic handles this automatically.

## How it Works

1.  **Event ID:** We generate a unique `event_id` for every purchase transaction.
2.  **Double Send:** We send this ID with *both* the Browser Pixel event and the Server-Side CAPI event.
3.  **Platform Logic:** Meta and Google receive both events. They check the `event_id`.
    * If they receive the Browser event first, they process it.
    * When the Server event arrives with the *same* ID, they discard it (deduplicate).
    * If the Browser event was blocked (e.g., ad blocker), they process the Server event instead.

## Why this Matters
This "Redundant Setup" ensures you get maximum data accuracy without inflating your reporting numbers. You don't need to do anything; Ads Magic manages the IDs for you.
