'use client'

import React from 'react'
import { motion } from 'framer-motion'
import RetroCard from '@/components/RetroCard'
import ArcadeFrame from '@/components/ArcadeFrame'
import PixelBorder from '@/components/PixelBorder'
import SocialLink from '@/components/SocialLink'

export default function About() {
  const stats = [
    { label: 'Years Active', value: '10+' },
    { label: 'Albums Released', value: '5+' },
    { label: 'Platinum Singles', value: '2' },
    { label: 'Global Streams', value: '500M+' },
  ]

  const achievements = [
    'Billboard Hot 100 Chart Success',
    'Collaborated with Drake, Lil Wayne, and more',
    'Pioneer of the Atlanta Sound',
    'OVO Sound Signee',
    'Multi-Platinum Recording Artist',
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container-retro max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold neon-text mb-4">
            Player Profile
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 uppercase tracking-wider">
            iLoveMakonnen • Artist • Producer • Icon
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <RetroCard className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-retro-pink mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </RetroCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-12"
        >
          <ArcadeFrame title="Character Bio">
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-base sm:text-lg">
                iLoveMakonnen is an American rapper, singer, and songwriter who rose to prominence
                with his unique sound that blends hip-hop, R&B, and electronic music. Born and
                raised in Los Angeles, Makonnen moved to Atlanta where he developed his distinctive
                musical style.
              </p>
              <p className="text-base sm:text-lg">
                His breakthrough came with the hit single "Tuesday" featuring Drake, which reached
                the top 20 of the Billboard Hot 100 and earned him a recording contract with OVO
                Sound and Warner Bros. Records. Known for his melodic approach to rap and his
                ability to craft infectious hooks, Makonnen has become a influential figure in
                modern hip-hop.
              </p>
              <p className="text-base sm:text-lg">
                Beyond music, iLoveMakonnen is celebrated for his bold fashion choices and his
                authenticity as an artist, consistently pushing boundaries and staying true to his
                artistic vision.
              </p>
            </div>
          </ArcadeFrame>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-12"
        >
          <ArcadeFrame title="Achievements Unlocked">
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="flex items-center space-x-4 p-3 border-l-4 border-retro-pink bg-arcade-gray/50 hover:bg-arcade-gray transition-colors"
                >
                  <span className="text-2xl">🏆</span>
                  <span className="text-sm sm:text-base text-gray-300">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </ArcadeFrame>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <PixelBorder className="p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-retro-pink mb-6 uppercase tracking-wider">
              Connect & Follow
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <SocialLink name="Apple Music" url="https://music.apple.com" icon="🎵" />
              <SocialLink name="Spotify" url="https://spotify.com" icon="🎧" />
              <SocialLink name="YouTube" url="https://youtube.com" icon="📺" />
              <SocialLink name="Instagram" url="https://instagram.com" icon="📸" />
              <SocialLink name="TikTok" url="https://tiktok.com" icon="🎬" />
              <SocialLink name="Twitter / X" url="https://twitter.com" icon="🐦" />
            </div>
          </PixelBorder>
        </motion.div>
      </div>
    </div>
  )
}
