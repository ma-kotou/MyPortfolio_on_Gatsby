import React from 'react'
import Layout from '../components/Layout'
import Mv from '../components/Mv'
import Seo from '../components/seo'
import Skill from '../components/skill'
import Works from '../components/works'
import History from '../components/history'

const homePage = (props) => {

  return (
        <Layout>
          <Mv/>
          <Skill/>
          <Works/>
          <History/>
        </Layout>
    );
};

export const Head = () => {
  return (
    <Seo/>
  )
}

export default homePage;
