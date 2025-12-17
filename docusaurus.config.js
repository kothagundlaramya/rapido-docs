// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rapido',
  tagline: 'Comprehensive Rapido Order Booking Guide',
  favicon: 'img/favicon.ico',

  url: 'https://rapido-docs.vercel.app',
  baseUrl: '/',

  organizationName: 'rapido',
  projectName: 'rapido-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn', // compatible with v3
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/rapido/rapido-docs/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/rapido/rapido-docs/edit/main/blog/',
          authorsMapPath: 'blog/authors.yml', // keep authors mapping
          onInlineAuthors: 'ignore',           // suppress warnings
          onInlineTags: 'ignore',              // suppress warnings
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        language: 'en',
        lunr: {
          tokenizerSeparator: /[\s\-]+/,
        },
      },
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
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'rapidoSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/rapido/rapido-docs',
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
              {label: 'Intro', to: '/docs/intro'},
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
              {label: 'GitHub', href: 'https://github.com/rapido/rapido-docs'},
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
