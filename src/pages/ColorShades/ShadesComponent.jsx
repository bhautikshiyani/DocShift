import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const ShadesComponent = ({ shade }) => {
	console.log("🚀 ~ ShadesComponent ~ shade:", shade.hex)
	const [value, setValue] = useState(`#${shade.hex}`);

	const onCopy = () => {
		let value = shade.hex;
		setValue("Copied");
		setTimeout(() => {
			setValue(`#${value}`);
		}, 1000);
	};

	return (
		<CopyToClipboard onCopy={onCopy} text={`#${shade.hex}`}>
			<div
				className={`p-2.5 h-[150px] border cursor-pointer flex items-end justify-end rounded-md transition duration-200 hover:shadow-md`}
				onClick={onCopy}
				style={{ backgroundColor: `#${shade.hex}` }}
			>
				<span className="bg-[#F1F6F9] p-0.5 rounded-sm text-xs">
					{value}
				</span>
			</div>
		</CopyToClipboard>
	);
};

export default ShadesComponent;
