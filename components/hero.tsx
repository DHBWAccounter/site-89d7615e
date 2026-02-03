"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[500px] md:h-[550px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1731266806784-123YYCP5HJCJDHFQ19NH/BAS_background_winter1.jpg?format=2500w"
          alt="Swiss mountains at dawn"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <h1 className="hero-text text-white text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed tracking-wide px-4">
          A bright new dawn for digital transfers, sound money and personal freedom.
        </h1>
      </div>
    </section>
  );
}