import { PropsWithChildren, useEffect, useRef, useState } from "react"
import { cn } from "../../utils"
import { useInView } from "react-intersection-observer";

const Swiper = ({
    children,
    className,
    time = 5000,
    itemWidth = 350
}: { className?: string, time?: number, itemWidth?: number } & PropsWithChildren) => {

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    // Use object destructuring, so you don't need to remember the exact order
    const { ref, inView } = useInView({
        threshold: 1
    });

    const [isHovering, setIsHovering] = useState(false);
    const [stopped, setStopped] = useState(false);


    useEffect(() => {

        if (stopped) return;

        if (!inView || isHovering) return;

        const scrollInterval = setInterval(() => {
            if (scrollContainerRef.current) {

                const container = scrollContainerRef.current;
                const maxScroll = container.scrollWidth - container.clientWidth;
                const condition = container.scrollLeft >= maxScroll;

                container.scrollTo({
                    left: condition
                        ? 0 // Reset to start when reaching the end
                        : container.scrollLeft + itemWidth,
                    behavior: condition ? "smooth" : "smooth",
                });
            }
        }, time);

        return () => clearInterval(scrollInterval); // Cleanup on unmount
    }, [time, itemWidth, isHovering, inView, stopped]);


    return (
        <div className="relative w-full" ref={ref}>
            <div ref={scrollContainerRef}
                className={cn("flex w-full gap-6 overflow-x-auto flex-nowrap swiper", className)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {children}
            </div>
        </div>
    )
}

export default Swiper