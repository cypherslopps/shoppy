"use client";

import { FC } from "react";
import NavigationLink from "@/components/NavigationLink";
import AppLogo from "@/components/AppLogo";
import CartCount from "@/components/CartCount";
import { Icons } from "@/components/Icons";
import { navigationLinks } from "@/lib/constants";
import { Button } from "@/ui/Button";
// import { useAuth } from "@/providers/AuthProvider";


interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
	// const { loginWithGoogle } = useAuth();

	return (
		<nav className="navigation py-3 flex items-center justify-between">
			<div className="flex items-center gap-x-6">
				<AppLogo />
				
				{/* Navigation Links */}
				<ul className="flex items-center gap-x-3 mt-3">
					{navigationLinks.map(link => (
						<NavigationLink 
							key={link.title}
							{...link}
						/>
					))}
				</ul>
			</div>

			{/* Navigation Actions */}
			<div className="flex items-center gap-x-1.5">
				<Button 
					title="search input trigger" 
					role="search input trigger"
				>
					<Icons.search className="w-5 h-5" />
					<span className="sr-only">Search Input Trigger</span>
				</Button>

				{/* Cart Count */}
				<CartCount />

				{/* Auth buttons */}
				<div className="flex items-center gap-x-2 ml-3.5">
					<Button role="login button" className="px-1">Login</Button>
					<Button variant="primary">Register</Button>
				</div>
			</div>
		</nav>
	)
}

export default Navigation;