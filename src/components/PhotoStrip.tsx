"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { featuredPhotos } from "@/data/photography";

export function PhotoStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= el.scrollWidth / 2) {
        scrollPos = 0;
      }
      el.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate photos for infinite scroll
  const photos = [...featuredPhotos, ...featuredPhotos];

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-hidden no-scrollbar"
    >
      {photos.map((photo, i) => (
        <div
          key={i}
          className="flex-none w-[300px] md:w-[400px] h-[200px] md:h-[267px] relative rounded-sm overflow-hidden"
        >
          <Image
            src={photo.thumb}
            alt={photo.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="400px"
          />
        </div>
      ))}
    </div>
  );
}
