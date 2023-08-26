"use client";

import { createPortal, ReactNode, useRef, useState, useEffect } from "react";

interface PortalProps {
	children: ReactNode
	elementID: string
}

const Portal = ({ children, elementID }) => {
	const portalRef = useRef<HTMLElement | null>(null)
	const [hasMounted, setHasMounted] = useState<boolean>(false);

	useEffect(() => {
        portalRef.current = document.querySelector<HTMLElement>(`#${elementId}`);
        setHasMounted(true);
    }, [hasMounted, elementId]);

    return ((hasMounted && portalRef.current) ? createPortal(
        <>
            {children}
        </>, 
        portalRef.current
    ) : null);
}