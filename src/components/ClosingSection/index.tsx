import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/ClosingSection.json"
import OakButton from "../oakfly/OakButton"
import Illustration from "./Illustration"
import OakAnimateElement from "../oakfly/OakAnimateElement"
import CallToAction from "../HeroSection/CallToAction"

export default function ClosingSection() {
  return (
    <div className="closing-section">
      <div className="column-layout closing-section--container">
        <OakAnimateElement direction="right">
          <Illustration illustration={content.illustration} />
        </OakAnimateElement>
        <OakAnimateElement direction="left">
          <div className="closing-section--container--content">
            <h2 className="heading--2">{content.title}</h2>
            <p>{content.description}</p>
            <div className="closing-section--container--content--action">
              <CallToAction data={content.callToAction} />
            </div>
          </div>
        </OakAnimateElement>
      </div>
    </div>
  )
}
