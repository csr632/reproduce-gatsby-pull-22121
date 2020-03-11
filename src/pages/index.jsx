import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default props => {
  return (
    <div>
      <MDXRenderer>{props.data.allFile.nodes[0].childMdx.body}</MDXRenderer>
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allFile(filter: { base: { eq: "test.mdx" } }) {
      nodes {
        childMdx {
          body
        }
        base
      }
    }
  }
`
