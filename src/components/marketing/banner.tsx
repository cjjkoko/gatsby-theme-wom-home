/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const banner = () => {

  const data = useStaticQuery(graphql`
      query {
          contentfulImageBanner(contentful_id: {eq: "2MLWv9j3ilvXKQH7qMYLUS"}) {
              alt
              imageUrl {
                  fluid(quality: 100) {
                      aspectRatio
                      base64
                      sizes
                      src
                      srcSet
                      srcSetWebp
                      srcWebp 
                  }
              }
          }
      }
  `)
  console.log(data)
  return <Img
    style={{ height: '500px'}}
    fluid={data.contentfulImageBanner.imageUrl.fluid}
  />
}
export default banner
