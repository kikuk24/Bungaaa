import { useEffect, useState } from "react";
import {
    ArrowLeftCircleIcon,
    ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

const Carousel = ({
    children: images,
    autoSlide = false,
    autoSlideInterval = 5000,
}) => {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));

    const next = () =>
        setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="overflow-hidden relative mt-[60px]">
            <div
                className="flex transition-transform ease-out duration-500 md:max-h-[540px] max-h-[250px]"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {images}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <ArrowLeftCircleIcon className="w-9 h-9" />
                </button>
                <button
                    onClick={next}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <ArrowRightCircleIcon className="w-9 h-9" />
                </button>
            </div>
            <div className="absolute bottom-5 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {images.map((s, i) => (
                        <div
                            key={i}
                            className={`transition-all w-full bg-white rounded-full  ${
                                curr === i ? "p-0.5" : "bg-opacity-50"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
