import * as React from 'react';
import Layout from './layout';
import Seo from "./seo"
import { motion } from "framer-motion"
import styled from '@emotion/styled';
import { val } from './variable.js';
import Title from "./Title"
import Container from './Container'

const History = () => {

  return (
        <Container>
        <Title text="History"/>
        <Section
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            opacity: { ease: "linear",duration: 1}
            }}
          >
        <Block>
          <H5>1998</H5>
          <ListBlock>
            <List>初期HTML</List>
            <Text>自宅にあった参考書を手掛かりにchatやBBS,yahooオークションを始める。
              お下がりの古いデスクトップPCのためフリーズが頻繁に起きる為、分解して清掃したり対処法を検索しレジストリを弄る。
              photoshop,illustratorも父の仕事の関係で自宅にあった為、使用を始める。
            </Text>
          </ListBlock>
        </Block>
        <Block>
          <H5>1999</H5>
          <ListBlock>
            <List>初めてのwebサイト制作</List>
            <Text>
              当時ハマっていたバンドのファンクラブページを制作。
              黒歴史となる個人サイトを量産。高校卒業,就職後は相変わらずpcは大好きだったものの、webに関わる仕事でもなく
              制作活動はあまり行っておらずBlog運営のみ。
            </Text>
          </ListBlock>
        </Block>
        <Block>
          <H5>2016</H5>
          <ListBlock>
            <List>デジタルコンテンツクリエーター育成講座 | 受講・終了</List>
            <Text>
              出産・育児を得て環境が大きく変化し手に職をつけたいと思った時に一番に思い浮かんだのがwebでした。
              就業しながら、週に一度の福岡県・福岡市主体の講座にてHTML5,CSS,デザインについて6ヶ月間で学び直しました。
            </Text>
          </ListBlock>
        </Block>
        <Block>
          <H5>2017</H5>
          <ListBlock>
            <List>デジタルハリウッド | ママグロースハッカー養成講座受講</List>
            <Text>
              コーディングはできるがデザインが全くできない状況だった為学びたりず
              福岡デジタルハリウッド校の選考有りの同講座にて特待生に選ばれる。
              リクルート・ランサーズ・KAIZEN PLATFORM協賛の講座で、
              基本的なweb制作、デザインの基礎からディレクション・UI設計・マーケティング・webサイトの改善法まで学ぶ。
              フリーランスとしてコーディング・デザイン活動開始。
            </Text>
          </ListBlock>
        </Block>
        <Block>
          <H5>2018</H5>
          <ListBlock>
            <List>デジタルハリウッド | ママグロースハッカー養成講座修了</List>
            <Text>
              １年半の講座を終了。実際に企業案件を請け負いながらの受講の為学びも多かった。
              在学中の広告デザインが「とらばーゆ」に一面掲載される。
            </Text>
            <List>アクティネットワーク社 | webディレクターとして就業</List>
            <Text>
              webディレクターとしての配置で自社案件の運営管理業務を経験。
              デザイン・コーディングも出来ることからバナーデザインやキャンペーンページ制作・自社サービスサイトの制作にも
              従事する。
            </Text>
          </ListBlock>
        </Block>
        <Block>
          <H5>2020</H5>
          <ListBlock>
            <List>制作部署へ移動</List>
            <Text>
              インハウスのみならず、様々な業種の制作に携わりたく制作部署へ移動。
              今までのインハウス案件も継続して手掛けながら主に外注クライアントのweb制作を手掛ける。
              後任への指導、ディレクション・デザイン・コーディング、クライアントとの日々のやりとりまで一貫して従事。
              外注制作部門が年数も浅く制作フローが出来ていなかったので積極的に提案・改善案を出していました。
            </Text>
          </ListBlock>
        </Block>
        <Block>
          <H5>2023</H5>
          <ListBlock>
            <List>アクティネットワーク社退社</List>
            <Text>
              制作部署の閉鎖・別グループ会社で広告代理店として発足決定。昇給・昇格での転籍を打診頂いていましたが上長と面談を重ねた結果辞退し退社。
            </Text>
          </ListBlock>
        </Block>
        </Section>
        </Container>
  );
};

const Section = styled(motion.section)`
  max-width: 960px;
  margin:  ${val.s88} auto;
`

const Block = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${val.blackRGBA};
`
const H5 = styled.h5`
  font-size: ${val.s56};
  color: ${val.black};
  opacity: 0.2;
  width: 27.589%;
  margin: 0;
  padding: 0;
`

const ListBlock = styled.ul`
  display: flex;
  width: 72.411%;
  margin: 0;
  align-items: center;
  flex-wrap: wrap;
  padding:  ${val.s56} 0;
  border-left: 1px solid ${val.blackRGBA};
`
const List = styled.li`
  font-weight: bold;
  list-style-position: inside;
  margin-left: -2px;
  margin-bottom: 1rem;
`
const Text = styled.p`
  display: block;
  padding: 0;
  margin: 0 0 ${val.s32} 10%;
`

export const Head = () => {
  return (
    <Seo
      title= "portfolio| history"
    />
  )
}

export default History;
