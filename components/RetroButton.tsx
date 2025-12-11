'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface RetroButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  disabled?: boolean
}

const RetroButton: React.FC<RetroButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'retro-btn relative inline-block text-center font-bold uppercase tracking-wider transition-all duration-200'

  const variantClasses = {
    primary: 'bg-gradient-to-r from-retro-pink to-retro-pink-light text-white border-white',
    secondary: 'bg-gradient-to-r from-neon-blue to-neon-green text-black border-black',
    outline: 'bg-transparent text-retro-pink border-retro-pink hover:bg-retro-pink hover:text-white',
  }

  const content = (
    <motion.span
      className="block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.span>
  )

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  }`

  if (href && !disabled) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  )
}

export default RetroButton
