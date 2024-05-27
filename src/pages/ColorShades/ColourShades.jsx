import React from "react";
import ShadesComponent from "./ShadesComponent";


const ColourShades = ({ shades, error }) => {
	return (
		<div className="">
			{error ? (
				<h3 className="text-red-500">Incorrect hex code value</h3>
			) : (
				<div className="grid gap-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6  2xl:grid-cols-8">
					{

						shades.map((shade, index) => (
							<ShadesComponent key={index} shade={shade} />
						))
					}
				</div>
			)}
		</div>
	);
};

export default ColourShades;
