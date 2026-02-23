"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const About = () => {
    const {data: session} = useSession()
  return (
    <div>This is about page</div>
  )
}

export default About