import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CountingGame from "../components/CountingGame"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <CountingGame />
  </Layout>
)

export default IndexPage
