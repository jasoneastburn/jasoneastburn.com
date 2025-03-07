'use client'

import { Twemoji } from '@/app/components/ui/Twemoji'
import { clsx } from 'clsx'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    backDelay: 1000,
    backSpeed: 10,
    loop: true,
    stringsElement: '#typed-text',
    typeSpeed: 60,
  })
}

export function TypedText() {
  const el = useRef(null)
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (el.current) {
      typed.current?.destroy()
      typed.current = createTypedInstance(el.current)
    }
  }, [])

  return (
    <div
      className={clsx([
        'items-center gap-0.5',
        [
          '[&_.typed-cursor]:inline-block',
          '[&_.typed-cursor]:w-2',
          'sm:[&_.typed-cursor]:h-8',
          'md:[&_.typed-cursor]:h-14',
          '[&_.typed-cursor]:text-transparent',
          '[&_.typed-cursor]:bg-slate-800',
          'dark:[&_.typed-cursor]:bg-slate-100',
        ],
      ])}
    >
      <ul id="typed-text" className="hidden">
        <li>
          Welcome! <Twemoji emoji="waving-hand" size="base" />
        </li>
        <li>
          ¡Bienvenida! <Twemoji emoji="waving-hand" size="base" />
        </li>
        <li>
          Willkommen! <Twemoji emoji="waving-hand" size="base" />
        </li>
        <li>
          Добро пожаловать! <Twemoji emoji="waving-hand" size="base" />
        </li>
        <li>
          Bienvenue! <Twemoji emoji="waving-hand" size="base" />
        </li>
        <li>
          歡迎 <Twemoji emoji="waving-hand" size="base" />
        </li>
        <li>
          स्वागत <Twemoji emoji="waving-hand" size="base" />
        </li>
        <li>
          مرحباً <Twemoji emoji="waving-hand" size="base" />
        </li>
        <li>
          স্বাগত <Twemoji emoji="waving-hand" size="base" />
        </li>
        <li>
          Boas-vindas! <Twemoji emoji="waving-hand" size="base" />
        </li>
        <li>
          خوش آمدید <Twemoji emoji="waving-hand" size="base" />
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
