import React, { children } from 'react'
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
  padding: 120px 0 88px;
  position: relative;
`
export default Container
