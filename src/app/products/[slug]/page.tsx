import React from "react";
import Image from 'next/image';
import { Metadata } from "next";
import BreadCrumb from "@/components/Breadcrumb";
import ProductItemOption from "@/components/ProductItemOption";
import Ratings from "@/components/Ratings";
import { capitalizeFirstLetter, replaceCharacter } from "@/lib/utils";
import ProductImage from "@/public/images/image_processing20210906-11834-1tvzr6r.gif";

type ProductProps = {
  params: {
    slug: string,
  },
  searchParams: {
    category: string
  }
}

export async function generateMetadata({ params, searchParams }: ProductProps): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `Products | ${capitalizeFirstLetter(replaceCharacter(slug, "-", " "))}` 
  }
} 

export default function Product({ params, searchParams }: ProductProps) {
  const { slug } = params;

  return (
    <>
      {/* BreadCrumb */}
      <BreadCrumb />

      {/* Product Item Description */}
      <section className="h-[32rem] grid grid-cols-[45%_1fr] grid-rows-1 gap-x-6 mt-3">
        {/* Product Image */}
        <div className="relative">
          <Image 
            src={ProductImage}
            alt={slug}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Product Content */}
        <div className="divide-y divide-gray-500">
          <header>
            <h3 className="text-4xl tighten-3 leading-tight font-bold">{capitalizeFirstLetter(replaceCharacter(slug, "-", " "))}</h3>
            <p className="text-[.89rem] text-dark-link w-[83%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, veniam assumenda nisi cumque illo, delectus voluptatem ut repellat aut, nulla obcaecati iure. Nostrum ullam sint quibusdam ut natus tempora cupiditate.</p>

            {/* Ratings */}
            <Ratings reviews={200} className="mt-2" />
          </header>

          {/* Prices */}
          <div className="space-y-2 mt-6 py-4">
            <ul className="flex items-center gap-x-2">
              <li className="text-[1.7rem] text-gray-500/80 font-semibold tighter-3">$4,355.34</li>
              <li className="text-3xl text-white font-bold tighter-tight">$3,962,54</li>
            </ul>

            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
          </div>

          {/* Product Item Sizes And Colors Container */}
          <div className="grid grid-cols-2 items-start divide-x divide-gray-500 mt-3">
            {/* Product Item Sizes List */}
            <ProductItemOption 
              title="Select size"
              options={["xl", "lg", "md", "sm"]}
              className="py-4"
            />

            {/* Product Item Colors List */}
            <ProductItemOption 
              title="Choose a color"
              options={["red", "purple", "pink", "teal"]}
              type="colors"
              className="py-4 pl-5"
            />
          </div>

          {/* Product Item Actions */}
          <div>Actions</div>
        </div>
      </section>
    </>
  )
}


export async function generateStaticParams() {
  const posts = ["post one", "post two"];

  return posts.map(post => ({
    postId: post
  }));
}