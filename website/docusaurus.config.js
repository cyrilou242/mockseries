/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require('remark-math');
const katex = require('rehype-katex');
module.exports = {
  title: 'mockseries',
  tagline: 'Easy and intuitive generation of synthetic timeseries for Python.',
  url: 'https://mockseries.catheu.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cyrilou242', // Usually your GitHub org/user name.
  projectName: 'mockseries', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'mockseries',
      logo: {
        alt: 'Mockingbird',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Tutorial',
        },
        {
          type: 'doc',
          docId: 'API\ Reference/mockseries/main',
          position: 'right',
          label: 'API Reference',
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/cyrilou242/mockseries',
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
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
            {
              label: 'API Reference',
              to: '/docs/API Reference/mockseries/main',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/mockseries',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cyrilou242/mockseries',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, Cyril de Catheu and the contributors.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      { 
        gtag: {
          trackingID: 'G-HYRV8GZP45',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/cyrilou242/mockseries/edit/master/website/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/cyrilou242/mockseries/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        stylesheets: [
          {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
            integrity:
              'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
            crossorigin: 'anonymous',
          },
  ],
      },
    ],
  ],
};
