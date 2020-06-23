/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import './product-list.scss'
import { navigate } from "@reach/router"

const productList = () => {
  const data = useStaticQuery(graphql`
      query {
          allContentfulMarketingProduct {
              nodes {
                  name
                  productId
                  marketingProductImage {
                      id
                      file {
                          fileName
                          url
                          contentType
                      }
                  }
                  contentful_id
                  id
              }
          }
      }
  `)
  console.log(data)
  const {allContentfulMarketingProduct:{nodes}} = data
  console.log(nodes)
  return <div className='productDiv'>
    {
      nodes.map(item=>{
        return <img
          onClick={()=>{navigate('/app/?plan=15gb')}}
          key = {item.productId}
          src={item.marketingProductImage.file.url}
        />
      })
    }

  </div>

}
export default productList
