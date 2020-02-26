export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e56a20a91affab773c9c8c5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4dsxbsnk',
                  apiId: '6b164b66-fbc8-48f6-ab43-4af2a52faebe'
                },
                {
                  buildHookId: '5e56a20b91affa763bc9cc5f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-m9a79pad',
                  apiId: 'edba17a5-d4aa-4796-ae82-96de0bc71d44'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KerstinPeschelle/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-m9a79pad.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
