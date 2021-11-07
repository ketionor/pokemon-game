import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/header.module.css"

//Define links to be used in the header
const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  {
    name: "Projects",
    to: "/projects",
  },
  { name: "Blog", to: "https://blog.joshsandefer.dev" },
]

const Header = ({ siteTitle }) => (
  <header className={styles.container}>
    <div className={styles.innerContainer}>
      <div className={styles.logoContainer}>
        <StaticImage
          className={styles.logo}
          src="../images/joshsandefer.png"
          alt="josh sandefer"
          loading="eager"
        />
        <h1>{siteTitle}</h1>
      </div>
      <ul className={styles.navMenu}>
        {links.map(({ name, to }) => {
          if (to[0] === "/") {
            return (
              <li>
                <Link to={to} activeClassName={styles.activeLink}>
                  {name}
                </Link>
              </li>
            )
          } else {
            return (
              <li>
                <a href={to}>{name}</a>
              </li>
            )
          }
        })}
      </ul>
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
