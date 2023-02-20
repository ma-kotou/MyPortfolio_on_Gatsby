import React, { children } from 'react'
import { motion } from "framer-motion"
import styled from '@emotion/styled';


const Container = ({children}) => {
  return(
  <Section>
    {children}
  </Section>
  )
}


const Section = styled.section`
  width: 1080px;
  margin: 0 auto;
  padding: 120px 0 120px;
`
export default Container
