'use client'

import { Image } from '@/app/components/ui/Image'
import { SITE_METADATA } from '@/data/site-metadata'
import { clsx } from 'clsx'
import React, { useCallback, useEffect, useRef, useState } from 'react'

export function ProfileCard() {
  const ref = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || window.innerWidth < 1280) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY

    const rotateX = (deltaY / (rect.height / 2)) * 15
    const rotateY = (deltaX / (rect.width / 2)) * -15

    setRotation({ x: rotateX, y: rotateY })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setRotation({ x: 0, y: 0 })
  }, [])

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    currentRef.addEventListener('mousemove', handleMouseMove)
    currentRef.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      currentRef.removeEventListener('mousemove', handleMouseMove)
      currentRef.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return (
    <div
      className="z-10 mb-8 scale-100 transition-all duration-200 ease-out hover:z-50 md:mb-0 md:hover:scale-[1.15]"
      style={{ perspective: '600px' }}
      ref={ref}
    >
      <div
        style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
        className={clsx(
          'flex flex-col overflow-hidden transition-all duration-200 ease-out md:rounded-lg',
          'shadow-demure dark:bg-dark dark:shadow-mondegreen bg-white',
          'outline outline-1 outline-gray-100 dark:outline-gray-600'
        )}
      >
        <Image
          src={SITE_METADATA.siteLogo}
          alt={SITE_METADATA.title}
          width={550}
          height={350}
          style={{
            objectPosition: '50% 15%',
            aspectRatio: '383/240',
          }}
          loading="eager"
        />
        <span className="h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
      </div>
    </div>
  )
}
