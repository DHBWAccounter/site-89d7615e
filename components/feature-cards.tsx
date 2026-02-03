"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const features = [
  {
    image: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354199228-0X8V4KH8AJ67UZI0QY6Z/1.jpg",
    title: "About",
    description: "Find out about our organization and mission.",
    link: "https://www.bitcoinassociation.ch/about-1",
    linkText: "Learn More",
  },
  {
    image: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/1563354353803-U6B96VGNWCKLD4E8VRHD/bas_gv_2018_bw.jpeg",
    title: "Join US",
    description: "You can become a contributor to our cause, or participate yourself.",
    link: "https://www.bitcoinassociation.ch/meetups-events",
    linkText: "Find Out How",
  },
];

export function FeatureCards() {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="relative aspect-[3/2] mb-6 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <h3 className="card-title text-primary mb-3">
                <a href={feature.link} className="hover:underline">
                  {feature.title}
                </a>
              </h3>
              <p className="text-gray-600 mb-4 font-serif text-base">
                {feature.description}
              </p>
              <a
                href={feature.link}
                className="primary-link inline-flex items-center text-primary text-sm"
              >
                {feature.linkText}
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}