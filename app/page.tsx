'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CyberButton from '@/components/CyberButton'

export default function Home() {
  const menuItems = [
    { label: 'About', path: '/about', icon: '01' },
    { label: 'Albums', path: '/albums', icon: '02' },
    { label: 'New Releases', path: '/new-releases', icon: '03' },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyber-pink/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container-cyber max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Main Hero Section */}
          <div className="text-center mb-20">
            {/* Artist Name - Large and Bold */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-4 leading-none tracking-tight">
                iLoveMakonnen
              </h1>
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyber-pink" />
                <p className="text-sm sm:text-base font-mono text-gray-500 uppercase tracking-[0.3em]">
                  Artist • Producer • Visionary
                </p>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyber-pink" />
              </div>
            </motion.div>

            {/* Geometric Accent */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="my-16 flex justify-center"
            >
              <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-24 h-24 border border-cyber-pink/30 flex items-center justify-center"
                  style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                >
                  <div className="w-16 h-16 border border-cyber-pink/50 bg-cyber-pink/10"
                    style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation Grid */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
              >
                <Link href={item.path}>
                  <motion.div
                    className="group cyber-card cursor-pointer h-full flex flex-col justify-between min-h-[200px]"
                    whileHover={{ y: -8 }}
                  >
                    <div>
                      <div className="font-mono text-cyber-pink/50 text-xs mb-4">{item.icon}</div>
                      <h3 className="text-3xl font-display font-bold text-white group-hover:text-cyber-pink transition-colors mb-2">
                        {item.label}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 group-hover:text-cyber-pink transition-colors mt-4">
                      <span className="font-mono text-sm">Explore</span>
                      <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Streaming Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-center"
          >
            <div className="accent-line mb-8" />
            <p className="text-sm font-mono text-gray-600 uppercase tracking-widest mb-6">
              Stream Now
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <CyberButton
                href="https://music.apple.com"
                variant="outline"
                className="text-sm"
              >
                Apple Music
              </CyberButton>
              <CyberButton
                href="https://spotify.com"
                variant="outline"
                className="text-sm"
              >
                Spotify
              </CyberButton>
              <CyberButton
                href="https://youtube.com"
                variant="outline"
                className="text-sm"
              >
                YouTube
              </CyberButton>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-center mt-20"
          >
            <p className="text-xs font-mono text-gray-700 uppercase tracking-wider">
              © 2024 iLoveMakonnen • Cyberpunk Edition
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
