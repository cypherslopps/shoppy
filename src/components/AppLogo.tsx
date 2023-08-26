import { FC, LinkHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";


interface AppLogoProps extends LinkHTMLAttributes<HTMLLinkElement> {}

const AppLogo: FC<AppLogoProps> = forwardRef(({ className, href, ...props }, ref) => {
	return (
		<Link 
			className={cn(
				"text-4xl font-extrabold",
				className
			)}
			href={`${href}`}
			{...props}
			ref={ref}
		>
			Shoppy
		</Link>
	)
})

export default AppLogo;