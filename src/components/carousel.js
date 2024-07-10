"use client";
import { useState, useEffect } from "react";

function Carousel({
  children: images,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const previousImage = () =>
    setCurrentImage((currentImage) =>
      currentImage === 0 ? images.length - 1 : currentImage - 1
    );

  const nextImage = () =>
    setCurrentImage((currentImage) =>
      currentImage === images.length - 1 ? 0 : currentImage + 1
    );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextImage, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images}
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-[#DB4444] rounded-full 
              ${
                currentImage === i ? "p-2 border-white border-2" : "bg-gray-400"
              }
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
