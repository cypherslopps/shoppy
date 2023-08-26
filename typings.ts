import { StaticImageData } from "next/image";

export interface ILink {
	title: string
	route: string
}

export interface IRatings {
	rating: number
	reviews: number
}

export interface IProductPrices {
	low: number
	normal: number
}

export interface IProductRequest {
	title: string
	slug?: string
	description: string
	image: StaticImageData
	colors?: string[]
	sizes?: string[]
	price: IProductPrices
	ratings: IRatings
}