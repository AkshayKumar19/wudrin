"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-xl mx-auto">
      <CountdownItem value={timeLeft.days} label="Days" />
      <CountdownItem value={timeLeft.hours} label="Hours" />
      <CountdownItem value={timeLeft.minutes} label="Minutes" />
      <CountdownItem value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}

function CountdownItem({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="bg-white border rounded-lg p-3 md:p-4 w-full text-center shadow-md"
        animate={{ scale: [1, value % 10 === 0 ? 1.03 : 1] }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          key={value}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-bold text-amber-700"
        >
          {value}
        </motion.span>
      </motion.div>
      <span className="text-xs md:text-sm mt-2 text-gray-600">{label}</span>
    </div>
  )
}

