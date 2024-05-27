import React, { useState } from "react";
// import CopyToClipboard from "react-copy-to-clipboard";

const ShadesComponent = ({ shade }) => {
	const [value, setValue] = useState(`#${shade.hex}`);

	const onCopy = () => {
		let value = shade.hex;
		setValue("Copied");
		setTimeout(() => {
			setValue(`#${value}`);
		}, 1000);
	};

	return (
		// <CopyToClipboard onCopy={onCopy} text={`#${shade.hex}`}>
			<div
				className={`bg-[#${shade.hex}] w-50 h-50 p-2.5 m-2.5 cursor-pointer flex items-end justify-end rounded-md hover:shadow-md`}
				onClick={onCopy}
			>
				<span className="bg-[#F1F6F9] p-1.25 rounded-sm text-xs">
					{value}
				</span>
			</div>
		// </CopyToClipboard>
	);
};

export default ShadesComponent;
