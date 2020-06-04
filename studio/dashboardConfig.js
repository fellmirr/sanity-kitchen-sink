export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5ed89b929f98c894dbb7159e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-y4iaptqs',
                  apiId: 'eef2c3a6-b239-4e98-8e52-6b0556e71bec'
                },
                {
                  buildHookId: '5ed89b921522737bbeb01168',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3vogjnyu',
                  apiId: 'b6b8e214-a500-4d21-a1f5-2f3d3b2ea294'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fellmirr/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3vogjnyu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
