"use client";

import { FC } from "react";
import Image from "next/image";
import { Button } from "@/ui/Button";
import { Icons } from "@/components/Icons";
import CartImage from "@/public/images/shopping_app_interactions_ramotion_still_2x.gif";

interface CartCollectionItemProps {}

const CartCollectionItem: FC<CartCollectionItemProps> = () => {
	return (
		<blockquote className="grid grid-cols-3 md:grid-cols-cart items-center">
			{/* Product Price */}
			<div className="flex gap-x-2.5">
				{/* Product Image */}
				<figure className="relative w-32 h-28 rounded-md overflow-hidden">
					<Image 
						src={CartImage}
						alt="cart item 0"
						fill
						priority
						sizes="100vw"
						className="object-cover blur-md transition"
						onLoadingComplete={image => image.classList.remove("blur-md")}
					/>
				</figure>

				{/* Product Details */}
				<div className="flex flex-col gap-y-1">
					<h5 className="text-[1.11rem] font-medium">Biggie Cottage</h5>
					<p className="text-gray-400 font-medium text-sm">Size: LG</p>
					<p className="text-gray-400 font-medium text-sm">Color: Red</p>
				</div>
			</div>

			{/* Actions */}
			<div className="flex flex-col items-center gap-y-2 user-select-none">
				{/* Change Cart Item Count */}
				<div className="flex items-center gap-x-2.5 font-medium">
					<span className="w-5 h-5 rounded-full border border-dark-link flex items-center justify-center transition-colors hover:bg-dark-link hover:text-black cursor-pointer">-</span>
					1
					<span className="w-5 h-5 rounded-full border border-dark-link flex items-center justify-center transition-colors hover:bg-dark-link hover:text-black cursor-pointer">
						<Icons.add className="flex-1 w-3 h-3" />
					</span>
				</div>

				{/* Remove Cart Item Button */}
				<Button 
					title="remove cart item button"
					className="text-sm flex items-center"
					variant="ghost"
					size="sm"
				>
					<Icons.delete className="w-[.85rem] h-[.85rem]" />
					Remove
					<span className="sr-only">Remove Cart Item Button</span>
				</Button>
			</div>

			{/* Product Price */}
			<span className="font-medium text-[1.03rem] justify-self-end">$4345.76</span>
		</blockquote>
	)
}

export default CartCollectionItem;