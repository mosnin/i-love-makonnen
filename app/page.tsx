'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import RetroButton from '@/components/RetroButton'
import ArcadeFrame from '@/components/ArcadeFrame'

export default function Home() {
  const menuItems = [
    { label: 'Start Game', path: '/about', description: 'Learn About the Artist' },
    { label: 'Album Select', path: '/albums', description: 'Browse Discography' },
    { label: 'New Drops', path: '/new-releases', description: 'Latest Releases' },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12">
      <div className="container-retro max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ArcadeFrame title="MAKONNEN ARCADE" className="mb-8">
            {/* Hero Section */}
            <div className="text-center py-12 px-4">
              {/* Animated Title */}
              <motion.div
                className="mb-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold neon-text mb-4 leading-tight">
                  iLoveMakonnen
                </h1>
                <div className="flex items-center justify-center space-x-4 text-retro-pink-light">
                  <span className="hidden sm:block">━━━━━━</span>
                  <span className="text-xl sm:text-2xl uppercase tracking-widest">Official Arcade</span>
                  <span className="hidden sm:block">━━━━━━</span>
                </div>
              </motion.div>

              {/* Pixel Art Decoration */}
              <motion.div
                className="text-6xl sm:text-8xl mb-12"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                🎮🎵
              </motion.div>

              {/* Main Menu */}
              <div className="space-y-4 max-w-md mx-auto">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  >
                    <Link href={item.path}>
                      <div className="game-menu-item text-left group">
                        <div className="flex items-center justify-between">
                          <span className="text-lg sm:text-xl font-bold">{item.label}</span>
                          <span className="text-xs sm:text-sm text-gray-400 group-hover:text-retro-pink-light transition-colors">
                            {item.description}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social Links Preview */}
              <motion.div
                className="mt-12 pt-8 border-t-2 border-retro-pink/30"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <p className="text-sm sm:text-base text-gray-400 mb-4 uppercase tracking-wider">
                  Connect & Stream
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <RetroButton
                    href="https://music.apple.com"
                    variant="outline"
                    className="text-sm px-4 py-2"
                  >
                    Apple Music
                  </RetroButton>
                  <RetroButton
                    href="https://spotify.com"
                    variant="outline"
                    className="text-sm px-4 py-2"
                  >
                    Spotify
                  </RetroButton>
                  <RetroButton
                    href="https://youtube.com"
                    variant="outline"
                    className="text-sm px-4 py-2"
                  >
                    YouTube
                  </RetroButton>
                </div>
              </motion.div>

              {/* Press Start Message */}
              <motion.div
                className="mt-8 text-retro-pink-light text-sm sm:text-base"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ▶ PRESS START TO CONTINUE ◀
              </motion.div>
            </div>
          </ArcadeFrame>

          {/* Credits Footer */}
          <motion.div
            className="text-center mt-6 text-xs sm:text-sm text-gray-500 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p>© 2024 iLoveMakonnen | All Rights Reserved</p>
            <p className="mt-1">Powered by Retro Arcade Tech</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
