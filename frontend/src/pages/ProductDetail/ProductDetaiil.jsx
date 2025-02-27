import React, { useState } from "react";
import defaultProductImage from "../../assets/default_product.jpg";

const images = [
  defaultProductImage,
  defaultProductImage,
  defaultProductImage,
  defaultProductImage,
  defaultProductImage
];

const ProductDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div className="relative flex h-56 md:h-96 transition-transform duration-700"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full flex-shrink-0 object-cover"
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-white/30 hover:bg-white/50 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-white/30 hover:bg-white/50 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};

export default ProductDetail;
