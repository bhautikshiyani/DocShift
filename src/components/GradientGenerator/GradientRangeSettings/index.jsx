import React from "react"

import SwapIcon from "@assets/svg/swap.svg?react"

import MultiThumbSlider from "./MultiThumbSlider"
import "./GradientSlider.scss"

const GradientRangeSettings = ({
  gradient,
  palettes,
  activePaletteId,
  setPalettes,
  setActivePalette
}) => {
  const handleSwapColors = () => {
    const sortedPallets = [...palettes].sort(
      (paletteA, paletteB) => paletteA.position - paletteB.position
    )
    const reversePositions = sortedPallets
      .map(palette => palette.position)
      .reverse()
    const swappedPalettes = sortedPallets
      .map((palette, paletteIndex) => ({
        ...palette,
        position: reversePositions[paletteIndex]
      }))
      .sort((paletteA, paletteB) => paletteA.position - paletteB.position)

    setPalettes(swappedPalettes)
  }

  return (
    <section className="gradient-range-settings dark:bg-dark-primary-base border border-gray-200 dark:border-gray-700 dark:bg-mix-dark-surface-base dark-primary-base dark:bg-mix-amount-[90] bg-light-surface-base bg-mix-light-surface-base bg-mix-amount-[90]">
      <div
        className="gradient-range-settings__slider-container"
        style={{ background: gradient }}
      >
        <MultiThumbSlider
          palettes={palettes}
          activePaletteId={activePaletteId}
          setPalettes={setPalettes}
          setActivePalette={setActivePalette}
        />
      </div>

      <button
        type="button"
        aria-label="swap"
        className="gradient-range-settings__swap-btn"
        onClick={handleSwapColors}
      >
        <SwapIcon className="gradient-range-settings__swap-icon" />
      </button>
    </section>
  )
}

export default GradientRangeSettings
