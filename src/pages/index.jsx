import React from 'react'
import { motion } from "framer-motion"
import styled from '@emotion/styled'
import Seo from "../components/seo"
import { navigate } from 'gatsby'
import {val} from "../components/variable"


  setTimeout(() => {
    navigate("/home");
  }, 4 * 1000);

const indexPage = () => {

  return (
        <Wrap>
          <H1
            initial={{width: 0, opacity: 0}}
            animate={{width: "100%", opacity: 1}}
            transition={{
              opacity: { ease: "linear",duration: 2},
              layout: {ease: "linear"},duration: 5
            }}
            exit={{opacity:0}}
            >
            Portfolio</H1>
          <H2
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              opacity: { ease: "linear",duration: 5}
            }}
          >Mai Kotou</H2>
        </Wrap>
    );
};


const Wrap = styled(motion.main)`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`
const H1 = styled(motion.h1)`
  font-size: ${val.s64};
  font-weight: bold;
  color: #fff;
  letter-spacing: .3em;
  margin-bottom: 24px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
`
const H2 =styled(motion.h2)`
  font-size: ${val.s24};
  color: #fff;
  font-weight: normal;
  letter-spacing: .5em;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
`

export const Head = () => {
  return (
    <Seo/>
  )
}

export default indexPage;
