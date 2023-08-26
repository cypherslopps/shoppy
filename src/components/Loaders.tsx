import { FC } from "react";

interface LoaderProps {

}

export const ProductLoader: FC<LoaderProps> = () => {
	return (
		<>
			{Array.from({ length: 10 }).map((_, index) => (
				<blockquote key={index} className="bg-dark-bg-sub animate-pulse" />
			))}	
		</>
	)
}