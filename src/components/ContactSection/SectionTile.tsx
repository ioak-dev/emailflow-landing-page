import React from "react"
import "./style.scss"

interface Props {
  data: {
    title: string
    description: string
  }
}

export default function SectionTile(props: Props) {
  return (
    <div className="sectiontile">
      <h3 className="heading--3">{props.data.title}</h3>
      <p>{props.data.description}</p>
    </div>
  )
}
