module.exports = {
  title: 'PI2P documentation',
  tagline: 'How to contribute to the PI2P project',
  url: 'https://frareb.github.io',
  baseUrl: '/pi2p_docu/',
  favicon: 'img/favicon.ico',
  organizationName: 'frareb', // Usually your GitHub org/user name.
  projectName: 'pi2p_docu', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'PI2P',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://pi2p.ird.fr',
          label: 'PI2P website',
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
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Sensors',
              to: 'docs/docSen01/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'PI2P Website',
              href: 'https://pi2p.ird.fr',
            },
            {
              label: 'Contact',
              href: 'http://www.egce.cnrs-gif.fr/?p=1196',
            },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/frareb/pi2p',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PI2P, This projet is funded by ANR grant number <a href="https://anr.fr/Project-ANR-19-CE32-0001">ANR-19-CE32-0001.</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'docGen01',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
