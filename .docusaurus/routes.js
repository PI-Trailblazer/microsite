import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '91a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b08'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'bf3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '41a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '8b0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ee5'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '770'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'a86'),
    exact: true
  },
  {
    path: '/blog/intro',
    component: ComponentCreator('/blog/intro', 'cda'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '379'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '058'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '45a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e60'),
            routes: [
              {
                path: '/docs/architecture',
                component: ComponentCreator('/docs/architecture', '2c8'),
                exact: true,
                sidebar: "documentationSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '229'),
                exact: true,
                sidebar: "documentationSidebar"
              },
              {
                path: '/docs/scheduling',
                component: ComponentCreator('/docs/scheduling', 'e00'),
                exact: true,
                sidebar: "documentationSidebar"
              },
              {
                path: '/docs/userStories',
                component: ComponentCreator('/docs/userStories', '35b'),
                exact: true,
                sidebar: "documentationSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e6e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
