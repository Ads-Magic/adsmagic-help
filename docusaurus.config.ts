import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ads Magic',
  tagline: 'The Hybrid Advantage',
  favicon: 'img/favicon.webp',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://help.adsmagic.us',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://GX2SBOGGGQ-dsn.algolia.net',
        crossorigin: 'anonymous',
      },
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ads-Magic', // Usually your GitHub org/user name.
  projectName: 'adsmagic-help', // Usually your repo name.

  onBrokenLinks: 'throw',

  markdown: {
    format: 'detect',
    mermaid: true,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },




  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve the docs at the site's root
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/Ads-Magic/adsmagic-help/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-WPDDB9ZG',
      },
    ],
  ],


  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.webp',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Ads Magic',
      logo: {
        alt: 'Ads Magic Logo',
        src: 'img/logo.webp',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Documentation',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/community-support',
          label: 'Community',
          position: 'right',
        },
        {
          href: 'https://adsmagic.us',
          label: 'adsmagic.us',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: '/getting-started' },
            { label: 'Tracking Signals', to: '/tracking-signals' },
            { label: 'Profit Strategy', to: '/profit-strategy' },
            { label: 'Troubleshooting', to: '/troubleshooting' },
            { label: 'Agency Partners', to: '/agency-partners' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy Policy', href: 'https://adsmagic.us/privacy-policy' },
            { label: 'Terms of Service', href: 'https://adsmagic.us/terms-of-service' },
            { label: 'Cookie Policy', href: 'https://adsmagic.us/cookie-policy' },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Community Support',
              href: 'https://www.facebook.com/groups/adsmagic.community/',
            },
            {
              label: 'Go to AdsMagic.us',
              href: 'https://adsmagic.us',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Ads-Magic',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ads Magic. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'GX2SBOGGGQ',

      // Public API key: it is safe to commit it
      apiKey: '15adf1c371a61fa361696f0f1650146d',

      indexName: 'adsmagic-help',

      // Optional: see doc section below
      contextualSearch: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
