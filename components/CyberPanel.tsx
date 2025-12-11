import React from 'react'

interface CyberPanelProps {
  children: React.ReactNode
  className?: string
  title?: string
}

const CyberPanel: React.FC<CyberPanelProps> = ({
  children,
  className = '',
  title,
}) => {
  return (
    <div className={`cyber-panel ${className}`}>
      {title && (
        <div className="bg-gradient-to-r from-cyber-pink/30 to-transparent text-white px-6 py-3 font-display font-bold uppercase tracking-widest border-b border-cyber-pink/20 text-sm">
          {title}
        </div>
      )}
      <div className="cyber-panel-inner">
        {children}
      </div>
    </div>
  )
}

export default CyberPanel
