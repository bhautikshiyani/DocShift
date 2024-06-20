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
import ConvertColor from "./pages/Convert/[slug]";
import ColorPickerCanvas from "./pages/ImagetoColor/ImagetoColor";
import MeshGradientGenerator from "./components/MeshGradientGenerator";


const App = () => {
  return (
    <>
      <Tooltip style={{ fontSize: '12px', padding: '6px 10px', zIndex: '9999999999' }} id="my-tooltip" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ColorPickerCanvas />} />
          <Route path="gradient" element={<Gradient />} />
          <Route path="color-shades" element={<ColorShades />} />
          <Route path="css-generator" element={<CSSVariables />} />
          <Route path='color-shades/generate' element={<GenerateCustomeColorPalettes />} />
          <Route path='color-shades/generate/json' element={<GenerateColorShadesJson />} />
          <Route path="convert" element={<Convert />} />
          <Route path="convert/:slug" element={<ConvertColor />} />
          <Route path="/imagetocolor" element={<ColorPickerCanvas />} />
          <Route path="color-shades/:slug" element={<ColorShadesDetails />} />
          <Route path="swatches" element={<Swatches />} />
          <Route path="mesh-gradient-generator" element={<MeshGradientGenerator />} />
          <Route path="swatches/:name" element={<GradientsShadesDetails />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
