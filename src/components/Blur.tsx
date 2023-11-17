import React, { useState, useEffect } from "react";

const Blur = () => {
    const [scrollOpacity, setScrollOpacity] = useState(1);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.clientHeight;
        const bottomThreshold = bodyHeight - windowHeight - 25;

        const opacity = scrollY >= bottomThreshold ? 0 : 1;

        console.log({
            scrollY, windowHeight, bodyHeight, opacity, bottomThreshold
        })
        setScrollOpacity(opacity);
    };

    useEffect(() => {

        const handleScrollEvent = () => {
            console.log("scroll event fired");
            handleScroll();
        };

        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, []);

    return (
        <div
            className={`fixed inset-0 p-1 w-full h-full backdrop-blur-[8px] pointer-events-none z-50 opacity-${scrollOpacity} overlay-mask webkit-gradient`}
        />
    );
};

export default Blur;