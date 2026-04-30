"use client"
import { useEffect } from 'react'

export default function DevHtmlObserver() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return

    const el = document.documentElement
    if (!el) return

    const obs = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes') {
          const name = (m as MutationRecord).attributeName
          console.group('[DevHtmlObserver] html attribute changed')
          console.log('attributeName:', name)
          console.log('current value:', el.getAttribute(name || '') )
          console.trace()
          console.groupEnd()
        }
      }
    })

    obs.observe(el, { attributes: true, attributeOldValue: true })

    // Log initial attributes snapshot
    console.info('[DevHtmlObserver] initial html attributes:', Array.from(el.attributes).map(a => ({ name: a.name, value: a.value })))

    return () => obs.disconnect()
  }, [])

  return null
}
