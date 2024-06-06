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
import HEXtoHSV from "./pages/Convert/HEXto/HEXtoHSV";
import HEXtoLAB from "./pages/Convert/HEXto/HEXtoLAB";
import HSLtoHEX from "./pages/Convert/HSLto/HSLtoHEX";
import HSLtoRGB from "./pages/Convert/HSLto/HSLtoRGB";
import HSLtoHSV from "./pages/Convert/HSLto/HSLtoHSV";
import HSLtoLAB from "./pages/Convert/HSLto/HSLtoLAB";
import CMYKtoHEX from "./pages/Convert/CMYKto/CMYKtoHEX";
import CMYKtoRGB from "./pages/Convert/CMYKto/CMYKtoRGB";
import CMYKtoHSV from "./pages/Convert/CMYKto/CMYKtoHSV";
import CMYKtoLAB from "./pages/Convert/CMYKto/CMYKtoLAB";
import HSVtoRGB from "./pages/Convert/HSVto/HSVtoRGB";
import CMYKtoHSL from "./pages/Convert/CMYKto/CMYKtoHSL";
import HSVtoHEX from "./pages/Convert/HSVto/HSVtoHEX";
import HSVtoHSL from "./pages/Convert/HSVto/HSVtoHSL";
import HSVtoLAB from "./pages/Convert/HSVto/HSVtoLAB";
import HSVtoCMYK from "./pages/Convert/HSVto/HSVtoCMYK";
import LABtoRGB from "./pages/Convert/LABto/LABtoRGB";
import LABtoHEX from "./pages/Convert/LABto/LABtoHEX";
import LABtoHSL from "./pages/Convert/LABto/LABtoHSL";
import LABtoCMYK from "./pages/Convert/LABto/LABtoCMYK";
import LABtoHSV from "./pages/Convert/LABto/LABtoHSV";
import HEXtoCMYK from "./pages/Convert/HEXto/HEXtoCMYK";
import HSLtoCMYK from "./pages/Convert/HSLto/HSLtoCMYK";

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
          <Route path="convert/hextocmyk" element={<HEXtoCMYK />} />
          <Route path="convert/hextohsv" element={<HEXtoHSV />} />
          <Route path="convert/hextolab" element={<HEXtoLAB />} />

          <Route path="convert/hsltorgb" element={<HSLtoRGB />} />
          <Route path="convert/hsltohex" element={<HSLtoHEX />} />
          <Route path="convert/hsltocmyk" element={<HSLtoCMYK />} />
          <Route path="convert/hsltohsv" element={<HSLtoHSV />} />
          <Route path="convert/hsltolab" element={<HSLtoLAB />} />

          <Route path="convert/cmyktorgb" element={<CMYKtoRGB />} />
          <Route path="convert/cmyktohex" element={<CMYKtoHEX />} />
          <Route path="convert/cmyktohsl" element={<CMYKtoHSL />} />
          <Route path="convert/cmyktohsv" element={<CMYKtoHSV />} />
          <Route path="convert/cmyktolab" element={<CMYKtoLAB />} />

          <Route path="convert/hsvtorgb" element={<HSVtoRGB />} />
          <Route path="convert/hsvtohex" element={<HSVtoHEX />} />
          <Route path="convert/hsvtohsl" element={<HSVtoHSL />} />
          <Route path="convert/hsvtocmyk" element={<HSVtoCMYK />} />
          <Route path="convert/hsvtolab" element={<HSVtoLAB />} />

          <Route path="convert/labtorgb" element={<LABtoRGB />} />
          <Route path="convert/labtohex" element={<LABtoHEX />} />
          <Route path="convert/labtohsl" element={<LABtoHSL />} />
          <Route path="convert/labtocmyk" element={<LABtoCMYK />} />
          <Route path="convert/labtohsv" element={<LABtoHSV />} />

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
