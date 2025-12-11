'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CyberCard from '@/components/CyberCard'
import CyberPanel from '@/components/CyberPanel'
import SocialLink from '@/components/SocialLink'

export default function About() {
  const stats = [
    { label: 'Years Active', value: '10+' },
    { label: 'Albums', value: '5+' },
    { label: 'Platinum Singles', value: '2' },
    { label: 'Streams', value: '500M+' },
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
      <div className="container-cyber max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyber-pink" />
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white">
              About
            </h1>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyber-pink" />
          </div>
          <p className="text-center text-gray-500 font-mono text-sm uppercase tracking-widest">
            Artist Profile
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <CyberCard className="text-center">
                <div className="text-4xl sm:text-5xl font-display font-bold text-cyber-pink mb-3">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-mono text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <CyberPanel title="Biography">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-base sm:text-lg">
                iLoveMakonnen is an American rapper, singer, and songwriter who rose to prominence
                with his unique sound that blends hip-hop, R&B, and electronic music. Born and
                raised in Los Angeles, Makonnen moved to Atlanta where he developed his distinctive
                musical style.
              </p>
              <p className="text-base sm:text-lg">
                His breakthrough came with the hit single &quot;Tuesday&quot; featuring Drake, which reached
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
          </CyberPanel>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-8">
            Achievements
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="cyber-border p-4 bg-cyber-gray-light/30 hover:bg-cyber-gray-light/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="text-cyber-pink text-sm mt-1">◆</span>
                  <span className="text-sm sm:text-base text-gray-300">{achievement}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="accent-line mb-8" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-8 text-center">
            Connect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            <SocialLink name="Apple Music" url="https://music.apple.com" icon="♪" />
            <SocialLink name="Spotify" url="https://spotify.com" icon="♪" />
            <SocialLink name="YouTube" url="https://youtube.com" icon="▶" />
            <SocialLink name="Instagram" url="https://instagram.com" icon="◆" />
            <SocialLink name="TikTok" url="https://tiktok.com" icon="◆" />
            <SocialLink name="Twitter / X" url="https://twitter.com" icon="◆" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
