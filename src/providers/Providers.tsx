"use client";

import { FC, ReactNode } from "react";
import dynamic from "next/dynamic";

// const AuthProvider = dynamic(
// 	() => import("./AuthProvider").then(mod => mod.AuthProvider),
// 	{ ssr: false }
// );

const Toaster =  dynamic(
    () => import('@/components/ui/Toast').then(mod => mod.Toaster),
    { ssr: false }
);


interface ProvidersProps {
	children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<>
			<Toaster />

			{children}
		</>
	)
} 

export default Providers;