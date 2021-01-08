import React from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  data: {
    title: string
    description: string
    image: any
    alt?: boolean
  }
}

export default function SectionTile(props: Props) {
  return (
    <div className="feature-sectiontile">
      {!props.data.alt && (
        <div className="feature-sectiontile--illustration-wrapper desktop-only">
          <OakAnimateElement direction="right">
            <div className="feature-sectiontile--illustration">
              <img src={require(`../../assets/${props.data.image}`)} />
            </div>
          </OakAnimateElement>
        </div>
      )}

      <div className="feature-sectiontile--illustration-wrapper mobile-only">
        <OakAnimateElement direction="right">
          <div className="feature-sectiontile--illustration">
            <img src={require(`../../assets/${props.data.image}`)} />
          </div>
        </OakAnimateElement>
      </div>
      <div className=" desktop-only">
        <OakAnimateElement direction={props.data.alt ? "right" : "left"}>
          <div className="feature-sectiontile--content">
            <h3 className="heading--3">{props.data.title}</h3>
            <p>{props.data.description}</p>
          </div>
        </OakAnimateElement>
      </div>
      <div className=" mobile-only">
        <OakAnimateElement direction="left">
          <div className="feature-sectiontile--content">
            <h3 className="heading--3">{props.data.title}</h3>
            <p>{props.data.description}</p>
          </div>
        </OakAnimateElement>
      </div>
      {props.data.alt && (
        <div className="feature-sectiontile--illustration-wrapper desktop-only">
          <OakAnimateElement direction="left">
            <div className="feature-sectiontile--illustration invert-shadow">
              <img src={require(`../../assets/${props.data.image}`)} />
            </div>
          </OakAnimateElement>
        </div>
      )}
    </div>
  )
}
