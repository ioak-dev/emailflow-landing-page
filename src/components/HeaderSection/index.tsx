import React from "react"
import "./style.scss"
import janusWhite from "../../assets/janus_white.svg"
import janusBlack from "../../assets/janus_black.svg"
import { Link } from "gatsby"

interface Props {
  black?: boolean
}

export default function HeaderSection(props: Props) {
  return (
    <div className="header-section">
      <Link to="/" title="Go to landing page">
        <img
          className="logo"
          src={props.black ? janusBlack : janusWhite}
          alt="Janus logo"
        />
      </Link>
    </div>
  )
}
