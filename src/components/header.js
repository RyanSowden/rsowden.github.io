import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ display: `inline`, margin: 0, textAlign: `left`}}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
	<Link to="/about" style={{display: `inline`, margin:10}}>about</Link>
	<Link to="https://github.com/RyanSowden"style={{display: `inline`, margin:5}}>github</Link>
	<a href="mailto:rnsowden@gmail.com" style={{display: `inline`, margin:5}}>contact</a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
