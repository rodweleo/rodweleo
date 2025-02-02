"use client";

import { useEffect, ReactNode, useState, useRef } from "react";

interface FadeInProps {
    children: ReactNode;
    duration?: number;  // delay before the fade-in effect triggers
    className?: string;
}

export default function FadeIn({
    children,
    duration = 0, // default delay of 0 ms
    className = "", // default to an empty string
}: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Create a new IntersectionObserver
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Check if the element is in view
                    if (entry.isIntersecting) {
                        // Optionally delay the fade in using duration
                        setTimeout(() => {
                            setIsVisible(true);
                        }, duration);

                        // Optionally stop observing once the element has become visible
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // trigger when 10% of the element is visible
            }
        );

        // Start observing the element if it exists
        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        // Cleanup: disconnect the observer when the component unmounts
        return () => {
            observer.disconnect();
        };
    }, [duration]);

    return (
        <div
            ref={elementRef}
            className={`transition-all duration-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${className}`}
        >
            {children}
        </div>
    );
}
