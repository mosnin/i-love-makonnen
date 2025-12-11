'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Albums', path: '/albums' },
    { name: 'New Releases', path: '/new-releases' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-gray/95 backdrop-blur-md border-b border-cyber-pink/20">
      <div className="container-cyber">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <motion.div
              className="w-10 h-10 border border-cyber-pink flex items-center justify-center text-cyber-pink font-display font-bold text-xl"
              whileHover={{ scale: 1.05, borderColor: '#FF1493' }}
              transition={{ duration: 0.3 }}
              style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
            >
              ◆
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-white group-hover:text-cyber-pink transition-colors hidden sm:block">
                iLoveMakonnen
              </span>
              <span className="text-xs font-mono text-gray-500 hidden sm:block">CYBERPUNK_EDITION</span>
            </div>
            <span className="text-lg font-display font-bold text-white group-hover:text-cyber-pink transition-colors sm:hidden">
              iLM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="px-4 py-2 font-display text-sm font-semibold text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-pink to-transparent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5 border border-cyber-pink/50 bg-cyber-gray-light hover:bg-cyber-pink/10 transition-colors"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
          >
            <motion.span
              className="block w-5 h-0.5 bg-cyber-pink"
              animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-cyber-pink"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-cyber-pink"
              animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-t border-cyber-pink/20 bg-cyber-gray/98 backdrop-blur-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-cyber py-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className="block px-4 py-3 font-display text-gray-300 hover:text-cyber-pink transition-colors border-l-2 border-transparent hover:border-cyber-pink hover:pl-6"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
