import { useCallback } from 'react'

export function useMagnetic() {
  const onMouseMove = useCallback((e) => {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.2
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3
    btn.style.transform = `translate(${x}px, ${y}px) translateY(-2px)`
  }, [])

  const onMouseLeave = useCallback((e) => {
    e.currentTarget.style.transform = ''
  }, [])

  return { onMouseMove, onMouseLeave }
}
