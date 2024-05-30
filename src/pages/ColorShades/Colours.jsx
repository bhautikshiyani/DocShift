import React, { useEffect, useState } from "react";
import ColourShades from "./ColourShades";
import { useParams } from "react-router-dom";
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
        <div className="w-full">
            {/* <div
            style={{backgroundColor: !error && shades.length > 0 ? `#${shades[10].hex}` : "bg-white"}}
                className='h-10vh w-full flex items-center justify-center border-b border-gray-200 '
            >
                <Link to="/">
                    <h3 className="text-md text-gray-600">#{id}</h3>
                </Link>
            </div> */}
            <ColourShades shades={shades} error={error} />
        </div>
    );
};

export default Colours;
