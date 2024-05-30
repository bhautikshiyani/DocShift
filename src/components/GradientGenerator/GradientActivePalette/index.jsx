import React, { useEffect, useState, useRef } from "react"
import { motion as m, AnimatePresence } from "framer-motion"
import { HexColorPicker as Picker } from "react-colorful"
import { allowOnlyNumbers, hexToRgbaObject, rgbaToHex } from "@shared/utils"
import useOutsideClick from "@shared/hooks/useOutsideClick"
import useWindowSize from "@shared/hooks/useWindowSize"
import {
  defaultHexColor,
  hexColorRegExp,
  smallBreakPoint
} from "@shared/constants"

import "./GradientActivePalette.scss"
import GradientPreview from "../GradientPreview"

const GradientActivePalette = ({
  activePalette,
  canDeletePalette,
  handleGradientColorChange,
  handleDeletePalette,
  gradient,
  palettes,
  handleColorPositionChange,
  setActivePalette
}) => {
  const { width } = useWindowSize()
  const isChangeSettingWidth =
    width > parseInt(smallBreakPoint, 10) && !canDeletePalette
  const [hexColor, setHexColor] = useState(defaultHexColor)
  const [hexColorInput, setHexColorInput] = useState(defaultHexColor)
  const [rgbaObject, setRgbaObject] = useState({
    red: 0,
    green: 0,
    blue: 0,
    alpha: 1
  })
  const [colorOpacity, setColorOpacity] = useState(100)
  const [colorOpacityInput, setColorOpacityInput] = useState("100%")


  const previewRef = useRef(null)
  const pickerWrapperRef = useOutsideClick(
    () => previewRef?.current
  )



  const handleHexColorChange = newHexColor => {
    setHexColor(newHexColor)
    setHexColorInput(newHexColor)
  }

  const handleColorOpacityChange = newColorOpacity => {
    setColorOpacity(newColorOpacity)
    setColorOpacityInput(`${newColorOpacity}%`)
  }

  useEffect(() => {
    const colorInHex = rgbaToHex(activePalette.color)
    const alpha = parseFloat(activePalette.color.split(",")[3])
    const opacity = Math.round(alpha * 100)

    handleHexColorChange(colorInHex)
    handleColorOpacityChange(opacity)
  }, [activePalette.id])

  useEffect(() => {
    const newRgbaObject = hexToRgbaObject(hexColor)

    setRgbaObject(newRgbaObject)
    handleColorOpacityChange(newRgbaObject.alpha * 100)
  }, [hexColor])

  const handlePickNewHexColor = newHexColor => {
    handleHexColorChange(newHexColor)
    handleGradientColorChange(newHexColor)
  }

  const handleBlurColorInput = newHexColor => {
    if (hexColorRegExp.test(newHexColor)) {
      setHexColor(newHexColor)
      handleGradientColorChange(newHexColor)
    } else {
      handleHexColorChange(defaultHexColor)
      handleGradientColorChange(defaultHexColor)
    }
  }

  const handleChangeColorOpacity = opacityValue => {
    const { red, green, blue } = rgbaObject
    let opacity = !opacityValue ? 0 : parseInt(opacityValue, 10)

    if (opacity > 100) {
      opacity = 100
    }

    const newRgbaColor = `rgba(${red}, ${green}, ${blue}, ${opacity / 100})`
    const newHexColor = rgbaToHex(newRgbaColor)

    handleHexColorChange(newHexColor)
    handleColorOpacityChange(opacity)
    handleGradientColorChange(newRgbaColor, true)
  }

  const handleKeyDownInput = event => {
    if (event.key === "Enter") {
      event.currentTarget.blur()
    }
  }

  const { red, green, blue } = rgbaObject

  return (
    <section className="gradient-active-color p-[24px_16px_32px_16px] md:p-[24px_32px_32px_32px] border border-gray-200 border-t-0 dark:border-gray-700 bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)]">
      <h2 className="gradient-generator__subheader">Color</h2>
      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
        <div
          ref={pickerWrapperRef}
          className="md:pr-4 pb-6 md:pb-0"
        >
          <Picker color={hexColor} onChange={handlePickNewHexColor} />
        </div>
        <m.div
          transition={{
            duration: 0.7,
            ease: "easeInOut"
          }}
          className="gradient-active-color__settings flex-1 py-6 md:py-0 md:px-4"
        >
          <div className="gradient-active-color__inputs-container">
            <input
              aria-label="color-value"
              className="gradient-active-color__input !outline-none !shadow-none !ring-0 border border-gray-200 dark:border-gray-700 dark:bg-[var(--theme-surface-container-low)] bg-[var(--theme-surface-a10)] "
              placeholder="Color"
              value={hexColorInput}
              onChange={event => setHexColorInput(event.target.value)}
              onBlur={event => handleBlurColorInput(event.target.value)}
              onKeyDown={handleKeyDownInput}
            />

            <input
              aria-label="color-opacity"
              className="gradient-active-color__input !outline-none !shadow-none !ring-0 border border-gray-200 dark:border-gray-700 dark:bg-[var(--theme-surface-container-low)] bg-[var(--theme-surface-a10)] "
              value={colorOpacityInput}
              onChange={event => setColorOpacityInput(event.target.value)}
              onBlur={event => handleChangeColorOpacity(event.target.value)}
              onKeyDown={event => {
                handleKeyDownInput(event)
                allowOnlyNumbers(event)
              }}
            />
          </div>

          <m.div className="gradient-active-color__slider-container">
            <input
              aria-label="color-opacity"
              className="gradient-active-color__slider"
              style={{
                ["--slider-thumb-color"]: `rgb(${red}, ${green}, ${blue}`,
                background: `linear-gradient(to right, rgba(${red}, ${green}, ${blue}, 0), rgba(${red}, ${green}, ${blue}, 1))`
              }}
              type="range"
              min="0"
              max="100"
              step="1"
              value={colorOpacity}
              onChange={event => handleChangeColorOpacity(event.target.value)}
            />
          </m.div>
        </m.div>
        <GradientPreview
          gradient={gradient}
          palettes={palettes}
          handleColorPositionChange={handleColorPositionChange}
          activePaletteId={activePalette?.id}
        
          setActivePalette={setActivePalette}
          handleDeletePalette={handleDeletePalette}
        />
      </div>
    </section>
  )
}

export default GradientActivePalette
