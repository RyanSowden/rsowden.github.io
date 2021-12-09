import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"  

const IndexPage = () => (
  <Layout pageTitle="Home Page">

    <h1>Hi I'm Ryan.</h1>
	<h2>A full stack developer who recently worked on-</h2>
	<ul>
	<Link to ="https://github.com/RyanSowden/fsk"><li>FSK bot</li></Link>
	<Link to ="https://github.com/RyanSowden/stock_regression"><li>Stock-Regression</li></Link>
	<Link to ="https://github.com/RyanSowden/sleeper-api-wrapper"><li>Sleeper-Api-Wrapper</li></Link>
	<Link to ="https://github.com/RyanSowden/sleeper-spreadsheet"><li>Sleeper-Spreadsheet</li></Link>
	</ul>
  </Layout>
)

export default IndexPage
