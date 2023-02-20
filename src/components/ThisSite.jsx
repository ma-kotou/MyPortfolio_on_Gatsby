import React from 'react';
import Title from './Title.jsx';
import styled from '@emotion/styled';

const ThisSite = (props) => {

  return (
    <>
      <Title text="This site"/>
        <Text>
          このサイトはGatsbyにてフルスタックで制作致しました。
          cssはEmotion,アニメーションはframer-motionを使用しています。
          各実績のページはMDXにて記載し自動でページ化させています。
        </Text>
    </>
  )
}

const Text = styled.p`
  max-width: 1080px;
  margin: 0 auto 72px;
  line-height: 2em;
  padding-bottom: 104px;
  border-bottom: 1px solid #ddd;
`


export default ThisSite;
