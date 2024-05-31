
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const GenerateCustomColorShades = () => {
    let [colour, setColour] = useState("");
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();

    const redirectPage = (e) => {
        e.preventDefault();
        if (colour.startsWith("#") && colour.length >= 4) {
            colour = colour.substring(1);
            return navigate(`/color-shades/generate/${colour}`);
        } else {
            setAlert(true);
        }
    };
    return (
        <>
            <div className="flex-grow h-full">
                <h1 className="text-5xl font-extrabold mb-7.5 text-left md:text-center">
                    <span className="text-orange-600">Effortlessly</span> create beautiful color palettes for your projects
                </h1>
                <h4 className="text-md font-normal mb-7.5 text-left md:text-center">
                    TintTastic is a user-friendly tint and shade generator that will elevate your color game in no time.
                </h4>
                <form className="flex flex-col md:flex-row items-left md:items-center justify-center" onSubmit={redirectPage}>
                    <input
                        className="placeholder-gray-500 text-black p-2.5 w-full md:w-1/2 mb-3.75 md:mb-0 md:mr-7.5"
                        placeholder="#ffffff"
                        type="text"
                        name="color"
                        id="color"
                        required
                        value={colour}
                        onChange={(e) => setColour(e.target.value)}
                    />
                    <button className="w-full lg:w-1/4 bg-orange-500 text-white p-3 text-lg" type="submit">
                        Generate Shades
                    </button>
                </form>
                {alert && (
                    <div className="w-full lg:w-1/2 mt-7.5 bg-red-500 text-white p-3 rounded-md flex items-center">
                        <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {/* Replace this with the AlertIcon SVG path */}
                        </svg>
                        <span>Only accepts hex code values!</span>
                    </div>
                )}
            </div>
        </>
    );
};


export default GenerateCustomColorShades
