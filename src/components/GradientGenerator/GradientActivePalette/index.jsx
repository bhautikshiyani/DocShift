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

import TrashIcon from "@assets/svg/trash.svg?react"

import "./GradientActivePalette.scss"

const GradientActivePalette = ({
  activePalette,
  canDeletePalette,
  handleGradientColorChange,
  handleDeletePalette
}) => {
  const { width } = useWindowSize()
  const isChangeSettingWidth =
    width > parseInt(smallBreakPoint, 10) && !canDeletePalette

  const [isShowColorPicker, setIsShowColorPicker] = useState(false)
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
    () => setIsShowColorPicker(false),
    previewRef?.current
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
    <section className="gradient-active-color">
      <h2 className="gradient-generator__subheader">Color</h2>

      <div className="relative flex gap-[24px]">
        <div
          ref={previewRef}
          className="gradient-active-color__preview flex-none"
          style={{ backgroundColor: `rgb(${red}, ${green}, ${blue}` }}
          onClick={() => setIsShowColorPicker(prevState => !prevState)}
        />

        {isShowColorPicker && (
          <div
            ref={pickerWrapperRef}
            className="gradient-active-color__picker-wrapper"
          >
            <Picker color={hexColor} onChange={handlePickNewHexColor} />
          </div>
        )}

        <m.div
          transition={{
            duration: 0.7,
            ease: "easeInOut"
          }}
          className="gradient-active-color__settings flex-1"
        >
          <div className="gradient-active-color__inputs-container">
            <input
              aria-label="color-value"
              className="gradient-active-color__input"
              placeholder="Color"
              value={hexColorInput}
              onChange={event => setHexColorInput(event.target.value)}
              onBlur={event => handleBlurColorInput(event.target.value)}
              onKeyDown={handleKeyDownInput}
            />

            <input
              aria-label="color-opacity"
              className="gradient-active-color__input"
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
        <AnimatePresence>
          {canDeletePalette && (
            <m.button
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 360] }}
              exit={{ scale: 0, rotate: [0, 360] }}
              transition={{
                duration: 0.7,
                ease: "easeInOut"
              }}
              type="button"
              aria-label="delete"
              className="gradient-active-color__delete-btn"
              disabled={!canDeletePalette}
              onClick={() => handleDeletePalette(activePalette.id)}
            >
              <TrashIcon className="gradient-active-color__delete-icon" />
            </m.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default GradientActivePalette
