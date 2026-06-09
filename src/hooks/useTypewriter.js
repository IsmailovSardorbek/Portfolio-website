import { useEffect, useState } from 'react'

export function useTypewriter(phrases, typeSpeed = 80, deleteSpeed = 35, pause = 1800) {
  const [text, setText] = useState('')

  useEffect(() => {
    let phraseIndex = 0
    let charIndex = 0
    let deleting = false
    let timeoutId

    const tick = () => {
      const phrase = phrases[phraseIndex % phrases.length]

      if (!deleting) {
        charIndex += 1
        setText(phrase.slice(0, charIndex))
        if (charIndex === phrase.length) {
          deleting = true
          timeoutId = setTimeout(tick, pause)
          return
        }
        timeoutId = setTimeout(tick, typeSpeed)
      } else {
        charIndex -= 1
        setText(phrase.slice(0, charIndex))
        if (charIndex === 0) {
          deleting = false
          phraseIndex += 1
        }
        timeoutId = setTimeout(tick, deleteSpeed)
      }
    }

    tick()
    return () => clearTimeout(timeoutId)
  }, [phrases, typeSpeed, deleteSpeed, pause])

  return text
}
