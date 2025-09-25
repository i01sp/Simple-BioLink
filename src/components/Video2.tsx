'use client'

import { useEffect, useRef } from 'react'

interface Video2Props {
  videoSrc: string
}

export default function Video2({ videoSrc }: Video2Props) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        muted={false}
        controls={false}
        className="w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  )
}