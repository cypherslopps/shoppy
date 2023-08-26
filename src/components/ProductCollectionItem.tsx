"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Ratings from "@/components/Ratings";
import { Icons } from "@/components/Icons";
import { IProductRequest } from "@/typings";
import { toast } from "@/ui/Toast";
import { Button, buttonVariants } from "@/ui/Button";

interface ProductCollectionItemProps extends IProductRequest {}

const ProductCollectionItem: FC<ProductCollectionItemProps> = ({ title, slug, image, description, sizes, colors, prices, ratings }) => {

  const addItemToCart = () => {
    toast({
      title: "Successful",
      messag: `${title} successfully added to cart`,
      type: "success"
    });
    console.log("adding to cart")
  }

	return (
      <blockquote className="bg-dark-bg-sub shadow grid grid-rows-[55%_1fr] h-80 rounded-md overflow-hidden border border-dark-divider">
        <figure className="relative w-full cursor-pointer group overflow-hidden">
        	<Image 
        		src={image}
        		alt={title}
        		fill
        		className="object-cover transition-transform duration-500 group-hover:scale-105 blur-md transition duration-100"
            onLoadingComplete={image => image.classList.remove("blur-md")}
        	/>
        </figure>

        {/* Content */}
        <div className="px-3 py-2 flex flex-col justify-between">
          <header className="-space-y-0.5">
            <h6 className="text-[1.03rem] font-medium">{title}</h6>
            <Ratings 
              min={1}
              ratings={ratings.rating} 
              reviews={ratings.reviews} 
              size="sm"
            />
          </header>

          {/* Sizes */}
          <div className="flex items-center gap-x-2 -mt-2">
            <h5 className="text-sm font-medium">Sizes:</h5>

            {/* List */}
            <ul className="flex items-center gap-x-1">
              {sizes.map(size => (
                <li key={size} className="text-sm text-white/70 uppercase">{size}</li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-1">
              <span className="text-gray-500/80 text-xs">${prices.low}</span>
              <span className="text-white text-[.85rem] font-semibold">${prices.normal}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-x-1">
              <Link 
                href={`/products/${slug}`} 
                className={`text-[.83rem] ${buttonVariants({ variant: "text-primary" })} underline px-0`}
              >
                View
              </Link>

              <Button 
                variant="border-dark"
                className="w-[1.9rem] h-7 rounded-[0.32rem] py-1 px-2 text-sm"
                onClick={addItemToCart}
              >
                <Icons.bag className="w-[98.5%] stroke-dark-link group-hover:stroke-black transition-colors" />
              </Button>
            </div>
          </div>
        </div>
      </blockquote>
	)
}

export default ProductCollectionItem;