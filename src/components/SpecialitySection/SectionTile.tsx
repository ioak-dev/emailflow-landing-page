import React from "react"
import OakButton from "../oakfly/OakButton"
import "./style.scss"

interface Props {
  data: {
    title: string
    description: string
    faIcon: any,
    image: any
  }
}

export default function SectionTile(props: Props) {
  return (
    <div className="sectiontile">
      {/* <i className={props.data.faIcon} /> */}
      <img src={require(`../../assets/${props.data.image}`)} />
      <h3 className="heading--3">{props.data.title}</h3>
      <p>{props.data.description}</p>
        <OakButton
          theme="primary"
          variant="regular"
        >
          More
        </OakButton>
    </div>
  )
}
