"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/images/commision.jpg", link: "/docs/Commission.pdf", name: "Commission" },
  { src: "/images/microinvesment_1.png", link: "/docs/Micro-Investment_1.pdf", name: "Micro Investment" },
  { src: "/images/travel.jpg", link: "/docs/travel.pdf", name: "Travel" },
  { src: "/images/financialproduct.png", link: "/docs/Financial Product.pdf", name: "Financial Product" },
  { src: "/images/bank.png", link: "/docs/Bank.pdf", name: "Bank" },
  { src: "/images/banker.jpg", link: "/docs/PrivateBanker.pdf", name: "Private Banker" },
  { src: "/images/inspirewallet.png", link: "/docs/Inspire Wallet(JP).pdf", name: "Inspire Wallet (JP)" },
  { src: "/images/crypto.png", link: "/docs/Crypto Presentation.pdf", name: "Crypto Presentation" },
];

const pdfFiles = [
  { name: "Commission", link: "/docs/Commission.pdf" },
  // { name: "MicroInvestment.pdf", link: "/docs/Micro-Investment.pdf" },
  { name: "Private Banker", link: "/docs/PrivateBanker.pdf" },
  { name: "Travel", link: "/docs/travel.pdf" },
  { name: "Bank", link: "/docs/Bank.pdf" },
  { name: "Financial Product", link: "/docs/Financial Product.pdf" },
  { name: "Inspire Wallet (JP)", link: "/docs/Inspire Wallet(JP).pdf" },
  { name: "Micro Investment", link: "/docs/Micro-Investment_1.pdf" },
  { name: "Crypto Presentation", link: "/docs/Crypto Presentation.pdf" },
];

export default function CompanyInfo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Title Spacer */}
      <div className="w-full h-[50px] sm:h-[80px]"></div>

      {/* Image Container (Ensures Proper Positioning) */}
      <div className="relative w-[90%] h-[60vh] sm:h-[80vh] flex items-center justify-center">
        {images.map((image, index) => (
          <a
            key={index}
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute w-full h-full flex items-center justify-center"
          >
            <Image
              src={image.src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="contain"
              priority={index === 0}
              className={`absolute transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            />
          </a>
        ))}
      </div>

      {/* PDF List */}
      <div className="mt-1 sm:mt-28 w-full flex flex-col items-center mb-7">
        <h3 className="text-black text-2xl font-bold mb-4">Available PDFs</h3>
        {pdfFiles.map((pdf, index) => (
          <a
            key={index}
            href={pdf.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[80%] border-2 border-gray-300 rounded-md p-4 mb-2 text-center text-lg font-semibold text-blue-600 hover:bg-gray-100 transition"
          >
            {pdf.name}
          </a>
        ))}
      </div>
    </div>
  );
}
