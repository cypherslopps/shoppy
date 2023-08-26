import Image from "next/image";
// import { AuthRequiredError } from "@/lib/exceptions";
import { ProductContainer } from "@/components/Containers";
import ProductCollection from "@/components/ProductCollection";
import { productsData } from "@/lib/data";
import { heroContent } from "@/lib/constants";

const authenticated = true;

export default function Home() {
  if(!authenticated) throw new Error("Auth is required to access this page");

  return (
    <>
      {/* Hero */}
      <section className="hero relative mb-8 h-full pb-12 sm:pb-0 sm:h-[35rem] xl:h-[34rem] text-white before:block before:absolute before:w-full before:h-full before:-z-20 before:bg-black/60 relative z-40 overflow-hidden flex items-center justify-center font-bold">
        <Image 
          src={heroContent.image}
          alt="Hero"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover -z-30"
        />
        
        {/* Content */}
        <div>
          <h1 className="text-5xl">{heroContent.title}</h1>
          <p className="font-normal">{heroContent.content}</p>
        </div>
      </section>

      {/* Products Collection */}
      <ProductCollection 
        title="Recommended"
        products={productsData} 
      />
    </>
  )
}
