import React from 'react'
import styled from '@emotion/styled'
import { val } from './variable.js'
import { motion } from 'framer-motion'
import Particles from './Particle'


const Mv = () => {
return (
    <MainView
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{
      opacity: { ease: "linear",duration: 0.3}
      }}>
        <Particles/>
        <TextArea>
          <H2
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{
            opacity: { ease: "linear",duration: 0.3}
          }}>Inclusive Design and Code</H2>
          <Text>
            緻密なDesign(設計)とセマンティックコーディング<br/>最新技術でwebサイトにもっと価値を生み出します。
          </Text>
        </TextArea>
    </MainView>
  )
}

const MainView = styled.section`
  width: 100%;
  height: min(50vh, 540px);
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${val.red};
  color: #fff;
`

const TextArea = styled(motion.div)`
  white-space: nowrap;
  text-align: center;
  transition: 1s;
  overflow: hidden;
`

const Text = styled.p`
  white-space: pre-line;
  line-height: 2em;
  font-size: ${val.s16};
  margin-bottom: 56px;
`

const H2 = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: ${val.s32};
`

export default Mv
