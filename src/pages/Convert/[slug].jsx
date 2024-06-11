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
            <div className='grid grid-cols-2'>
              <HexInput color={hexColor} setColor={setHexColor} setRgbColor={setRgbColor} rgbColor={rgbColor} />
              <RGBPreview RGBColor={rgbColor} />
            </div>
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'hextohsl':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <HexInput color={hexColor} setColor={setHexColor} setRgbColor={setRgbColor} rgbColor={rgbColor} />
              <HSLPreview hslColor={convertColors(rgbColor, 'rgb').hsl} />
            </div>
            <ColorPreview rgbColor={rgbColor} />

          </div>
        );
      case 'hextocmyk':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <HexInput color={hexColor} setColor={setHexColor} setRgbColor={setRgbColor} rgbColor={rgbColor} />
              <CMYKPreview cmykColor={convertColors(rgbColor, 'rgb').cmyk} />
            </div>
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'hextohsv':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <HexInput color={hexColor} setColor={setHexColor} setRgbColor={setRgbColor} rgbColor={rgbColor} />
              <HSVPreview hsvColor={convertColors(rgbColor, 'rgb').hsv} />
            </div>
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'hextolab':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <HexInput color={hexColor} setColor={setHexColor} setRgbColor={setRgbColor} rgbColor={rgbColor} />
              <LABPreview labColor={convertColors(rgbColor, 'rgb').lab} />

            </div>
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'rgbtohex':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <RGBInput color={rgbColor} setColor={setRgbColor} />
              <HexPreview hexColor={convertColors(rgbColor, 'rgb').hex} />
            </div>
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'rgbtohsl':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <RGBInput color={rgbColor} setColor={setRgbColor} />
              <HSLPreview hslColor={convertColors(rgbColor, 'rgb').hsl} />
            </div>
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'rgbtocmyk':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <RGBInput color={rgbColor} setColor={setRgbColor} />
              <CMYKPreview cmykColor={convertColors(rgbColor, 'rgb').cmyk} />
            </div>
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'rgbtohsv':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <RGBInput color={rgbColor} setColor={setRgbColor} />
              <HSVPreview hsvColor={convertColors(rgbColor, 'rgb').hsv} />
            </div>
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'rgbtolab':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <RGBInput color={rgbColor} setColor={setRgbColor} />
              <LABPreview labColor={convertColors(rgbColor, 'rgb').lab} />
            </div>
            <ColorPreview rgbColor={rgbColor} />
          </div>
        );
      case 'hsltohex':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <HSLInput color={hslColor} setColor={setHslColor} />
              <HexPreview hexColor={convertColors(hslColor, 'hsl').hex} />
            </div>
            <ColorPreview rgbColor={convertColors(hslColor, 'hsl').rgb} />
          </div>
        );
      case 'hsltorgb':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <HSLInput color={hslColor} setColor={setHslColor} />
              <RGBPreview RGBColor={convertColors(hslColor, 'hsl').rgb} />
            </div>
            <ColorPreview rgbColor={convertColors(hslColor, 'hsl').rgb} />
          </div>
        );
      case 'hsltocmyk':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <HSLInput color={hslColor} setColor={setHslColor} />
              <CMYKPreview cmykColor={convertColors(hslColor, 'hsl').cmyk} />
            </div>
            <ColorPreview rgbColor={convertColors(hslColor, 'hsl').rgb} />
          </div>
        );
      case 'hsltohsv':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <HSLInput color={hslColor} setColor={setHslColor} />
              <HSVPreview hsvColor={convertColors(hslColor, 'hsl').hsv} />
            </div>
            <ColorPreview rgbColor={convertColors(hslColor, 'hsl').rgb} />
          </div>
        );
      case 'hsltolab':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <HSLInput color={hslColor} setColor={setHslColor} />
              <LABPreview labColor={convertColors(hslColor, 'hsl').lab} />
            </div>
            <ColorPreview rgbColor={convertColors(hslColor, 'hsl').rgb} />
          </div>
        );
      case 'hsvtohex':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <HSVInput color={hsvColor} setColor={setHsvColor} />
              <HexPreview hexColor={convertColors(hsvColor, 'hsv').hex} />
            </div>
            <ColorPreview rgbColor={convertColors(hsvColor, 'hsv').rgb} />
          </div>
        );
      case 'hsvtorgb':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <HSVInput color={hsvColor} setColor={setHsvColor} />
              <RGBPreview RGBColor={convertColors(hsvColor, 'hsv').rgb} />
            </div>
            <ColorPreview rgbColor={convertColors(hsvColor, 'hsv').rgb} />
          </div>
        );
      case 'hsvtocmyk':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <HSVInput color={hsvColor} setColor={setHsvColor} />
              <CMYKPreview cmykColor={convertColors(hsvColor, 'hsv').cmyk} />

            </div>
            <ColorPreview rgbColor={convertColors(hsvColor, 'hsv').rgb} />
          </div>
        );
      case 'hsvtohsl':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <HSVInput color={hsvColor} setColor={setHsvColor} />
              <HSLPreview hslColor={convertColors(hsvColor, 'hsv').hsl} />
            </div>
            <ColorPreview rgbColor={convertColors(hsvColor, 'hsv').rgb} />
          </div>
        );
      case 'hsvtolab':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <HSVInput color={hsvColor} setColor={setHsvColor} />
              <LABPreview labColor={convertColors(hsvColor, 'hsv').lab} />
            </div>
            <ColorPreview rgbColor={convertColors(hsvColor, 'hsv').rgb} />
          </div>
        );
      case 'labtohex':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <LABInput color={labColor} setColor={setLabColor} />
              <HexPreview hexColor={convertColors(labColor, 'lab').hex} />
            </div>
            <ColorPreview rgbColor={convertColors(labColor, 'lab').rgb} />
          </div>
        );
      case 'labtorgb':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <LABInput color={labColor} setColor={setLabColor} />
              <RGBPreview RGBColor={convertColors(labColor, 'lab').rgb} />
            </div>
            <ColorPreview rgbColor={convertColors(labColor, 'lab').rgb} />
          </div>
        );
      case 'labtocmyk':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <LABInput color={labColor} setColor={setLabColor} />
              <CMYKPreview cmykColor={convertColors(labColor, 'lab').cmyk} />
            </div>
            <ColorPreview rgbColor={convertColors(labColor, 'lab').rgb} />
          </div>
        );
      case 'labtohsl':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <LABInput color={labColor} setColor={setLabColor} />
              <HSLPreview hslColor={convertColors(labColor, 'lab').hsl} />
            </div>
            <ColorPreview rgbColor={convertColors(labColor, 'lab').rgb} />
          </div>
        );
      case 'labtohsv':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <LABInput color={labColor} setColor={setLabColor} />
              <HSVPreview hsvColor={convertColors(labColor, 'lab').hsv} />
            </div>
            <ColorPreview rgbColor={convertColors(labColor, 'lab').rgb} />
          </div>
        );
      case 'cmyktohex':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <CMYKInput color={cmykColor} setColor={setCmykColor} />
              <HexPreview hexColor={convertColors(cmykColor, 'cmyk').hex} />
            </div>
            <ColorPreview rgbColor={convertColors(cmykColor, 'cmyk').rgb} />
          </div>
        );
      case 'cmyktorgb':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <CMYKInput color={cmykColor} setColor={setCmykColor} />
              <RGBPreview RGBColor={convertColors(cmykColor, 'cmyk').rgb} />
            </div>
            <ColorPreview rgbColor={convertColors(cmykColor, 'cmyk').rgb} />
          </div>
        );
      case 'cmyktohsl':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <CMYKInput color={cmykColor} setColor={setCmykColor} />
              <HSLPreview hslColor={convertColors(cmykColor, 'cmyk').hsl} />
            </div>
            <ColorPreview rgbColor={convertColors(cmykColor, 'cmyk').rgb} />

          </div>
        );
      case 'cmyktohsv':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <CMYKInput color={cmykColor} setColor={setCmykColor} />
              <HSVPreview hsvColor={convertColors(cmykColor, 'cmyk').hsv} />
            </div>
            <ColorPreview rgbColor={convertColors(cmykColor, 'cmyk').rgb} />
          </div>
        );
      case 'cmyktolab':
        return (
          <div>
            <div className='grid grid-cols-2'>
              <CMYKInput color={cmykColor} setColor={setCmykColor} />
              <LABPreview labColor={convertColors(cmykColor, 'cmyk').lab} />
            </div>
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