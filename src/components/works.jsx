import React from 'react'
import Layout from './Layout'
import Website from "./website"
import AppArchive from "./appArchive"
import Seo from "./seo"
import Container from './Container';

const Works = () => {
  return(
    <>
      <Container>
      <Website/>
      </Container>
      <Container>
      <AppArchive/>
      </Container>
    </>
  )
}

export const Head = () => {
  return (
    <Seo/>
  )
}

export default Works
