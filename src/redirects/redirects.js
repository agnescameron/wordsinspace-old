import { useStaticQuery, graphql } from "gatsby"

export const createRedirect = () => {
  const { allWpCategory } = useStaticQuery(
    graphql`
      query {
        allWpCategory {
          nodes {
            name
            slug
          }
        }
      }
    `
  )
  return allWpCategory.nodes
}