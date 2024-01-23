'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Time = dynamic(() => import('@/components/time'), { ssr: false })


export const Reloj = ({ time: initial }) => {
  const [time, setTime] = useState(new Date(initial))

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
      <Time time={time} />
  )
}