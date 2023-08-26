"use client";

import { FC } from "react";
import { Icons } from "@/components/Icons";

interface CartCount {

}

const CartCount: FC<CartCount> = () => {
	return (
		<>
			<button className="relative" title="cart count">
				<Icons.cart className="w-5 h-5" />
				<span className="absolute -top-1 -right-2 bg-rose-500 w-4 h-4 rounded-full text-[.7rem]">0</span>
			</button>

			<span className="sr-only">Cart count</span>
		</>
	)
}

export default CartCount;