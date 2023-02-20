import React from 'react'
import Layout from '../components/Layout'
import Website from "../components/website"
import AppArchive from "../components/appArchive"
import Seo from "../components/seo"
import Container from '../components/Container';

const Works = () => {
  return(
    <Layout>
    <Container>
      <Website/>
    </Container>
    <Container>
      <AppArchive/>
    </Container>
  </Layout>
  )
}

export const Head = () => {
  return (
    <Seo/>
  )
}

export default Works
