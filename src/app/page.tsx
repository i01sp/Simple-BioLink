'use client'

import VideoBackground from '@/components/Video'
import Video2 from '@/components/Video2'
import { useState } from 'react'

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false)
  const [volume, setVolume] = useState(50)
  const [showVolumeTooltip, setShowVolumeTooltip] = useState(false)
  const socialLinks = [
    {
      username: 'i01sp',
      baseUrl: 'https://github.com/',
      displayUsername: 'i01sp',
      iconPath: '/icons/github.webp'
    },
    {
      username: 'c6yeq',
      baseUrl: 'https://t.me/',
      displayUsername: 'Syeq',
      iconPath: '/icons/telegram.webp'
    },
    // {
    //   username: '31uahhvmebvokyvojqwyzvcs3dxa',
    //   baseUrl: 'https://open.spotify.com/user/',
    //   displayUsername: '⸸',
    //   iconPath: '/icons/spotify.webp'
    // }
  ]

  const handleEnterClick = () => {
    setShowMainContent(true)
  }

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume)
    const video = document.querySelector('video') as HTMLVideoElement
    if (video) {
      video.volume = newVolume / 100
    }
  }

  if (showMainContent) {
    return (
      <main className="relative min-h-screen overflow-hidden">
        <Video2 videoSrc="/videos/0920.mp4" />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="max-w-md w-full space-y-6">
            <div className="profile-container bg-black bg-opacity-40 p-8 rounded-2xl backdrop-blur-lg shadow-2xl">
              <div className="profile-container-inner flex flex-col items-center">
                <img 
                  src="/images/i01.jpg" 
                  alt="Profile" 
                  className="profile-picture w-24 h-24 rounded-full object-cover mb-4 border-2 border-white shadow-lg"
                />
                <div className="profile-info text-center text-white">
                  <h1 className="display-name text-2xl font-bold mb-2">i01</h1>
                  <p className="bio text-gray-300 mb-4">github.com/i01sp</p>
                </div>
              </div>
            </div>

            <div className="social-links bg-black bg-opacity-40 p-6 rounded-2xl backdrop-blur-lg shadow-2xl">
              <div className={`links-grid grid gap-4 ${
                socialLinks.length === 1 ? 'grid-cols-1 justify-center' :
                socialLinks.length === 2 ? 'grid-cols-2' :
                socialLinks.length === 3 ? 'grid-cols-3' :
                socialLinks.length === 4 ? 'grid-cols-4' :
                socialLinks.length === 5 ? 'grid-cols-5' :
                socialLinks.length === 6 ? 'grid-cols-6' :
                'grid-cols-3 lg:grid-cols-4'
              }`}>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={`${link.baseUrl}${link.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link flex items-center justify-center p-3 rounded-xl bg-gray-600 bg-opacity-20 hover:bg-opacity-40 transition-all cursor-pointer shadow-lg"
                  >
                    <div className="social-icon text-gray-300 hover:text-white transition-colors">
                      <img 
                        src={link.iconPath}
                        className="w-7 h-7 filter brightness-75 hover:brightness-100 transition-all"
                      />
                    </div>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                      {link.displayUsername}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="audio-controls bg-black bg-opacity-40 p-6 rounded-2xl backdrop-blur-lg shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.785L5.8 14H3a1 1 0 01-1-1V7a1 1 0 011-1h2.8l2.583-2.785a1 1 0 011.617-.785z" clipRule="evenodd" />
                    <path d="M12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" />
                  </svg>
                  <span className="text-gray-300 text-sm">0%</span>
                </div>
                
                <div 
                  className="flex-1 relative"
                  onMouseEnter={() => setShowVolumeTooltip(true)}
                  onMouseLeave={() => setShowVolumeTooltip(false)}
                >
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => handleVolumeChange(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-500 rounded-lg appearance-none cursor-pointer slider"
                  />
                  {showVolumeTooltip && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-75">
                      {volume}%
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-gray-300 text-sm">100%</span>
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.785L5.8 14H3a1 1 0 01-1-1V7a1 1 0 011-1h2.8l2.583-2.785a1 1 0 011.617-.785z" clipRule="evenodd" />
                    <path d="M12 8a1 1 0 012 0v4a1 1 0 11-2 0V8z" />
                    <path d="M12.93 5.343a1 1 0 011.414 0c2.781 2.781 2.781 7.291 0 10.071a1 1 0 01-1.414-1.414c1.97-1.97 1.97-5.166 0-7.136a1 1 0 010-1.414z" />
                    <path d="M15.071 2.929a1 1 0 011.414 0c4.296 4.296 4.296 11.26 0 15.556a1 1 0 01-1.414-1.414c3.501-3.501 3.501-9.175 0-12.676a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <VideoBackground videoSrc="/videos/0920.mp4" />
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <button
          onClick={handleEnterClick}
          className="heartbeat-shadow bg-black text-white px-8 py-4 rounded-2xl text-lg font-medium duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        >
          Click to enter
        </button>
      </div>
    </main>
  )
}