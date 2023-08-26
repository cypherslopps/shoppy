"use client";

import { usePathname } from "next/navigation";
import { Icons } from "@/components/Icons";

 
const BreadCrumb = () => {
    let pathname = usePathname();
        pathname = pathname.slice(1);
    const routes = pathname.split("/");
    const activeRoute = routes[routes.length - 1];

    return (
        <section className="flex items-center gap-x-1 md:gap-x-2 capitalize">
            <span className="text-gray-400 text-[.89rem] text-sm flex gap-x-1 md:gap-x-2">
                <div className="flex items-center gap-x-1">
                    <Icons.home className="w-[.85rem] h-[.85rem] leading-0" />
                    <span>Home</span>
                </div>
                
                <span>/</span>
            </span>

            {routes.map(route => {
                if(route === activeRoute)
                    return <span key={route} className="text-white text-[.89rem] text-sm font-medium">{route}</span>

                return <span key={route} className="text-gray-400 text-[.89rem] text-sm space-x-1 md:space-x-2">
                    <span>{route}</span>
                    <span>/</span>
                </span>
            })}
        </section>
    );
}
 
export default BreadCrumb;