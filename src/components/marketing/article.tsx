/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./product-list.scss"


const productList = () => {

  const [pos, setPos] = useState(0)
  const posi = []
  let i = 0
  const data = useStaticQuery(graphql`
      query {
          contentfulMarketingProductArticle{
              slug
              longMarketingDescription {
                  json
              }
          }
      }

  `)
  const { contentfulMarketingProductArticle: { longMarketingDescription: { json } } } = data
  console.log(json)

  const onClickToExpent = (node, children, position) => {
    console.log(node, children,posi,position)
    if (node.nodeType === "heading-3") {
      setPos(position===pos?0:position)
    }
  }

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return children
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        i++
        console.log(pos,i,pos*2===i&&pos!==0)
        if(pos*2===i&&pos!==0){
          return children
        }
        return null
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        posi.push(i)
        i++
        return <div style={{ marginBottom: "1rem" }} >
          <h3 className='bold'>{children}</h3>
          <h3
            onClick={onClickToExpent.bind(this, node, children,posi.length)}
            className={'bold boldP '}
          >{"+"}</h3>
        </div>
      }
    },
    renderText: text => text.replace("!", "?")
  }

  return <div className='articleDiv' >
    {documentToReactComponents(json, options)}
  </div>

}
export default productList
