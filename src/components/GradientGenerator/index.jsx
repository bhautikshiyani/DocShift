import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion as m } from "framer-motion";
import { hexToRgbaObject, splitGradientString } from "@shared/utils";
import { defaultGradient, GradientTypes } from "@shared/constants";
import { SectionAppearAnimation } from "@shared/animation";
import GradientActivePalette from "./GradientActivePalette";
import GradientTypeAndAngle from "./GradientTypeAndAngle";
import GradientRangeSettings from "./GradientRangeSettings";
import GradientCode from "./GradientCode";
import "./GradientGenerator.scss";
import GradientColors from "./GradientColors";

const GradientGenerator = ({ addNewMessage }) => {
  const [gradient, setGradient] = useState("");
  const [palettes, setPalettes] = useState([]);
  const [activePalette, setActivePalette] = useState(null);
  const [gradientType, setGradientType] = useState(GradientTypes.LINEAR);
  const [gradientPosition, setGradientPosition] = useState("");

  const handleGradientTypeChange = (type, angle) => {
    if (type === GradientTypes.LINEAR) {
      setGradientType(type);
      setGradientPosition(angle);
    } else {
      setGradientType(type);
      setGradientPosition(angle);
    }
  };

  const initGradient = useCallback((neededGradient) => {
    const [
      extractedGradientType,
      extractedGradientAnglePoint,
      gradientPalettes,
    ] = splitGradientString(neededGradient);

    const newGradientPalettes = gradientPalettes.map((palette) => ({
      ...palette,
      id: uuidv4(),
    }));

    setPalettes(newGradientPalettes);
    handleGradientTypeChange(
      extractedGradientType,
      extractedGradientAnglePoint,
    );
    setActivePalette(newGradientPalettes[0]);
  }, []);

  useEffect(() => {
    initGradient(defaultGradient);
  }, [initGradient]);

  const createGradientBackground = useCallback(() => {
    const sortedPallets = [...palettes].sort(
      (paletteA, paletteB) => paletteA.position - paletteB.position,
    );
    const colorsAndPositionsString = sortedPallets
      .map((palette) => `${palette.color} ${palette.position}%`)
      .join(", ");
    const result = `${gradientType}-gradient(${gradientPosition}, ${colorsAndPositionsString})`;

    setGradient(result);
  }, [palettes, gradientType, gradientPosition]);

  useEffect(() => {
    createGradientBackground();
  }, [createGradientBackground, palettes, gradientType, gradientPosition]);

  const resetGradient = () => {
    initGradient(defaultGradient);
  };


  const handleColorPositionChange = (id, newPosition) => {
    setPalettes(prevPalettes => 
      prevPalettes.map(palette => 
        palette.id === id 
          ? { ...palette, position: newPosition }
          : palette
      )
    );
  };

  const handleGradientColorChange = (color, isRGBA) => {
    const clonePalettes = [...palettes];
    const neededPalette = clonePalettes.find(
      (palette) => palette.id === activePalette?.id,
    );

    if (neededPalette) {
      if (isRGBA) {
        neededPalette.color = color;
      } else {
        const { red, green, blue, alpha } = hexToRgbaObject(color);
        neededPalette.color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
      }

      setActivePalette(neededPalette);
      setPalettes(clonePalettes);
    }
  };

  const handleDeletePalette = (paletteId) => {
    const filteredPalettes = palettes
      .filter((palette) => palette.id !== paletteId)
      .sort((paletteA, paletteB) => paletteA.position - paletteB.position);

    setPalettes(filteredPalettes);
    setActivePalette(filteredPalettes[0]);
  };

  return (
    <div>
      <GradientColors gradient={gradient}/>
      <div className="gradient-generator mx-auto px-6 pb-6 container md:mt-[-75px]">
        <div className="gradient-generator__main grid">
          <div className="gradient-generator-settings">
            <m.div
              initial={SectionAppearAnimation.initial}
              animate={SectionAppearAnimation.animate}
              transition={SectionAppearAnimation.transition(0.2)}
              className="gradient-generator-settings__top"
            >
              <GradientRangeSettings
                gradient={gradient}
                palettes={palettes}
                activePaletteId={activePalette?.id}
                setPalettes={setPalettes}
                setActivePalette={setActivePalette}
              />

              {activePalette && (
                <GradientActivePalette
                  setActivePalette={setActivePalette}
                  activePalette={activePalette}
                  handleColorPositionChange={handleColorPositionChange}
                  gradient={gradient}
                  palettes={palettes}
                  canDeletePalette={palettes.length > 2}
                  handleGradientColorChange={handleGradientColorChange}
                  handleDeletePalette={handleDeletePalette}
                />
              )}
            <GradientTypeAndAngle
              gradientType={gradientType}
              gradientPosition={gradientPosition}
              handleGradientTypeChange={handleGradientTypeChange}
              setGradientPosition={setGradientPosition}
            />
            </m.div>
          </div>
        </div>
        <GradientCode
          gradient={gradient}
          resetGradient={resetGradient}
          addNewMessage={addNewMessage}
        />
      </div>
    </div>
  );
};

export default GradientGenerator;
