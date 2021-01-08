import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/OnboardSection.json"

export default function OnboardSection() {
  return (
    <div className="onboard-section">
      <div className="onboard-section--container column-layout">
        <h2 className="heading--2">{content.title}</h2>
        <div className="onboard-section--container--steps">
          {content.steps?.map((step, index) => (
            <SectionTile step={step} key={step.title} order={index + 1} />
          ))}
        </div>
      </div>
    </div>
  )
}
