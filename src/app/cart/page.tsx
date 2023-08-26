import { Metadata } from "next"; 
import BreadCrumb from "@/components/Breadcrumb";
import Checkout from "@/components/Checkout";
import CartCollection from "@/components/CartCollection";

export const dynamic = 'force-dynamic'; 

export const metadata: Metadata = {
  title: "Cart",
  description: "Shoppy cart",
}

export default function Cart() {
  return (
    <main className="grid grid-cols-1 gap-y-8 md:grid-cols-[1fr_max-content] md:items-start md:gap-x-8 lg:gap-x-12">
      <main className="flex flex-col gap-y-3">
        {/* Breadcrumb */}
        <BreadCrumb />

        {/* Cart Container */}
        <CartCollection />
      </main>

      {/* Checkout */}
      <Checkout />
    </main> 
  )
}
