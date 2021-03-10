import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/KeySection.json"

export default function KeySection() {
  return (
    <div className="key-section">
      <h1>{content.title}</h1>
      <div className="key-section--container">
        {content.data.map(item => (
          <SectionTile data={item} key={item.title} />
        ))}
      </div>
    </div>
  )
}
