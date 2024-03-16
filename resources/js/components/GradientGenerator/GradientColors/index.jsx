import React from "react"
import { motion as m } from "framer-motion"
import { SectionAppearAnimation } from "@shared/animation"


import "./GradientColors.scss"

const GradientColors = ({
    gradient
  }) => {
  return (
    <m.section
    initial={SectionAppearAnimation.initial}
    animate={SectionAppearAnimation.animate}
    transition={SectionAppearAnimation.transition(0.5)}
    className="gradient-color"
  >
    <div className="gradient-color__gradient-container">
      <div
        className="gradient-color__gradient"
        style={{ background: gradient }}
      />
    </div>
  </m.section>
  )
}

export default GradientColors