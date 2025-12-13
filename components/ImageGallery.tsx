"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ProjectImage } from "@/data/projects";

interface ImageGalleryProps {
  images: ProjectImage[];
  title?: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft' && selectedImage > 0) {
        setSelectedImage(selectedImage - 1);
      } else if (e.key === 'ArrowRight' && selectedImage < images.length - 1) {
        setSelectedImage(selectedImage + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="mb-12">
      {title && (
        <h2 className="text-2xl font-semibold mb-6 text-white">{title}</h2>
      )}
      
      {/* Full-size Images */}
      <div className="space-y-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300"
          >
            <div className="bg-black/30 rounded-lg p-4 mb-4 overflow-hidden relative aspect-video">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedImage(index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View ${image.alt} in full size`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                loading="lazy"
              />
            </div>
            {image.caption && (
              <p className="text-gray-400 text-sm leading-relaxed">{image.caption}</p>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <div className="max-w-6xl max-h-full relative">
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close image gallery"
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
            )}
            
            {selectedImage < images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            )}
            
            <div className="relative w-full h-[90vh] max-w-7xl mx-auto">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
                sizes="90vw"
                priority
              />
            </div>
            {images[selectedImage].caption && (
              <p className="text-white text-center mt-4">{images[selectedImage].caption}</p>
            )}
            <p className="text-gray-400 text-center mt-2 text-sm">
              {selectedImage + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

