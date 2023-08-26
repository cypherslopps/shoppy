import { FC, ReactNode } from "react";


interface ContainerProps {
	children: ReactNode
}

export const ProductContainer = ({ children }) => {
	return (
		<section className="w-11/13 mx-auto">
			{children}
		</section>
	)
}