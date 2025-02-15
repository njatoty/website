import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { cn } from "../../utils";
import { useInView } from "react-intersection-observer";

const Swiper = ({
    children,
    className,
    time = 5000,
    itemWidth = 350
}: { className?: string, time?: number, itemWidth?: number } & PropsWithChildren) => {

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const { ref, inView } = useInView({ threshold: 1 });

    const [isHovering, setIsHovering] = useState(false);
    const [isAtEnd, setIsAtEnd] = useState(false);

    useEffect(() => {
        if (!inView || isHovering || isAtEnd) return;

        const scrollInterval = setInterval(() => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const maxScroll = container.scrollWidth - container.clientWidth;

                if (container.scrollLeft >= maxScroll) {
                    setIsAtEnd(true); // Stop when reaching the end
                    return;
                }

                container.scrollTo({
                    left: container.scrollLeft + itemWidth,
                    behavior: "smooth",
                });
            }
        }, time);

        return () => clearInterval(scrollInterval);
    }, [time, itemWidth, isHovering, inView, isAtEnd]);

    return (
        <div className="relative flex flex-col w-full" ref={ref}>
            <div
                ref={scrollContainerRef}
                className={cn("flex w-full gap-6 overflow-x-auto flex-nowrap swiper", className)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {children}
            </div>
        </div>
    );
};

export default Swiper;