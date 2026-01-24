import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
}

const FadeInSection = ({
  children,
  className = "",
}: FadeInSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
   
    const element = ref.current;
    if (!element) return;

    // ✅ Safe: runs only on client
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // If user prefers reduced motion, show immediately
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
         console.log("FadeInSection mounted");
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // animate once
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
<div
  ref={ref}
  className={`
    transition-all duration-700 ease-out
    mt-2 p-4
    md:mt-4 md:p-8
    ${
      isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8"
    }
    ${className}
  `}
>
  {children}
</div>
  );
};

export default FadeInSection;
