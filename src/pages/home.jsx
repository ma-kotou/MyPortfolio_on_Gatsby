import React from 'react'
import Layout from '../components/Layout'
import Mv from '../components/Mv'
import Seo from "../components/seo"
import ThisSite from '../components/ThisSite'
import Container from '../components/Container';

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
