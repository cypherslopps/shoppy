"use client";

import { FC } from "react";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";

interface RetingsProps {
	ratings?: number
	reviews: number
	className?: string
	size: "sm" | "default"
	min?: number
}

const Ratings: FC<RatingsProps> = ({ ratings, reviews, size="default", min, className }) => {
	return (
		<div className={cn(
			"flex items-center gap-x-1",
			className
		)}>
			<div className="flex items-center gap-0.5">
				<ul className="flex items-center gap-x-0.5">
					{Array.from({ length: min || 5 }).map((_, index) => (
						<Icons.star 
							key={index} 
							className={`${size === "sm" ? "w-3 h-3" : "w-4 h-4"} fill-primary-500 stroke-primary-500`} 
						/>
					))}
				</ul>
				{ratings && <span className="text-[.83rem] text-gray-300">{ratings}</span>}
			</div>

			{/* Rating */}
			<span className="text-gray-400 text-[.83rem]">{`(${reviews} reviews)`}</span>
		</div>
	)
}

export default Ratings;