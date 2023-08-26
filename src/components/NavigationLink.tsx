"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ILink } from "@/typings";


interface NavigationLinkProps extends ILink {}

const NavigationLink: FC<NavigationLinkProps> = ({ title, route }) => {
	const pathname = usePathname();
	const activeLinkStyle = pathname === route ? "text-primary-500" : "text-dark-link hover:text-primary-500";

	return (
		<li>
			<Link 
				href={route} 
				className={`${activeLinkStyle} text-sm transition-colors`}
			>
				{title}
			</Link>
		</li>
	)
}

export default NavigationLink;