import React, { FC, ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";


export const buttonVariants = cva(
	'flex items-center justify-center truncate cursor-pointer font-inherit rounded-sm transition-colors duration-300 disabled:hover:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed gap-x-1',
	{
		variants: {
			variant: {
				primary: 'bg-primary-500 text-black hover:bg-primary-95 font-medium disabled:hover:bg-primary-900 focus:bg-primary-600 disabled:focus:bg-primary-700 stroke-black',
				border: 'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-black focus:text-black focus:bg-primary-500 stroke-primary-500',
				"border-dark": "border border-dark-link text-black hover:bg-primary-500 hover:border-primary-500 hover:text-black",
				red: 'text-white bg-rose-600 hover:bg-red-700',
				"text-primary": "text-primary-500",
				"text": "text-white",
				accent: '',
				transparent: '',
				ghost: 'hover:bg-[rgba(255,255,245,.09)] rounded-md hover:text-white'
			},
			size: {
				lg: 'py-1.5 md:py-2 px-4 sm:px-6 md:px-4 lg:px-[29px] text-sm md:text-base',
				md: 'py-1 px-3 text-[.95rem]',
				sm: 'py-0.5 px-1.5'
			},
			width: {
				max: 'w-max',
				full: 'w-full'
			}
		},
		defaultVariants: {
			variant: 'transparent',
			size: 'md',
			width: 'max'
		}
	}
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	disabled?: boolean
	isLoading?: boolean
}

export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({
	children,
	className,
	variant,
	disabled,
	isLoading,
	size,
	width,
	...props
}, ref) => {
	return (
		<button
			className={cn(buttonVariants({ variant, size, width, className }))}
			aria-disabled={disabled}
			disabled={disabled}
			ref={ref}
			{...props}
		>
			{isLoading && (
				<Icons.loader className={`animate-spin ${size === "sm" ? "w-3 h-3" : "w-4 h-4"}`} />
			)}
			{children}
		</button>
	)
})

Button.displayName = "Button";