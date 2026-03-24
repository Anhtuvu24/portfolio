'use client'
import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let meteors: Meteor[] = []
    let lastMeteor = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Generate stars
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
      color: Math.random() > 0.7
        ? `rgba(147,174,240,`
        : `rgba(199,212,248,`,
    }))

    interface Meteor {
      x: number; y: number; vx: number; vy: number
      len: number; alpha: number; life: number
    }

    function spawnMeteor(): Meteor {
      const angle = (Math.random() * 20 + 20) * (Math.PI / 180)
      const speed = Math.random() * 8 + 6
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * (window.innerHeight * 0.4),
        vx: Math.cos(angle) * speed * -1,
        vy: Math.sin(angle) * speed,
        len: Math.random() * 100 + 60,
        alpha: 1,
        life: 1,
      }
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach(s => {
        s.alpha = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `${s.color}${s.alpha})`
        ctx.fill()
      })

      // Spawn meteors every ~5s
      if (t - lastMeteor > 5000 && Math.random() > 0.5) {
        meteors.push(spawnMeteor())
        lastMeteor = t
      }

      // Draw meteors
      meteors = meteors.filter(m => m.life > 0)
      meteors.forEach(m => {
        m.x += m.vx
        m.y += m.vy
        m.life -= 0.015
        const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 10, m.y - m.vy * 10)
        grad.addColorStop(0, `rgba(255,255,255,${m.life})`)
        grad.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.beginPath()
        ctx.moveTo(m.x, m.y)
        const angle = Math.atan2(m.vy, m.vx)
        ctx.lineTo(m.x - Math.cos(angle) * m.len, m.y - Math.sin(angle) * m.len)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.stroke()
      })

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} id="stars-canvas" />
}
