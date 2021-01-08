import React from "react"
import "./style.scss"
import content from "../../assets/content/ContactSection.json"
import ContactForm from "./ContactForm"
import OakAnimateElement from "../oakfly/OakAnimateElement"

export default function ContactSection() {
  return (
    <div className="contact-section column-layout">
      <div className="contact-section--container">
        <h3 className="heading--3">{content.title}</h3>
        <p>{content.description}</p>
      </div>
      <OakAnimateElement>
        <ContactForm closeForm={() => setShowForm(false)} />
      </OakAnimateElement>
    </div>
  )
}
