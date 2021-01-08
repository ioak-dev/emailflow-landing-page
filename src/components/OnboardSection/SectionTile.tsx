import React from "react"
import "./style.scss"

interface Props {
  order: number
  step: {
    title: string
    description: string
  }
}

export default function SectionTile(props: Props) {
  return (
    <div className="onboard-sectiontile">
      <div className="onboard-sectiontile--left">
        <span className="onboard-sectiontile--left--step-number">
          {props.order}
        </span>
      </div>
      <div className="onboard-sectiontile--right">
        <h3 className="heading--3">{props.step.title}</h3>
        <p>{props.step.description}</p>
      </div>
    </div>
  )
}
