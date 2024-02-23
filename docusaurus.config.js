// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Trailblazer",
  tagline: "Blaze New Trails, Forge New Tales",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://pi-trailblazer.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/microsite/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "PI-Trailblazer", // Usually your GitHub org/user name.
  projectName: "microsite", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/card.jpg",
      navbar: {
        title: "Trailblazer",
        logo: {
          alt: "Trailblazer Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "documentationSidebar",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Sprints", position: "left" },
          {
            href: "https://github.com/PI-Trailblazer",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://trailblazer-pi.atlassian.net/jira/software/projects/TRAIL/boards/1",
            label: "Jira",
            position: "right",
          },
          {
            href: "https://uapt33090-my.sharepoint.com/:f:/g/personal/bernardo_figueiredo_ua_pt/EvzubWWV1gJLl4sr07bo-jMBhzSnYWmK63SJfFBWmA_Iuw?e=jdymN6",
            label: "Drive",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Trailblazer, Projeto informática`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
