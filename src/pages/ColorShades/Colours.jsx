import React, { useEffect, useState } from "react";
import ColourShades from "./ColourShades";
import { Link, useParams } from "react-router-dom";
import Values from "values.js";

const Colours = () => {
    const { id } = useParams();
    const [shades, setShades] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        function fetchShades() {
            try {
                let shades = new Values(`#${id}`).all(10);
                setShades(shades);
            } catch (err) {
                setError(true);
            }
        }
        fetchShades();
    }, [id]);
    return (
        <div className="w-full min-h-screen">
            <div
                className={`h-10vh w-full sticky top-0 flex items-center justify-center border-b border-gray-200 ${!error && shades.length > 0 ? `bg-[#${shades[10].hex}]` : "bg-white"
                    }`}
            >
                <Link to="/">
                    <h3 className="text-md text-gray-600">#{id}</h3>
                </Link>
            </div>
            <ColourShades shades={shades} error={error} />
        </div>
    );
};

export default Colours;
