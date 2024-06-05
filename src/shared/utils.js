import { hexColorRegExp, defaultHexColor } from "./constants"

export const splitGradientString = gradientString => {
  const regex = /,(?![^(]*\))(?![^"']*["'](?:[^"']*["'][^"']*["'])*[^"']*$)/gi
  const gradientType = gradientString
    .substring(0, gradientString.indexOf("("))
    .split("-")[0]
  const secondPartOfGradient = gradientString
    .substring(gradientString.indexOf("(") + 1, gradientString.lastIndexOf(")"))
    .split(regex)
  let gradientAnglePoint = secondPartOfGradient[0]
  const isDefaultAngle = !gradientAnglePoint.includes("rgb")

  if (!isDefaultAngle) {
    gradientAnglePoint = "180deg"
  }

  const gradientPalettes = secondPartOfGradient
    .slice(Number(isDefaultAngle))
    .map(palette => {
      const color = palette.substring(0, palette.indexOf(")") + 1).trim()
      const position = parseInt(
        palette.substring(palette.indexOf(")") + 1, palette.length - 1).trim(),
        10
      )

      return {
        color,
        position
      }
    })

  return [gradientType, gradientAnglePoint, gradientPalettes]
}

export const hexToRgbaObject = hexColor => {
  const validHexColor = hexColorRegExp.exec(hexColor)

  if (!validHexColor) {
    return hexToRgbaObject(defaultHexColor)
  }

  return {
    red: parseInt(validHexColor[1], 16),
    green: parseInt(validHexColor[2], 16),
    blue: parseInt(validHexColor[3], 16),
    alpha: validHexColor[4]
      ? Math.round((parseInt(validHexColor[4], 16) / 255) * 100) / 100
      : 1
  }
}

export const rgbaToHex = rgbaColor => {
  const rgbaPoints = rgbaColor
    .substring(5, rgbaColor.length - 1)
    .replace(/ /g, "")
    .split(",")

  const hexPoints = rgbaPoints.map((rgbaPoint, index) => {
    let hexPoint

    if (index === rgbaPoints.length - 1) {
      hexPoint = Math.round(Number(rgbaPoint) * 255).toString(16)
    } else {
      hexPoint = Number(rgbaPoint).toString(16)
    }

    return hexPoint.length === 1 ? `0${hexPoint}` : hexPoint
  })

  return `#${hexPoints.join("")}`
}

export const removeAlphaFromRgbaColor = rgbaColor => {
  const rgbPoints = rgbaColor
    .substring(5, rgbaColor.length - 1)
    .replace(/ /g, "")
    .split(",")

  return `rgb(${rgbPoints[0]}, ${rgbPoints[1]}, ${rgbPoints[2]})`
}

export const allowOnlyNumbers = event => {
  if (!/^(\d|.{2,})$/.test(event.key)) {
    event.preventDefault()
  }
}

export function hslToHex(h, s, l) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function hexToHsl(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  var colorInHSL = "hsl(" + h + ", " + s + "%, " + l + "%)";
  console.log(colorInHSL);

  return [h, s, l];
}

export function colorShades(
  color,
  amount,
  pug
) {
  pug = pug || 60;
  const hsl = hexToHsl(color);
  const h = hsl[0];
  const s = hsl[1];
  const l = hsl[2];
  const hslArray = [h, s, l];
  const shades = [];
  for (
    let i = amount - Math.floor(amount / 2) - (amount % 2 !== 0 ? 1 : 0);
    i > 0;
    i--
  ) {
    const newS = s + -1 * i * (pug / amount);
    const newL = l + -1 * i * (pug / 1.3 / amount);
    const newHsl = [h, newS, newL];
    shades.push(hslToHex(...newHsl));
  }
  // if (amount % 2 !== 0) {
  shades.push(color);
  // }
  for (let i = 0; i < amount / 2 - 1; i++) {
    const newS = s + i * (pug / amount);
    const newL = l + (i + 1) * ((pug * 1.3) / amount);
    const newHsl = [h, newS > 100 ? 100 : newS, newL];
    shades.push(hslToHex(...newHsl));
  }
  return reverse(shades);
}

function reverse(arr) {
  return arr.slice().reverse();
}

export function arrayToObject(array, key) {
  let object = {};
  if (key) {
    array.forEach((item, index) => {
      object[`${key}${index === 0 ? 50 : index * 100}`] = item;
    });
  } else {
    array.forEach((item, index) => {
      object[index === 0 ? "50" : `${index * 100}`] = item;
    });
  }
  return object;
}
export function rgbTohsv (r, g, b) {
  let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
  rabs = r / 255;
  gabs = g / 255;
  babs = b / 255;
  v = Math.max(rabs, gabs, babs),
  diff = v - Math.min(rabs, gabs, babs);
  diffc = c => (v - c) / 6 / diff + 1 / 2;
  percentRoundFn = num => Math.round(num * 100) / 100;
  if (diff == 0) {
      h = s = 0;
  } else {
      s = diff / v;
      rr = diffc(rabs);
      gg = diffc(gabs);
      bb = diffc(babs);

      if (rabs === v) {
          h = bb - gg;
      } else if (gabs === v) {
          h = (1 / 3) + rr - bb;
      } else if (babs === v) {
          h = (2 / 3) + gg - rr;
      }
      if (h < 0) {
          h += 1;
      }else if (h > 1) {
          h -= 1;
      }
  }
  return {
      h: Math.round(h * 360),
      s: percentRoundFn(s * 100),
      v: percentRoundFn(v * 100)
  };
}
export function rgbTocmyk (r,g,b) {
  var computedC = 0;
  var computedM = 0;
  var computedY = 0;
  var computedK = 0;
 
  //remove spaces from input RGB values, convert to int
  var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
  var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
  var b = parseInt( (''+b).replace(/\s/g,''),10 ); 
 
  if ( r==null || g==null || b==null ||
      isNaN(r) || isNaN(g)|| isNaN(b) )
  {
    alert ('Please enter numeric RGB values!');
    return;
  }
  if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
    alert ('RGB values must be in the range 0 to 255.');
    return;
  }
 
  // BLACK
  if (r==0 && g==0 && b==0) {
   computedK = 1;
   return [0,0,0,1];
  }
 
  computedC = 1 - (r/255);
  computedM = 1 - (g/255);
  computedY = 1 - (b/255);
 
  var minCMY = Math.min(computedC,
               Math.min(computedM,computedY));
  computedC = (computedC - minCMY) / (1 - minCMY) ;
  computedM = (computedM - minCMY) / (1 - minCMY) ;
  computedY = (computedY - minCMY) / (1 - minCMY) ;
  computedK = minCMY;
 
  return [computedC,computedM,computedY,computedK];
}