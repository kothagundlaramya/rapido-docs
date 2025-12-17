// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rapido', // Navbar title
  tagline: 'Comprehensive Rapido Order Booking Guide',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'your-org', // Replace with your GitHub org/user name
  projectName: 'rapido-docs',   // Replace with your repo name

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/your-org/rapido-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/your-org/rapido-docs/edit/main/blog/',
          // ✅ Ignore blog warnings to prevent errors from old/missing tags or authors
          onInlineTags: 'ignore',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Rapido',
        logo: {
          alt: 'Rapido Logo',
          src: 'img/logo.svg', // Place your logo in static/img/
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'rapidoSidebar', // Must match sidebars.js
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/your-org/rapido-docs',
            label: 'GitHub',
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
              {label: 'Docs', to: '/docs/intro'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus'},
              {label: 'Discord', href: 'https://discordapp.com/invite/docusaurus'},
              {label: 'X', href: 'https://x.com/docusaurus'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Blog', to: '/blog'},
              {label: 'GitHub', href: 'https://github.com/your-org/rapido-docs'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rapido Docs, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
