import { useEffect, useRef } from 'react'

export function Cursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const trail = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    const trailEl = trailRef.current
    if (!cursor || !trailEl) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    document.addEventListener('mousemove', onMove)

    let rafId
    const animate = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.15
      trail.current.y += (pos.current.y - trail.current.y) * 0.15
      trailEl.style.left = `${trail.current.x}px`
      trailEl.style.top = `${trail.current.y}px`
      rafId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-trail" ref={trailRef} />
    </>
  )
}
