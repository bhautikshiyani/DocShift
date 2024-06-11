import React from 'react'
import { Link } from 'react-router-dom'
import gradientsData from "@assets/gradients.json";
import { splitAndFormat } from '../../shared/utils';

const Convert = () => {
	return (
		<div>
			<h2 className="text-hero font-[800] md:leading-[60px] dark:text-white text-fs-xl-100 mb-3">
				Color Converter
			</h2>
			<span className="paragraph text-black dark:text-white  text-body mb-3">This tool allows you to convert colors between 4 different formats: RGB, HEX, HSL, CMYK, HSV</span>
			<div className='p-4 rounded-[12px] bg-[var(--theme-surface-body-pane)] dark:bg-[var(--theme-surface-container)] '>
				<div>
					<div className="grid grid-cols-12 gap-4">
						{
							gradientsData?.convert?.map((item, index) => {
								return (
									<div key={index} className="col-span-12 md:col-span-4 lg:col-span-3 rounded-[12px] p-5 bg-[var(--theme-surface-a10)] dark:bg-[var(--theme-surface-container-low)] ">
										<h2 className="uppercase text-center  mb-3 font-bold text-black dark:text-white text-[20px]">{item.name}</h2>
										<ul className="list list--icon text-center">
											{
												item.convertname.map((name, index) => {
													return (
														<li key={index} className='text-black/[80%] items-center flex flex-col text-[14px] dark:text-white/[80%]'>
															<Link to={`/convert/${name}`} className="relative group after:absolute  after:h-[1px] after:bottom-[3px] after:transition-all after:duration-300 after:left-0 dark:after:bg-white/[80%] after:bg-black/[80%] hover:after:w-full after:w-0 transition duration-300">
															{splitAndFormat(name)}
															<span className='h-[2px] group:hover:w-full bg-black block w-0'></span>
															</Link>
														</li>
													)
												})
											}
										</ul>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Convert