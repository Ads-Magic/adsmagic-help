const fs = require('fs');
const path = require('path');

const structure = {
    'docs/getting-started': [
        { id: 'installation', title: 'Installation Guide', description: 'How to install the plugin on WordPress in 2 minutes.' }, // Existing, can update
        { id: 'health-check', title: 'Running a Health Check', description: 'Understanding your first Profit Audit report.' },
        { id: 'connect-google', title: 'Connecting Google', description: 'How to link your Merchant Center account securely.' },
        { id: 'connect-meta', title: 'Connecting Meta', description: 'Setting up your first Pixel and Catalog.' }
    ],
    'docs/troubleshooting': [
        { id: 'fixing-gtin', title: 'How to Resolve "Missing Attribute: GTIN"', description: 'Learn how to fix the most common Google Merchant Center disapproval.' }, // Existing
        { id: 'fixing-images', title: 'Fix "Image Too Small" or Quality issues', description: 'Handling low resolution images.' },
        { id: 'disapproved-products', title: 'Why are my products "Disapproved"?', description: 'Understanding disapproval reasons.' },
        { id: 'price-mismatch', title: 'Understanding "Price Mismatch" warnings', description: 'Debugging price discrepancies.' }
    ],
    'docs/tracking-signals': [
        { id: 'setup-capi', title: 'Setting up Server-Side Tracking (CAPI)', description: 'Secure your data with Server-Side accuracy.' },
        { id: 'verify-pixel', title: 'Verifying your Pixel Match Quality', description: 'How to check pixel health.' },
        { id: 'real-time-sync', title: 'How "Real-Time Sync" works', description: 'Understanding the synchronization engine.' },
        { id: 'conversion-discrepancies', title: 'Debugging conversion discrepancies', description: 'Troubleshooting data mismatch.' }
    ],
    'docs/profit-strategy': [
        { id: 'cogs', title: 'How to calculate and input COGS', description: 'Inputting Cost of Goods Sold.' },
        { id: 'profit-dashboard', title: 'Understanding the Profit Dashboard', description: 'Analyzing your profit metrics.' },
        { id: 'poas-bidding', title: 'Setting up POAS Bidding in Google Ads', description: 'Bidding on profit, not just revenue.' },
        { id: 'smart-repricing', title: 'Using Smart Repricing Rules', description: 'Automated repricing strategies.' }
    ],
    'docs/agency-partners': [
        { id: 'white-labeling', title: 'Setting up the White Label Dashboard', description: 'Add your agency logo.' },
        { id: 'multi-tenant', title: 'Managing multiple clients (Multi-Tenant)', description: 'Switching between client accounts.' },
        { id: 'onboarding-checklist', title: 'Client Onboarding Checklist', description: 'Step-by-step onboarding.' },
        { id: 'billing-licensing', title: 'Agency Billing & Licensing FAQ', description: 'Common billing questions.' }
    ]
};

Object.entries(structure).forEach(([dir, files]) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    files.forEach(file => {
        const filePath = path.join(dir, `${file.id}.md`);
        if (!fs.existsSync(filePath)) {
            const content = `---
id: ${file.id}
title: ${file.title}
description: ${file.description}
sidebar_label: ${file.title.replace(/\[|\]/g, '')}
---

# ${file.title}

${file.description}

:::info
This is a placeholder article for content strategy v3.0.
:::
`;
            fs.writeFileSync(filePath, content);
            console.log(`Created: ${filePath}`);
        } else {
            console.log(`Exists (Skipping): ${filePath}`);
        }
    });
});
