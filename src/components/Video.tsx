'use client'

interface VideoBackgroundProps {
  videoSrc?: string
}

export default function VideoBackground({ videoSrc }: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 w-full h-full">
      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-purple-1000 via-blue-1000 to-indigo-900 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50 animate-pulse" 
               style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"
               style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        </div>
      )}
    </div>
  )
}