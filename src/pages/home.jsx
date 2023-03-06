import React from 'react'
import Layout from '../components/Layout'
import Mv from '../components/Mv'
import Seo from "../components/seo"

const homePage = (props) => {

  return (
        <Layout>
          <Mv/>
        </Layout>
    );
};

export const Head = () => {
  return (
    <Seo/>
  )
}

export default homePage;
