'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CyberButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'outline'
  className?: string
  disabled?: boolean
}

const CyberButton: React.FC<CyberButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'cyber-btn relative inline-block text-center transition-all duration-300'

  const variantClasses = {
    primary: '',
    outline: '!bg-transparent !border-cyber-pink text-cyber-pink hover:!bg-cyber-pink/10',
  }

  const content = (
    <motion.span
      className="block relative z-10"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
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

export default CyberButton
