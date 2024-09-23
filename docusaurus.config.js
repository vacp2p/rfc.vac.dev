// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()
const {
  sidebarItemsGenerator,
} = require('./docusaurus-utils/sidebar/generator')

const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vac',
  url: 'https://rfc.vac.dev/',
  baseUrl: '/',

  customFields: {},

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'codex',
        path: 'codex',
        routeBasePath: 'codex',
        remarkPlugins: [math],
        rehypePlugins: [katex],
        sidebarItemsGenerator,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'nomos',
        path: 'nomos',
        routeBasePath: 'nomos',
        remarkPlugins: [math],
        rehypePlugins: [katex],
        sidebarItemsGenerator,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'status',
        path: 'status',
        routeBasePath: 'status',
        remarkPlugins: [math],
        rehypePlugins: [katex],
        sidebarItemsGenerator,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'vac',
        path: 'vac',
        routeBasePath: 'vac',
        remarkPlugins: [math],
        rehypePlugins: [katex],
        sidebarItemsGenerator,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'waku',
        path: 'waku',
        routeBasePath: 'waku',
        remarkPlugins: [math],
        rehypePlugins: [katex],
        sidebarItemsGenerator,
      },
    ],
  ],

  presets: [
    [
      '@acid-info/logos-docusaurus-preset',
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: 'VacResearch',
        theme: {
          name: 'default',
          options: {
            customCss: [require.resolve('./src/css/custom.scss')],
            docs: {
              default: {
                sidebar: {
                  hide: false,
                },
              },
            },
          },
        },
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          id: 'root-pages',
          routeBasePath: '/',
        },
        og: {},
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        items: [
          {
            type: 'search',
          },
        ],
      },
      footer: {
        copyright: 'Codex @2023<br/>All Rights Reserved.',
        links: [
          {
            items: [
              {
                href: 'https://twitter.com/Codex_storage',
                label: 'Twitter',
              },
              {
                href: 'https://discord.gg/2NXGrsqmDq',
                label: 'Discord',
              },
              {
                href: '/',
                label: 'Docs',
              },
              {
                href: 'https://github.com/codex-storage',
                label: 'Github',
              },
            ],
          },
          {
            items: [
              {
                href: '/',
                label: 'Contact us',
              },
              {
                href: 'https://jobs.status.im/',
                label: 'Work with us',
              },
              {
                href: '/terms',
                label: 'Terms & conditions',
              },
              {
                href: '/privacy-policy',
                label: 'Privacy Policy',
              },
              {
                href: '/security',
                label: 'Security',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config
