/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// Promise API
const path = require(`path`)

function withDefaults(themeOptions) {
  const basePath = themeOptions.basePath || `/`
  return {
    basePath
  }
}

exports.createPages = ({ page, actions }, plugin) => {

}

exports.onCreatePage = ({ page, actions }, plugin) => {
  // if(page.path.match(/\/plans/)){
  //   const {deletePage,createPage} = actions
  //   createPage(Object.assign({},page,{path:withDefaults(plugin).basePath+page.path}))
  //   deletePage(page)
  // }
}
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}


exports.onCreateWebpackConfig = ({
                                   stage,
                                   rules,
                                   loaders,
                                   plugins,
                                   actions
                                 }) => {

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "plans": path.resolve(__dirname, "./src"),
        "@@": path.resolve(__dirname)
      },
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  })
}
