import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import KeySection from "../components/KeySection"
import ClosingSection from "../components/ClosingSection"
import OnboardSection from "../components/OnboardSection"
import ContactSection from "../components/ContactSection"
import FaqSection from "../components/FaqSection"
import FooterSection from "../components/FooterSection"
import CopyrightSection from "../components/CopyrightSection"
import SpecialitySection from "../components/SpecialitySection"

import highlightContentOne from "../assets/content/HighlightSectionOne.json"
import highlightContentTwo from "../assets/content/HighlightSectionTwo.json"
import highlightContentThree from "../assets/content/HighlightSectionThree.json"
import FeatureSection from "../components/FeatureSection"

const IndexPage = () => (
  <div className="page-home">
    <SEO title="Features and getting started" />
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    <HeroSection />
    <SpecialitySection data={highlightContentOne} />
    {/* <KeySection /> */}
    <FeatureSection />
    <SpecialitySection data={highlightContentTwo} direction="left" />
    {/* <OnboardSection /> */}
    <ContactSection />
    {/* <FaqSection /> */}
    <ClosingSection />
    <SpecialitySection data={highlightContentThree} direction="right" />
    <FooterSection />
    <CopyrightSection />
  </div>
)

export default IndexPage
