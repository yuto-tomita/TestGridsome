// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const posts = addCollection({ typeName: 'Post' })
    console.log(posts)
    posts.addNode({
      id: '1',
      title: 'HelloWorld',
      timeToRoad: 'aaa',
      description: 'aaaanbbb',
      date: '2020-11-31',
      path: '/index'
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
