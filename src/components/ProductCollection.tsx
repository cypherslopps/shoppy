import { FC } from "react";
import ProductCollectionItem from "@/components/ProductCollectionItem";

interface ProductCollectionProps {
	title: string
	products: any
}

const ProductCollection: FC<ProductCollectionProps> = ({ title, products }) => {
	const productData = Object.entries(products).map(([,data]) => data).flat();

	return (
		<main className="space-y-6">
			<h1 className="text-2xl font-bold">{title}</h1>

			{/* Collection */}
			<div className="grid grid-cols-5 gap-3">
				{productData && productData.map((product) => (
		        	<ProductCollectionItem key={product.title} {...product} />
		        ))}
			</div>
	    </main>
	)
}

export default ProductCollection;