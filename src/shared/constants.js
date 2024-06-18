export let GradientTypes

;(function(GradientTypes) {
  GradientTypes["LINEAR"] = "linear"
  GradientTypes["RADIAL"] = "radial"
})(GradientTypes || (GradientTypes = {}))

export let ThemeMode

;(function(ThemeMode) {
  ThemeMode["DARK"] = "dark"
  ThemeMode["LIGHT"] = "light"
})(ThemeMode || (ThemeMode = {}))

export const messageLifeTime = 3000
export const themeModeLocalStorageKey = "gradient-generator-theme-mode"
export const maxColorsCount = 9
export const hexColorRegExp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i
export const defaultHexColor = "#000000ff"
export const defaultGradient = "linear-gradient(180deg, rgba(242, 178, 56, 1) 0%, rgba(240, 103, 25, 1) 100%)"
export const smallBreakPoint = "750px"
export const gradientCodeLineHeight = "25px"
