

import { FC } from "react";
import { Button } from "@/ui/Button";

interface CheckoutProps {}

const Checkout: FC<CheckoutProps> = () => {
    return (
        <aside className="w-full md:w-[15rem] lg:w-[16.5rem] rounded-md border border-dark-divider divide-y divide-dark-divider p-4">
            {/* Product Pricing */}
            <ul className="space-y-3.5 md:space-y-3 lg:space-y-2.5 pb-4">
                <li className="flex justify-between items-center">
                    <h4 className="text-md md:text-sm text-gray-400">Subtotal</h4>
                    <span className="font-medium text-md md:text-sm">$534.53</span>
                </li>

                <li className="flex justify-between items-center">
                    <h4 className="text-md md:text-sm text-gray-400">Discount</h4>
                    <span className="font-medium text-md md:text-sm">$0</span>
                </li>
            </ul>

            {/* Checkout Action */}
            <div className="pt-3 space-y-4 md:space-y-3">
                <div className="flex justify-between items-center">
                    <h4 className="text-md md:text-sm text-gray-400">Total</h4>
                    <span className="font-medium text-md md:text-sm">$534.53</span>
                </div>

                <Button 
                    variant="primary" 
                    role="checkout-button" 
                    title="checkout-button"
                    width="full"
                    className="w-1/2 mx-auto py-3 md:mx-none md:w-full rounded-full md:py-1.5"
                >
                    Checkout
                </Button>
            </div>
        </aside>
    )
} 

export default Checkout;