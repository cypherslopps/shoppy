"use client";

import { FC } from "react";

interface ErrorProps {
	error: Error
	reset: () => void
} 


const Error: FC<ErrorProps> = ({ error, reset }) => {
	console.log(error, "error");

	return (
		<main className="text-white">
			<h1>{error.message | "There was an error fetching products"}</h1>
			<button onClick={reset}>Try again</button>
		</main>
	)
} 