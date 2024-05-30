import React from "react"
import classnames from "classnames"
import { AnimatePresence, motion as m } from "framer-motion"
import { SectionAppearAnimation } from "@shared/animation"
import { removeAlphaFromRgbaColor } from "@shared/utils"
import TrashIcon from "@assets/svg/trash.svg?react"

import CloseIcon from "@assets/svg/close.svg?react"

import "./GradientPreview.scss"

const GradientPreview = ({
  palettes,
  activePaletteId,
  setActivePalette,
  handleDeletePalette,
  handleColorPositionChange
}) => (
  <div className="gradient-preview md:col-span-2 md:!border-l-0 lg:!border-l md:!border-t lg:!border-t-0  md:mt-4 md:pt-4 lg:mt-0  lg:col-span-1 lg:pl-4 pt-6 lg:pt-0 dark:bg-dark-primary-base bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] ">
    <div className="grid">
      {[...palettes]
        .sort((paletteA, paletteB) => paletteA.position - paletteB.position)
        .map(pallet => (
          <div
            className="justify-between transition duration-700"
            onClick={() => setActivePalette(pallet)}
          >
            <div
             className={classnames("flex items-center p-1 pr-2 rounded-md justify-between transition duration-700", {
              "dark:bg-[var(--theme-surface-container-low)] bg-[var(--theme-surface-container)]": pallet.id === activePaletteId
            })}
            >
            <div
              key={pallet.id}
              className={classnames("gradient-preview-pallet", {
                // active: pallet.id === activePaletteId
              })}
            >
              <div
                className="gradient-preview-pallet__inner"
                style={{
                  backgroundColor: removeAlphaFromRgbaColor(pallet.color)
                }}
              />
            </div>
            <input
              aria-label="color-opacity"
              className={`gradient-active-color__input border py-3 border-gray-200 dark:border-gray-700 ${pallet.id === activePaletteId ? 'dark:bg-[var(--theme-surface-container)]' : 'dark:bg-[var(--theme-surface-container)] bg-[var(--theme-surface-a10)]'}`}
              value={pallet.position}
              onChange={event => handleColorPositionChange(pallet.id, event.target.value)}
            />
            <AnimatePresence>
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
                disabled={palettes.length < 3 ? true : false}
                onClick={() => handleDeletePalette(pallet.id)}
              >
                <TrashIcon className="gradient-active-color__delete-icon" />
              </m.button>
            </AnimatePresence>
            </div>
          </div>
        ))}
    </div>
  </div>
)

export default GradientPreview
