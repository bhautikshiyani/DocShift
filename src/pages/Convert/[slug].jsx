import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import convert from 'color-convert';
import ColorPreview from '@components/Convert/ColorPreview';
import CMYKPreview from '@components/Convert/CMYKPreview';
import HSLPreview from '@components/Convert/HSLPreview';
import HSVPreview from '@components/Convert/HSVPreview';
import LABPreview from '@components/Convert/LABPreview';
import RGBPreview from '@components/Convert/RGBPreview';
import HexPreview from '@components/Convert/HexPreview';
import HexInput from '@components/Convert/ColorInputs/HexInput';
import HSLInput from '@components/Convert/ColorInputs/HSLInput';
import HSVInput from '@components/Convert/ColorInputs/HSVInput';
import LABInput from '@components/Convert/ColorInputs/LABInput';
import CMYKInput from '@components/Convert/ColorInputs/CMYKInput';
import RGBInput from '@components/Convert/ColorInputs/RGBInput';

const ConvertColor = () => {
  const { slug } = useParams();
  const [hexColor, setHexColor] = useState('000000');
  const [rgbColor, setRgbColor] = useState([0, 0, 0]);
  const [hslColor, setHslColor] = useState([0, 100, 15]);
  const [hsvColor, setHsvColor] = useState([0, 100, 15]);
  const [labColor, setLabColor] = useState([0, 100, 15]);
  const [cmykColor, setCmykColor] = useState([0, 100, 15, 10]);

  useEffect(() => {
    if (slug.startsWith('hex')) {
      setRgbColor(convert.hex.rgb(hexColor));
    }
  }, [hexColor, slug]);

  const convertColors = (color, type) => {
    switch (type) {
      case 'rgb':
        return {
          cmyk: convert.rgb.cmyk(color),
          hsl: convert.rgb.hsl(color),
          hsv: convert.rgb.hsv(color),
          lab: convert.rgb.lab(color),
          hex: convert.rgb.hex(color)

        };
      case 'hsl':
        return {
          rgb: convert.hsl.rgb(color),
          cmyk: convert.hsl.cmyk(color),
          hex: convert.hsl.hex(color),
          hsv: convert.hsl.hsv(color),
          lab: convert.hsl.lab(color)
        };
      case 'hsv':
        return {
          rgb: convert.hsv.rgb(color),
          cmyk: convert.hsv.cmyk(color),
          hex: convert.hsv.hex(color),
          hsl: convert.hsv.hsl(color),
          lab: convert.hsv.lab(color)
        };
      case 'lab':
        return {
          rgb: convert.lab.rgb(color),
          cmyk: convert.lab.cmyk(color),
          hex: convert.lab.hex(color),
          hsl: convert.lab.hsl(color),
          hsv: convert.lab.hsv(color)
        };
      case 'cmyk':
        return {
          rgb: convert.cmyk.rgb(color),
          hex: convert.cmyk.hex(color),
          hsl: convert.cmyk.hsl(color),
          hsv: convert.cmyk.hsv(color),
          lab: convert.cmyk.lab(color)
        };
      default:
        return {};
    }
  };

  const renderContent = () => {
    switch (slug) {
      case 'hextorgb':
        return (
          <div>
            <HexInput color={hexColor} setColor={setHexColor} setRgbColor={setRgbColor} rgbColor={rgbColor} />
            <RGBPreview RGBColor={rgbColor} />
          </div>
        );
      case 'hextohsl':
        return (
          <div>
            <HexInput color={hexColor} setColor={setHexColor} setRgbColor={setRgbColor} rgbColor={rgbColor} />
            <HSLPreview hslColor={convertColors(rgbColor, 'rgb').hsl} />
          </div>
        );
      case 'hextocmyk':
        return (
          <div>
            <HexInput color={hexColor} setColor={setHexColor} setRgbColor={setRgbColor} rgbColor={rgbColor} />
            <CMYKPreview cmykColor={convertColors(rgbColor, 'rgb').cmyk} />
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'hextohsv':
        return (
          <div>
            <HexInput color={hexColor} setColor={setHexColor} setRgbColor={setRgbColor} rgbColor={rgbColor} />
            <HSVPreview hsvColor={convertColors(rgbColor, 'rgb').hsv} />
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'hextolab':
        return (
          <div>
            <HexInput color={hexColor} setColor={setHexColor} setRgbColor={setRgbColor} rgbColor={rgbColor} />
            <LABPreview labColor={convertColors(rgbColor, 'rgb').lab} />
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'rgbtohex':
        return (
          <div>
            <RGBInput color={rgbColor} setColor={setRgbColor} />
            <HexPreview hexColor={convertColors(rgbColor, 'rgb').hex} />
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'rgbtohsl':
        return (
          <div>
            <RGBInput color={rgbColor} setColor={setRgbColor} />
            <HSLPreview hslColor={convertColors(rgbColor, 'rgb').hsl} />
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'rgbtocmyk':
        return (
          <div>
            <RGBInput color={rgbColor} setColor={setRgbColor} />
            <CMYKPreview cmykColor={convertColors(rgbColor, 'rgb').cmyk} />
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'rgbtohsv':
        return (
          <div>
            <RGBInput color={rgbColor} setColor={setRgbColor} />
            <HSVPreview hsvColor={convertColors(rgbColor, 'rgb').hsv} />
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'rgbtolab':
        return (
          <div>
            <RGBInput color={rgbColor} setColor={setRgbColor} />
            <LABPreview labColor={convertColors(rgbColor, 'rgb').lab} />
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'hsltohex':
        return (
          <div>
            <HSLInput color={hslColor} setColor={setHslColor} />
            <HexPreview hexColor={convertColors(hslColor, 'hsl').hex} />
            <ColorPreview rgbColor={convertColors(hslColor, 'hsl').rgb} />
          </div>
        );
      case 'hsltorgb':
        return (
          <div>
            <HSLInput color={hslColor} setColor={setHslColor} />
            <RGBPreview RGBColor={convertColors(hslColor, 'hsl').rgb} />
            <ColorPreview rgbColor={convertColors(hslColor, 'hsl').rgb} />
          </div>
        );
      case 'hsltocmyk':
        return (
          <div>
            <HSLInput color={hslColor} setColor={setHslColor} />
            <CMYKPreview cmykColor={convertColors(hslColor, 'hsl').cmyk} />
            <ColorPreview rgbColor={convertColors(hslColor, 'hsl').rgb} />
          </div>
        );
      case 'hsltohsv':
        return (
          <div>
            <HSLInput color={hslColor} setColor={setHslColor} />
            <HSVPreview hsvColor={convertColors(hslColor, 'hsl').hsv} />
            <ColorPreview rgbColor={convertColors(hslColor, 'hsl').rgb} />
          </div>
        );
      case 'hsltolab':
        return (
          <div>
            <HSLInput color={hslColor} setColor={setHslColor} />
            <LABPreview labColor={convertColors(hslColor, 'hsl').lab} />
            <ColorPreview rgbColor={convertColors(hslColor, 'hsl').rgb} />
          </div>
        );
      case 'hsvtohex':
        return (
          <div>
            <HSVInput color={hsvColor} setColor={setHsvColor} />
            <HexPreview hexColor={convertColors(hsvColor, 'hsv').hex} />
            <ColorPreview rgbColor={convertColors(hsvColor, 'hsv').rgb} />
          </div>
        );
      case 'hsvtorgb':
        return (
          <div>
            <HSVInput color={hsvColor} setColor={setHsvColor} />
            <RGBPreview RGBColor={convertColors(hsvColor, 'hsv').rgb} />

            <ColorPreview rgbColor={convertColors(hsvColor, 'hsv').rgb} />
          </div>
        );
      case 'hsvtocmyk':
        return (
          <div>
            <HSVInput color={hsvColor} setColor={setHsvColor} />
            <CMYKPreview cmykColor={convertColors(hsvColor, 'hsv').cmyk} />
            <ColorPreview rgbColor={convertColors(hsvColor, 'hsv').rgb} />
          </div>
        );
      case 'hsvtohsl':
        return (
          <div>
            <HSVInput color={hsvColor} setColor={setHsvColor} />
            <HSLPreview hslColor={convertColors(hsvColor, 'hsv').hsl} />
            <ColorPreview rgbColor={convertColors(hsvColor, 'hsv').rgb} />
          </div>
        );
      case 'hsvtolab':
        return (
          <div>
            <HSVInput color={hsvColor} setColor={setHsvColor} />
            <LABPreview labColor={convertColors(hsvColor, 'hsv').lab} />
            <ColorPreview rgbColor={convertColors(hsvColor, 'hsv').rgb} />
          </div>
        );
      case 'labtohex':
        return (
          <div>
            <LABInput color={labColor} setColor={setLabColor} />
            <HexPreview hexColor={convertColors(labColor, 'lab').hex} />
            <ColorPreview rgbColor={convertColors(labColor, 'lab').rgb} />
          </div>
        );
      case 'labtorgb':
        return (
          <div>
            <LABInput color={labColor} setColor={setLabColor} />
            <RGBPreview RGBColor={convertColors(labColor, 'lab').rgb} />
            <ColorPreview rgbColor={convertColors(labColor, 'lab').rgb} />
          </div>
        );
      case 'labtocmyk':
        return (
          <div>
            <LABInput color={labColor} setColor={setLabColor} />
            <CMYKPreview cmykColor={convertColors(labColor, 'lab').cmyk} />
            <ColorPreview rgbColor={convertColors(labColor, 'lab').rgb} />
          </div>
        );
      case 'labtohsl':
        return (
          <div>
            <LABInput color={labColor} setColor={setLabColor} />
            <HSLPreview hslColor={convertColors(labColor, 'lab').hsl} />
            <ColorPreview rgbColor={convertColors(labColor, 'lab').rgb} />
          </div>
        );
      case 'labtohsv':
        return (
          <div>
            <LABInput color={labColor} setColor={setLabColor} />
            <HSVPreview hsvColor={convertColors(labColor, 'lab').hsv} />
            <ColorPreview rgbColor={convertColors(labColor, 'lab').rgb} />
          </div>
        );
      case 'cmyktohex':
        return (
          <div>
            <CMYKInput color={cmykColor} setColor={setCmykColor} />
            <HexPreview hexColor={convertColors(cmykColor, 'cmyk').hex} />
            <ColorPreview rgbColor={convertColors(cmykColor, 'cmyk').rgb} />
          </div>
        );
      case 'cmyktorgb':
        return (
          <div>
            <CMYKInput color={cmykColor} setColor={setCmykColor} />
            <RGBPreview RGBColor={convertColors(cmykColor, 'cmyk').rgb} />
            <ColorPreview rgbColor={convertColors(cmykColor, 'cmyk').rgb} />
          </div>
        );
      case 'cmyktohsl':
        return (
          <div>
            <CMYKInput color={cmykColor} setColor={setCmykColor} />
            <HSLPreview hslColor={convertColors(cmykColor, 'cmyk').hsl} />
            <ColorPreview rgbColor={convertColors(cmykColor, 'cmyk').rgb} />

          </div>
        );
      case 'cmyktohsv':
        return (
          <div>
            <CMYKInput color={cmykColor} setColor={setCmykColor} />
            <HSVPreview hsvColor={convertColors(cmykColor, 'cmyk').hsv} />
            <ColorPreview rgbColor={convertColors(cmykColor, 'cmyk').rgb} />

          </div>
        );
      case 'cmyktolab':
        return (
          <div>
            <CMYKInput color={cmykColor} setColor={setCmykColor} />
            <LABPreview labColor={convertColors(cmykColor, 'cmyk').lab} />
            <ColorPreview rgbColor={convertColors(cmykColor, 'cmyk').rgb} />

          </div>
        );
      default:
        return <div>Invalid conversion type</div>;
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

export default ConvertColor;