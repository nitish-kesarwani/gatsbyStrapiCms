import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import Img from 'gatsby-image'

import Layout from "../components/layout"
import Seo from "../components/seo"
// import Reactmarkdown from "react-markdown"

const IndexPage = () => (
  <StaticQuery
    query = {graphql`
      query getBlogs {
        allStrapiBlogs {
          nodes {
            id
            title
            publishedDate
            content            
          }
        }
      }    
    `}
    render = {data => (
      <Layout>
        <Seo title="Home" />
        <h1>Blogs</h1>
        {
          data?.allStrapiBlogs?.nodes?.map(blog => (
            <div key={blog?.id} style={{marginBottom:40}}>
              <h3>{blog?.title}</h3>
              {/* <div>{blog?.description}</div> */}
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: blog?.content }}
              />
              {/* <Reactmarkdown source={blog?.content} /> */}
              {/* <div>{blog?.content}</div> */}
            </div>
          ))
        }
      </Layout>
    )}
  />


)

export default IndexPage

// image {
//   childImageSharp {
//     fluid(maxWidth: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }