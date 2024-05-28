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
import GenerateCustomColorShades from '@pages/ColorShades/GenerateCustomColorShades';
import Colours from '@pages/ColorShades/Colours';
import GenerateColorShadesJson from "@pages/ColorShades/GenerateColorShadesJson";
import PrivacyPolicy from "@pages/PrivacyPolicy";
import Home from "./pages/Home";

const App = () => {

  return (
    <>
      <Tooltip style={{ fontSize: '12px', padding: '6px 10px', zIndex: '9999999999' }} id="my-tooltip" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/"  element={<Home />} />
          <Route path="/gradient" element={<Gradient />} />
          <Route path="color-shades" element={<ColorShades />} />
          <Route path='color-shades/generate' element={<GenerateCustomColorShades />} />
          <Route path='color-shades/generate/json' element={<GenerateColorShadesJson />} />
          <Route path='color-shades/generate/:id' element={<Colours />} />
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
