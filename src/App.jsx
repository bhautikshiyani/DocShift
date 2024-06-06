import React from "react"
import Gradient from "@pages/Gradient/Gradient"
import { Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import ColorShades from '@pages/ColorShades/ColorShades';
import NoMatch from './NoMatch';
import ColorShadesDetails from '@pages/ColorShades/ColorShadesDetails';
import Swatches from '@pages/GradientsShades/Swatches';
import GradientsShadesDetails from '@pages/GradientsShades/GradientsShadesDetails';
import { Tooltip } from 'react-tooltip';
import GenerateCustomeColorPalettes from '@pages/ColorShades/GenerateCustomeColorPalettes';
import GenerateColorShadesJson from "@pages/ColorShades/GenerateColorShadesJson";
import PrivacyPolicy from "@pages/PrivacyPolicy";
import Home from "@pages/Home";
import CSSVariables from "@pages/CSSVariables";
import Convert from "@pages/Convert";
import RGBtoHEX from "@pages/Convert/RGBto/RGBtoHEX";
import RGBtoHSL from "./pages/Convert/RGBto/RGBtoHSL";
import RGBtoCMYK from "./pages/Convert/RGBto/RGBtoCMYK";
import RGBtoHSV from "./pages/Convert/RGBto/RGBtoHSV";
import RGBtoLAB from "./pages/Convert/RGBto/RGBtoLAB";
import HEXtoRGB from "@pages/Convert/HEXto/HEXtoRGB";
import HEXtoHSL from "./pages/Convert/HEXto/HEXtoHSL";
import HEXtoCMKK from "./pages/Convert/HEXto/HEXtoCMKK";
import HEXtoHSV from "./pages/Convert/HEXto/HEXtoHSV";
import HEXtoLAB from "./pages/Convert/HEXto/HEXtoLAB";
import HSLtoHEX from "./pages/Convert/HSLto/HSLtoHEX";
import HSLtoRGB from "./pages/Convert/HSLto/HSLtoRGB";
import HSLtoCMKK from "./pages/Convert/HSLto/HSLtoCMKK";
import HSLtoHSV from "./pages/Convert/HSLto/HSLtoHSV";
import HSLtoLAB from "./pages/Convert/HSLto/HSLtoLAB";

const App = () => {

  return (
    <>
      <Tooltip style={{ fontSize: '12px', padding: '6px 10px', zIndex: '9999999999' }} id="my-tooltip" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="gradient" element={<Gradient />} />
          <Route path="color-shades" element={<ColorShades />} />
          <Route path="css-generator" element={<CSSVariables />} />
          <Route path='color-shades/generate' element={<GenerateCustomeColorPalettes />} />
          <Route path='color-shades/generate/json' element={<GenerateColorShadesJson />} />
          <Route path="convert" element={<Convert />} />
          <Route path="convert/rgbtohex" element={<RGBtoHEX />} />
          <Route path="convert/rgbtohsl" element={<RGBtoHSL />} />
          <Route path="convert/rgbtocmyk" element={<RGBtoCMYK />} />
          <Route path="convert/rgbtohsv" element={<RGBtoHSV />} />
          <Route path="convert/rgbtolab" element={<RGBtoLAB />} />

          <Route path="convert/hextorgb" element={<HEXtoRGB />} />
          <Route path="convert/hextohsl" element={<HEXtoHSL />} />
          <Route path="convert/hextocmyk" element={<HEXtoCMKK />} />
          <Route path="convert/hextohsv" element={<HEXtoHSV />} />
          <Route path="convert/hextolab" element={<HEXtoLAB />} />




          <Route path="convert/hsltorgb" element={<HSLtoRGB />} />
          <Route path="convert/hsltohex" element={<HSLtoHEX />} />
          <Route path="convert/hsltocmyk" element={<HSLtoCMKK />} />
          <Route path="convert/hsltohsv" element={<HSLtoHSV />} />
          <Route path="convert/hsltolab" element={<HSLtoLAB />} />

          <Route path="color-shades/:slug" element={<ColorShadesDetails />} />
          <Route path="swatches" element={<Swatches />} />
          <Route path="swatches/:name" element={<GradientsShadesDetails />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
