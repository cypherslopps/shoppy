import { FC } from "react";
import CartCollectionItem from "@/components/CartCollectionItem";

interface CartCollectionProps {}

const CartCollection: FC<CartCollectionProps> = () => {
	return (
		<main className="divide-y divide-dark-divider">
			<header className="py-1.5 md:px-1 grid-cols-3 md:grid grid-cols-cart items-center">
				<h6 className="text-base uppercase font-bold tighter-tight">Products</h6>
				<h6 className="text-base uppercase font-bold tighter-tight">Quality</h6>
				<h6 className="justify-self-end text-base uppercase font-bold tighten-tight">Price</h6>
			</header>
			<section className="grid gap-y-2 py-2.5 md:px-1">
				<CartCollectionItem />
				<CartCollectionItem />
				<CartCollectionItem />
				<CartCollectionItem />
			</section>
		</main>
	)
}

export default CartCollection;