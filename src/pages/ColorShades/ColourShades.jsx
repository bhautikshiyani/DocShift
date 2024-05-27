import React from "react";
import ShadesComponent from "./ShadesComponent";


const ColourShades = ({ shades, error }) => {
	return (
		<div className="p-7.5 flex items-center flex-wrap justify-center min-h-90vh">
			{error ? (
				<h3 className="text-red-500">Incorrect hex code value</h3>
			) : (
				shades.map((shade, index) => (
					<ShadesComponent key={index} shade={shade} />
				))
			)}
		</div>
	);
};

export default ColourShades;
