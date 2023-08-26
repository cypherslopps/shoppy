import { FC } from "react";

interface LoadingProps {}

const Loading: FC<LoadingProps> = () => {
	return <main className="h-screen w-full flex items-center justify-center">
		<span>Loading</span>
	</main>
}