import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/FeatureSection.json"

export default function FeatureSection() {
  return (
    <div className="feature-section">
      <div className="feature-section--container column-layout">
        <p className="feature-section--container--title">{content.title}</p>
        <p className="feature-section--container--subtitle">
          {content.description}
        </p>
        <div className="feature-section--container--list">
          {content.data.map(item => (
            <SectionTile data={item} key={item.title} />
          ))}
        </div>
      </div>
    </div>
  )
}
