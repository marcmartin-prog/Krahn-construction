export default {
  widgets: [
      {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
           title: 'Sanity Studio',
           apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
           buildHookId: 'xxxyyyxxxyyyyxxxyyy',
           name: 'sanity-gatsby-blog-20-studio',
         },
          {
            title: 'Krahn Construction',
            apiId: 'e502433c-e9e2-4deb-9345-d608ab6f20f3',
            buildHookId: 'https://api.netlify.com/build_hooks/604a99ad1c0a5f4acb55135f',
            name: 'brave-mirzakhani-a6d3cf'
          }
        ]
      }
    }
  ]
}
