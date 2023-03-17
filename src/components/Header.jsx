import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { val } from './variable.js'
import AniLink from "gatsby-plugin-transition-link/AniLink"
//import { StaticImage } from 'gatsby-plugin-image'
//import { motion } from "framer-motion"
import styled from '@emotion/styled';
//import Navigation from './Navigation'

const Header = () => {
  return(
    <Container>
      <Logo>
        <Link to="/home">
          <H2>Portfolio</H2>
        </Link>
      </Logo>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${val.black};
  padding: 0 120px 0 16px;
  box-shadow:${val.shadow};
  height: 72px;
  .gatsby-image-wrapper{
    width: 32px;
    height: 32px;
    display: block;
    padding-right: ${val.s16};
  }
`
const Logo = styled.div`
  a{
    display: flex;
    justify-content: start;
    align-items: center;
    div{
      margin-right:1rem;
    }
  }
`
const H2 = styled.h2`
  font-size: ${val.s24};
  transition: 1s;
  &:hover{
    color: ${val.mint};
  }
`
export default Header
