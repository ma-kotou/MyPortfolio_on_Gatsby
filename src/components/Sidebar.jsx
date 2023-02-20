import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { val } from './variable.js'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from "framer-motion"
import styled from '@emotion/styled';

const Sidebar = () => {
  return(
    <SideContainer>
      <Logo>
        <Link to="/home">
          <StaticImage
            src="../images/main-icon.png"/>
          <H2>M/K Portfolio</H2>
        </Link>
      </Logo>
    </SideContainer>
  )
}

const SideContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: calc(100% - 34px);
  min-height: calc(100vw - 34px);
  border-right: 1px solid ${val.lightGray};
  color: ${val.black};
  .gatsby-image-wrapper{
    width: 32px;
    height: 32px;
    display: block;
    padding-right: ${val.s16};
  }
`
const Logo = styled.div`
  padding: 24px 0 0;
  a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const H2 = styled.h2`
  writing-mode: vertical-lr;
  font-size: ${val.s16};
  padding-top: 16px;
  transition: 1s;
  &:hover{
    color: ${val.mint};
  }
`
export default Sidebar
