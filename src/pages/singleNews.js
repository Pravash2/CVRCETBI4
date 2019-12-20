import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import SingleNews from "../components/News/singleNews"

const IndexPage = () => (
  <Layout>
    <SEO title="singlePage" />
    <SingleNews />
  </Layout>
)

export default IndexPage
