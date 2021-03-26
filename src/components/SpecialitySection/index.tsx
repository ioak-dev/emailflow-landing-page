import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import CallToAction from "../HeroSection/CallToAction"
import content from "../../assets/content/SpecialitySection.json"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  direction?: "left" | "right" | "up" | "down"
  data: {
    description: string
  }
}
export default function SpecialitySection(props: Props) {
  return (
    <div className="speciality-section">
      <OakAnimateElement direction={props.direction || "down"}>
        <div className="column-layout speciality-section--container">
          {content.data.map(item => (
            <SectionTile data={item} key={item.title} />
          ))}
        </div>
      </OakAnimateElement>
    </div>
  )
}
