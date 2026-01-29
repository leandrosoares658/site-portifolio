import { useEffect, useRef } from "react";


export function useReveal(options = { threshold: 0.2 }) {
    const ref = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        }, options);


        if (ref.current) observer.observe(ref.current);


        return () => observer.disconnect();
    }, [options]);


    return ref;
}