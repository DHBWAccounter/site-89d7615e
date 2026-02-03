"use client";

import Image from "next/image";

export function LogoSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-xs mx-auto text-center">
        <div className="relative w-[180px] h-[190px] mx-auto">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1486226923132-GES7LLNU167XSPW77W83/image-asset.png"
            alt="Bitcoin Association Switzerland Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="mt-2">
          <h2 className="text-xl text-[#C41E3A] font-serif">Bitcoin Association</h2>
          <h2 className="text-xl text-[#C41E3A] font-serif">Switzerland</h2>
        </div>
      </div>
    </section>
  );
}