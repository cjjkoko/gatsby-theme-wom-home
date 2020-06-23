/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./product-list.scss"

const banner = () => {

  const data = useStaticQuery(graphql`
      query {
          contentfulImageBanner(contentful_id: {eq: "5ZGuO96br0JdxLUhC0EuGo"}) {
              alt
              imageUrl {
                  file {
                      url
                      fileName
                  }
                  fluid(quality: 100) {
                      aspectRatio
                      base64
                      sizes
                      src
                      srcSet
                      srcSetWebp
                      srcWebp
                      tracedSVG
                  }
              }
          }
      }
  `)
  console.log(data)
  return <div className='productDiv'>
    <img
      src={data.contentfulImageBanner.imageUrl.file.url}
    />
  </div>
}
export default banner
