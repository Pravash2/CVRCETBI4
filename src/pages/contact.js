import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Contact />
  </Layout>
)

export default IndexPage
