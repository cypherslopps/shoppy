"use client";

import { FC, useState } from "react";
import { cn } from "@/lib/utils";

interface ProductItemOptionProps {
	title: string
	options: string[]
	type?: "colors"
	className: string
}

const ProductItemOption: FC<ProductItemOptionProps> = ({ title, options, type, className }) => {
	const [isActive, setIsActive] = useState("");

	return (
		<div className={cn(
			"grid gap-y-2", 
			className
		)}>
			<h3 className="text-lg font-semibold">{title}</h3>

			{/* Option List */}
			<ul className="flex items-center gap-x-2">
				{options.map(option => {
					if(type === "colors") 
						return (
							<li 
								key={option}
								style={{ background: option}}
								className={`w-5 h-5 rounded-full cursor-pointer ${isActive === option ? "border-2 border-primary-500" : "hover:border-2 hover:border-primary-500"} transition-colors duration-200`}
								onClick={() => setIsActive(option)}
							/>
						)

					return (
						<li 
							key={option}
							className={`w-10 h-9 rounded-md cursor-pointer text-sm border-2 flex items-center justify-center ${isActive === option ? "bg-primary-500 border-primary-500 text-black font-bold" : "text-dark-link border-dark-divider hover:border-primary-500 hover:bg-primary-500 hover:text-black"} transition-colors duration-200 uppercase`}
							onClick={() => setIsActive(option)}
						>{option}</li>
					)
				})}
			</ul>
		</div>
	)
}

export default ProductItemOption;