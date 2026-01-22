'use client'

import { useState } from 'react';
import Image from 'next/image';

const Video = ({src,previewSrc, className}: {src: string, previewSrc?: string, className?: string}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`w-full flex items-center justify-center ${className || ''}`}>
      <div className="max-w-[1080px] w-full flex items-center justify-center">
        <div className="w-full aspect-[5/3] relative">
          {!isPlaying ? (
            <div className="relative w-full h-full cursor-pointer" onClick={handlePlay}>
              {previewSrc && (
                <Image
                  src={previewSrc}
                  alt="Video preview"
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-ocean-deep" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z" />
                </svg>
              </div>
            </div>
          ) : (
            <iframe
              src={src}
              className="w-full h-full"
              allow="autoplay"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;