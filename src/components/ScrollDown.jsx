import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const ScrollDown = () => {
  return(
    <Span
        animate={{
        opacity: 1}}
        transition={{
        duration: 2,
        times: [0,0.2,0.5,0.8,1],
        repeat: Infinity,
      }}>
      scroll
      <Border/>
    </Span>
  )
}


const Span = styled(motion.span)`
  display: block;
  transform: rotate(-90deg);
  position: sticky;
  max-width: 88px;
  bottom: 160px;
  z-index: 999999;
  letter-spacing: .3em;
  text-align: right;
  opacity: 0;
`

const Border = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background: #222;
`

export default ScrollDown
