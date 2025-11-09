"use client"

import { useEffect, useState } from "react"

export default function AIProcessSVG() {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    setIsAnimating(true)
  }, [])

  return (
    <div className="flex items-center justify-center p-4">
      <svg width="450" height="450" viewBox="0 0 800 800" className="max-w-full h-auto">
        <defs>
          <linearGradient id="petalGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d" stopOpacity="1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="petalGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" stopOpacity="1" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="petalGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f87171" stopOpacity="1" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="petalGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="petalGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fca5a5" stopOpacity="1" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fed7aa" stopOpacity="1" />
            <stop offset="100%" stopColor="#fdba74" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>

          {/* Soft glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="innerGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background decorative circles */}
        <circle cx="400" cy="400" r="320" fill="#fef3c7" opacity="0.2" />
        <circle cx="400" cy="400" r="280" fill="#fef3c7" opacity="0.1" />
        <circle cx="400" cy="400" r="280" fill="#fef3c7" opacity="0.1" />

        {/* Top Petal - Input */}
   
        {/* Left-Bottom Petal - Refinement */}
     

       
        
          <circle cx="230" cy="250" r="12" fill="#fff8dc" filter="url(#innerGlow)" transform="rotate(288 230 290)" />
       

        <circle cx="400" cy="400" r="60" fill="url(#centerGradient)" filter="url(#glow)" />
        <circle cx="400" cy="400" r="50" fill="#fef08a" opacity="0.8" />
        <circle cx="400" cy="400" r="40" fill="#fcd34d" />

        {/* Center AI icon */}
        <g transform="translate(400, 400)">
          <circle cx="0" cy="0" r="25" fill="none" stroke="#d97706" strokeWidth="2" />
          <circle cx="0" cy="0" r="15" fill="none" stroke="#dc2626" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="8" fill="#dc2626" />

          {/* Animated pulses from center */}
          <circle cx="0" cy="0" r="30" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.6">
            <animate attributeName="r" from="30" to="50" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="30" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.6">
            <animate attributeName="r" from="30" to="50" dur="2s" repeatCount="indefinite" begin="0.6s" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" begin="0.6s" />
          </circle>
        </g>

        {/* Input to Center */}
        <g>
          <line x1="400" y1="300" x2="400" y2="360" stroke="#d1d5db" strokeWidth="2" opacity="0.3" />
          <line x1="400" y1="300" x2="400" y2="360" stroke="url(#flowGradient)" strokeWidth="2">
            <animate attributeName="stroke-dasharray" from="0,60" to="60,0" dur="2s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Top-Right to Center */}
        <g>
          <line x1="510" y1="320" x2="440" y2="380" stroke="#d1d5db" strokeWidth="2" opacity="0.3" />
          <line x1="510" y1="320" x2="440" y2="380" stroke="url(#flowGradient)" strokeWidth="2">
            <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="2.2s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Bottom-Right to Center */}
        <g>
          <line x1="480" y1="540" x2="420" y2="420" stroke="#d1d5db" strokeWidth="2" opacity="0.3" />
          <line x1="480" y1="540" x2="420" y2="420" stroke="url(#flowGradient)" strokeWidth="2">
            <animate attributeName="stroke-dasharray" from="0,170" to="170,0" dur="2.4s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Bottom-Left to Center */}
        <g>
          <line x1="320" y1="540" x2="380" y2="420" stroke="#d1d5db" strokeWidth="2" opacity="0.3" />
          <line x1="320" y1="540" x2="380" y2="420" stroke="url(#flowGradient)" strokeWidth="2">
            <animate attributeName="stroke-dasharray" from="0,170" to="170,0" dur="2.3s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Top-Left to Center */}
        <g>
          <line x1="290" y1="320" x2="360" y2="380" stroke="#d1d5db" strokeWidth="2" opacity="0.3" />
          <line x1="290" y1="320" x2="360" y2="380" stroke="url(#flowGradient)" strokeWidth="2">
            <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="2.1s" repeatCount="indefinite" />
          </line>
        </g>

        <g opacity="0.5">
          <circle cx="350" cy="150" r="3" fill="#f59e0b">
            <animate attributeName="cy" values="150;100;150" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="200" r="2.5" fill="#f97316">
            <animate attributeName="cy" values="200;150;200" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="600" cy="400" r="3" fill="#dc2626">
            <animate attributeName="cx" values="600;650;600" dur="4s" repeatCount="indefinite" begin="1s" />
            <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="1s" />
          </circle>
          <circle cx="300" cy="500" r="2.5" fill="#fb923c">
            <animate attributeName="cy" values="500;550;500" dur="3.8s" repeatCount="indefinite" begin="1.5s" />
            <animate attributeName="opacity" values="0;1;0" dur="3.8s" repeatCount="indefinite" begin="1.5s" />
          </circle>
        </g>

      </svg>
    </div>
  )
}
