/** @type {import('@docusaurus/types').DocusaurusConfig} */
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
          docId: 'API\ Documentation/mockseries/main',
          position: 'right',
          label: 'API',
        },
        {
          type: 'docsVersionDropdown',
          position: 'left',
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
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/mockseries',
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
            {
              label: 'GitHub',
              href: 'https://github.com/cyrilou242/mockseries',
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
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/cyrilou242/mockseries/edit/master/website/',
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
      },
    ],
  ],
};
