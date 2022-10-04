import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Content } from '../../Components/nanalilContents';
import WorkContents from '../../Components/workContents';
import { ContentImg } from '../../Components/workImages';
import WorkTemplate from '../../Components/workTemplate';
import { device, lightTheme } from '../../theme';

const IMG_BASE_URL = '../../images/works/nanalil';

const ContentArea = styled.div`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
`;

const Image = styled.img`
    margin: ${props => props.margin || '0 auto'};
    width: 100%;
    max-width: ${props => props.type === 'inner' && lightTheme.maxWidth};
    height: auto;
    display: block;
`;

const Section = styled.div`
    width:100%;
    padding: 40px 0 0;
    

    @media ${device.laptop} {
        background: url(${props => props.bgUrl}) no-repeat center bottom;
        padding:160px 0 200px;
    }
`;

const Article = styled(ContentArea)`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    img {
        padding: 20px 0;
    }

    @media ${device.laptop} {
        flex-direction: row;
        img {
            padding:0px;
        }
    }
`;

const TextArea = styled.div`
    padding: 16px 40px;
`;

const Title = styled.h4`
    font-family: 'gmarketL';
    font-size: 32px;
    line-height: 48px;
    color: #333;

    strong {
        font-family: 'gmarketB';
        color: #44BBFF;
        display: block;
    }

    @media ${device.laptop} {
        font-size: 70px;
        line-height: 96px;
    }
`;

const Text = styled.p`
    margin-top:24px;
    font-size:18px;
    line-height:32px;

    strong {
        font-weight: 700;
    }

    @media ${device.laptop} {
        margin-top:48px;
        font-size:22px;
        line-height:36px;
    }
`;

const ImgArea = styled.div`
    padding: 16px 40px;
`;

const Header = styled.div`
    background: url(${props => props.bgUrl}) center top;
    background-size: cover;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 150px 0;

    h4 {
        text-align: center;
        color: #fff;

        strong {
            color: #fff;
        }
    }
`;

const SectionName = styled.p`
    font-family: 'gmarketL';
    display: inline-block;
    border-radius: 24px;
    width: auto;
    background: #fff;
    color: #44BBFF;
    padding: 8px 40px;
    margin-bottom: 16px;
`;

const WhyArea = styled.div`
    background: #F6F6FB;
    margin:0 40px 150px;
    width: 100%;
    border-radius: 40px;
    padding: 120px 80px;
`;

const SectionNameArea = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
`;

const SectionCnt = styled.p`
    font-size:18px;
    line-height:24px;
    padding: 8px;
    font-family: 'gmarketB';
    background: #44BBFF;
    color: #fff;
    width: 40px;
    border-radius: 50%;
    text-align: center;
`; 

const SectionTitle = styled.p`
    font-family: 'gmarketB';
    color: #44BBFF;
    font-size: 24px;
`;

const DataArea = styled.div`
    background: #fff;
    box-shadow: 0px 4px 16px rgba(79, 105, 198, 0.25);
    border-radius: 16px;
    padding: 80px 40px 0;
    margin-top: 80px;
    overflow: hidden;
`;

const DataTitle = styled.p`
    font-family: 'gmarketB';
    font-size: 40px;
    line-height: 56px;
    text-align: center;
    color: #333;
    padding-bottom: 80px;
`;

const DataInfo = styled.div`
    display: flex;
    gap: 20px;
`;

const DataGraph = styled.div`
    width: 100%;
`;

const DataTextArea = styled.div`
    width: 100%;
`;

const DataText = styled.p`
    white-space: pre-line;
    margin-bottom:64px;
`;

const DataNews = styled.div`
    margin-top: 20px;
    background: #F6F6FB;
    border-radius: 16px;
    padding: 20px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NewsTextWrap = styled.div``;

const NewsTitle = styled.p`
    font-size: 20px;
    font-family: 'gmarketM';
    color: #45528B;
`;

const NewsSource = styled.p`
    font-family: 'gmarketL';
    color: #45528B;
`;

const NewsLink = styled(Link)`
    padding: 8px 16px;
    font-size: 14px;
    line-height: 24px;
    border-radius: 20px;
    color: #45528B;
    border: 1px solid #45528B;
`;

const DataResult = styled.p`
    text-align: center;
    color: #fff;
    background: #45528B;
    padding: 40px;
    width: calc(100% + 80px);
    margin-left: -40px;
    margin-top: 80px;
    white-space: pre-line;
    font-family: 'gmarketB';
    font-size: 32px;
    line-height: 56px;
`;

const EmotionChartWrap = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 160px;

    div {
        width: 100%;
    }
`;

const SectionLine = styled.img`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 150px auto;
    display: block;
`;

 const ResearchArea = styled.div``;

 const RSHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
 `;

 const RSIcon = styled.div`
    margin-bottom: 20px;
`;

 const RSTitle = styled.p`
    font-size: 56px;
    line-height: 72px;
    font-family: 'gmarketB';
    color: #5D606C;
`;

 const RSTitleEn = styled.p`
    margin-top: 8px;
    font-size: 28px;
    line-height: 40px;
    font-family: 'gmarketL';
    color: #5D606C;
`;


const RSDiscoverWrap = styled.div`
    background: #F8F9FF;
    padding: 80px 0;
`;

const RSSection = styled.div``;

const RSSTitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RSSName = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const RSSNumber = styled.p`
    color: #fff;
    background: #FCE671;
    font-family: 'gmarketB'
    font-size: 14px;
    line-height: 20px;
    padding: 8px;
    text-align: center;
    border-radius: 18px;
    font-weight: 700;
`;

const RSSNTitle = styled.div`
    color: #FCE671;
    font-family: 'gmarketB';
`;

const RSSTitle = styled.div`
    font-family: 'gmarketB';
    color: #333;
    font-size: 28px;
    line-height: 36px;
    margin-top: 16px;
`;

const RSSImage = styled.img`
    display: block;
    width: auto;
    margin: ${props => props.margin};
`;

const RSSResultText = styled.p`
    color: #fff;
    font-size: 32px;
    line-height: 52px;
    background: #45528B;
    border-radius: 16px;
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    padding: 40px 0;
    text-align: center;
    font-family: 'gmarketL';
    margin: 80px auto 40px;

    strong {
        font-family: 'gmarketB';
    }
`;

const RSSSubTitle = styled.p`
    font-weight: 900;
    color: #5D606C;
    font-size: 22px;
    line-height:40px;
    text-align: center;
    margin-top: 64px;
`;

const RSSSSubText = styled.p`
    color: #8E8E9B;
    text-align: center;
    margin-top: 16px;

    strong {
        font-weight: 700;
        color: #5D606C;
    }
`;

const flowAnimate = keyframes`
    from {
        transform: translateX(-50%);
    }
    to {
        transform: translateX(0%);
    }
`;

const flowAnimate2 = keyframes`
from {
    transform: translateX(0%);
}
to {
    transform: translateX(-50%);
}
`;

const KeywordArea = styled.div`
    padding: 120px 0;
`;
const KeywordSlid = styled.div`
    overflow: hidden;
`;
const Keyword = styled.img`
    display: block;
    animation: ${props => props.align === 'right' ? flowAnimate2 : flowAnimate} 120s linear infinite;
`;
const KeywordText = styled.p`
    max-width: ${lightTheme.maxWidth};
    margin: 32px auto 0;
    color: #8E8E9B;
    
    strong {
        font-weight: 700;
        color: #5D606C;
    }
`;

const RSSText = styled.p`
    font-size: 22px;
    line-height: 36px;
    color: #8E8E9B;
    margin-top: 32px;
    text-align: center;

    strong {
        font-weight: 700;
        color: #5D606C;
    }
`;

const PersonaWrap = styled.div`
    display: flex;
    gap: 64px;
    margin-top: 80px;
    img {
        width: auto;
    }
`;



export default function Nanalil () {
    return (
        <>
            <WorkTemplate
                mainTitle={`나의 날씨 일기\n무드 트레커형 다이어리 앱`}
                client={'개인작업'}
                workArea={'기획, 디자인'}
                tools={['ps', 'ai', 'figma', 'xd']}
                bannerImg={'nanalil/banner.png'}
                contents={
                    <>
                        {/* <Content
                            bgUrl={'intro/background.png'}
                            title={{top:'감정 날씨를 기록하는', bottom:'나날일 앱 디자인'}}
                            text={['나날일은 감정 표현에 어려움을 겪는 현대인들을 위해,', 'enter', '날씨로 감정을 기록하는 ','boldStart', '무드트레커형 다이어리 앱', 'boldEnd', '입니다.']}
                            src={'intro/appvisual.png'}
                        /> */}
                        <Section bgUrl={require('../../images/works/nanalil/intro/background.png')}>
                            <Article>
                                <TextArea>
                                    <Title>감정 날씨를 기록하는 <strong>나날일 앱 디자인</strong></Title>
                                    <Text>나날일은 감정 표현에 어려움을 겪는 현대인들을 위해,<br />날씨로 감정을 기록하는 <strong>'무드트레커형 다이어리 앱'</strong>입니다.</Text>
                                </TextArea>
                                <ImgArea><Image src={require(`../../images/works/nanalil/intro/appvisual.png`)} /></ImgArea>
                            </Article>
                        </Section>

                        <Section>
                            <Header bgUrl={require('../../images/works/nanalil/why/header.png')}>
                                <SectionName>Background</SectionName>
                                <Title>왜 만들게 됐어?<strong>나날일 제작 배경</strong></Title>
                            </Header>
                            <Article style={{background:'#A8DFFF', maxWidth: '100%'}}>
                                <WhyArea>
                                    <TextArea>
                                        <SectionNameArea>
                                            <SectionCnt>01</SectionCnt>
                                            <SectionTitle>Background</SectionTitle>
                                        </SectionNameArea>

                                        <Title>매년 6%씩 증가하는<strong>기분장애로 고통받는 현대인</strong></Title>
                                        <Text>현대인들에게 솔직한 감정 표현은 매우 중요합니다.<br />나날일은 <strong>감정을 스스로 되돌아보고 기록함으로써 자신에게 더 솔직해질 수 있도록 도움</strong>을 주고자 합니다.</Text>
                                    </TextArea>

                                    <DataArea>
                                        <DataTitle>우리나라 기분장애 진료 인원</DataTitle>
                                        <DataInfo>
                                            <DataGraph>
                                                <Image src={require('../../images/works/nanalil/why/graph.png')} />
                                            </DataGraph>
                                            <DataTextArea>
                                                <DataText>
                                                    {`심리상담소 언데씰 대표 유영우 상담사님의 말에 따르면 감정을 억압하고 왜곡하는 행동은
                                                    우울장애와 외상 후 스트레스 장애, 소화불량과 편두통 등을 발생시킨다고 하는데요. 

                                                    글쓰기와 건강의 관계를 연구하는 ‘제임스 페니 베이커’에 따르면
                                                    자신의 감정에 대한 솔직한 인정과 표현만으로 정신적/신체적 회복을 이끌어 낼 수 있다고 해요!`}
                                                </DataText>
                                                <DataNews>
                                                    <NewsTextWrap>
                                                        <NewsTitle>감정 왜곡에 빠진 현대인의 삶, 억압에서 벗어나기 위한 방법은?</NewsTitle>
                                                        <NewsSource>출처. 메디컬투데이</NewsSource>
                                                    </NewsTextWrap>
                                                    <NewsLink to=''>기사 보러가기</NewsLink>
                                                </DataNews>
                                                <DataNews>
                                                    <NewsTextWrap>
                                                        <NewsTitle>국민건강보험공단 조사결과</NewsTitle>
                                                        <NewsSource>출처. 동아사이언스</NewsSource>
                                                    </NewsTextWrap>
                                                    <NewsLink to=''>기사 보러가기</NewsLink>
                                                </DataNews>
                                            </DataTextArea>
                                        </DataInfo>

                                        <DataResult>
                                            {`2020년 우울증과 같은 기분장애 질환 환자수가 100만명이 넘었습니다.
                                            나의 감정을 기록하고 알아차림으로써 우리의 마음을 챙겨보는 건 어떨까요?`}
                                        </DataResult>
                                    </DataArea>


                                    <EmotionChartWrap>
                                        <TextArea>
                                            <SectionNameArea>
                                                <SectionCnt>02</SectionCnt>
                                                <SectionTitle>Background</SectionTitle>
                                            </SectionNameArea>

                                            <Title>존 가트맨 박사의<strong>감정날씨차트</strong></Title>
                                            <Text>존 가트맨 박사의 ‘내 아이를 위한 감정코칭’에서는<br />
                                                <strong>감정 표현이 서툰 아이를 위한 코칭 방법으로 감정날씨차트</strong>를 이용하였는데요.<br />
                                                이를 활용하여 자신의 감정 에너지와 긍정적인 정도를 기록하고 표현함으로써<br />
                                                <strong>자신의 평균적인 감정 에너지의 방향을 파악</strong>할 수 있습니다.
                                            </Text>
                                        </TextArea>
                                        <Image src={require('../../images/works/nanalil/why/chart.png')} />
                                    </EmotionChartWrap>
                                </WhyArea>
                            </Article>
                        </Section>



                        <Section style={{padding:0}}>
                            <Header style={{padding:0}}>
                                <SectionName style={{background:'#44BBFF', color:'#fff'}}>Design Process</SectionName>
                                <Title style={{color:'#333'}}>왜 만들게 됐어?<strong style={{color:'#44BBFF'}}>나날일 제작 배경</strong></Title>
                            </Header>
                            <Article style={{marginTop: '80px'}}>
                                <Image src={require('../../images/works/nanalil/process/dublediamond.png')} />
                            </Article>
                        </Section>

                        <SectionLine src={require('../../images/works/nanalil/line.png')} />

                        <ResearchArea>
                            <RSHeader>
                                <RSIcon><Image src={require('../../images/works/nanalil/discover/research_icon.png')} /></RSIcon>
                                <RSTitle>조사단계</RSTitle>
                                <RSTitleEn>Discover</RSTitleEn>
                            </RSHeader>

                            <RSDiscoverWrap>
                                <RSSection>
                                    <RSSTitleWrap>
                                        <RSSName>
                                            <RSSNumber>01</RSSNumber>
                                            <RSSNTitle>Discover</RSSNTitle>
                                        </RSSName>
                                        <RSSTitle>사용자 설문조사</RSSTitle>
                                    </RSSTitleWrap>

                                    <RSSImage margin='80px auto 0' src={require('../../images/works/nanalil/discover/research_pain.png')} />
                                    <RSSImage margin='120px auto 0' src={require('../../images/works/nanalil/discover/research_result.png')} />
                                    <RSSResultText>
                                        다이어리 작성자 중 <strong>여성의 80%는 다이어리 앱 이용 경험</strong>이 있으며<br />
                                        그 중 <strong>58%는 다이어리 앱 이용을 중단</strong>하였습니다.   
                                    </RSSResultText>
                                    <RSSImage margin='40px auto 0' src={require('../../images/works/nanalil/discover/research_solution.png')} />
                                </RSSection>

                                <RSSImage margin='120px auto' src={require('../../images/works/nanalil/discover/line.png')} />

                                <RSSection>
                                    <RSSTitleWrap>
                                        <RSSName>
                                            <RSSNumber>02</RSSNumber>
                                            <RSSNTitle>Discover</RSSNTitle>
                                        </RSSName>
                                        <RSSTitle>경쟁사 조사 (와디즈 / 앱)</RSSTitle>
                                    </RSSTitleWrap>

                                    <RSSSubTitle>01. 와디즈 다이어리 키워드 조사</RSSSubTitle>
                                    <RSSSSubText>와디즈에서 다이어리 키워드를 검색하여 달성률 500% 이상 판매 금액 500만원 이상의 상품을 기준으로 선정하였습니다.<br />
                                    해당 상품들을 보며 기존 다이어리와의 차별점 / 사용자들의 니즈를 조사했습니다.</RSSSSubText>
                                    <RSSImage margin='0 auto' src={require('../../images/works/nanalil/discover/wadiz_research.png')} />
                                    <RSSImage margin='40px auto 0' src={require('../../images/works/nanalil/discover/wadiz_solution.png')} />

                                    <RSSSubTitle style={{marginTop: '120px'}}>02. 다이어리 앱 조사</RSSSubTitle>
                                    <RSSSSubText><strong>설문조사 결과 가장 많이 사용하는 다이어리 앱 3종</strong> (Mooda, Daily Note, Good Note)과<br />
                                    <strong>앱스토어 검색 상위 노출 2종</strong> (해마일기, 다욜)을 기준으로 조사를 실시하였습니다.</RSSSSubText>
                                    <RSSImage margin='80px auto 0' src={require('../../images/works/nanalil/discover/otherapp_research.png')} />
                                    <RSSImage margin='80px auto 0' src={require('../../images/works/nanalil/discover/otherapp_solution.png')} />
                                </RSSection>
                            </RSDiscoverWrap>

                            <KeywordArea>
                                <KeywordSlid>
                                    <Keyword align='right' src={require('../../images/works/nanalil/discover/keyword1.png')} />
                                    <Keyword src={require('../../images/works/nanalil/discover/keyword1.png')} />
                                    <Keyword align='right' src={require('../../images/works/nanalil/discover/keyword2.png')} />
                                    <Keyword src={require('../../images/works/nanalil/discover/keyword2.png')} />
                                </KeywordSlid>
                                <KeywordText>
                                * Sometrend의 최근 한 달 SNS 언급 키워드를 분석하여 <strong>다이어리에 대한 사람들의 감정 / 느낌을 파악</strong>하고자 하였습니다.<br />
                                키워드 정확성을 위해 광고성 / 연예인 / 이벤트성 키워드를 제외하였습니다.
                                </KeywordText>
                            </KeywordArea>

                            <RSDiscoverWrap>
                                <RSSection>
                                    <RSSTitleWrap>
                                        <RSSName>
                                            <RSSNumber>01</RSSNumber>
                                            <RSSNTitle>Discover</RSSNTitle>
                                        </RSSName>
                                        <RSSTitle>사용자 설문조사</RSSTitle>
                                    </RSSTitleWrap>

                                    <RSSImage margin='80px auto 0' src={require('../../images/works/nanalil/discover/research_pain.png')} />
                                    <RSSImage margin='120px auto 0' src={require('../../images/works/nanalil/discover/research_result.png')} />
                                    <RSSResultText>
                                        다이어리 작성자 중 <strong>여성의 80%는 다이어리 앱 이용 경험</strong>이 있으며<br />
                                        그 중 <strong>58%는 다이어리 앱 이용을 중단</strong>하였습니다.   
                                    </RSSResultText>
                                    <RSSImage margin='40px auto 0' src={require('../../images/works/nanalil/discover/research_solution.png')} />
                                </RSSection>

                                <RSSImage margin='120px auto' src={require('../../images/works/nanalil/discover/line.png')} />

                                <RSSection>
                                    <RSSTitleWrap>
                                        <RSSName>
                                            <RSSNumber>03</RSSNumber>
                                            <RSSNTitle>Discover</RSSNTitle>
                                        </RSSName>
                                        <RSSTitle>S-O-R 모델</RSSTitle>
                                        <RSSText><strong>사용자의 감정을 파악</strong>하기 위해 매러비안과 제임스 러셀의 S-O-R 모델을 채택하여<br />
                                        <strong>설문조사를 토대로 가설을 설정</strong>하였습니다.</RSSText>
                                    </RSSTitleWrap>

                                    <RSSImage margin='64px auto 0' src={require('../../images/works/nanalil/discover/sor_research.png')} />
                                    <RSSImage margin='64px auto 0' src={require('../../images/works/nanalil/discover/sor_research2.png')} />

                                    <RSSResultText>
                                        귀찮음과 두려움이라는 벽을 넘어<br />
                                        <strong>당신의 삶을 균형 있게 기록할 수 있도록!</strong>
                                    </RSSResultText>

                                    <RSSImage margin='40px auto 0' style={{paddingBottom: '40px'}} src={require('../../images/works/nanalil/discover/sor_result.png')} />
                                </RSSection>
                            </RSDiscoverWrap>

                            <SectionLine src={require('../../images/works/nanalil/line.png')} />

                            <RSHeader>
                                <RSIcon><Image src={require('../../images/works/nanalil/define/define_icon.png')} /></RSIcon>
                                <RSTitle>정의단계</RSTitle>
                                <RSTitleEn>Define</RSTitleEn>
                            </RSHeader>

                            <RSSTitleWrap style={{margin:'120px auto 0'}}>
                                <RSSName>
                                    <RSSNumber style={{background: '#A1D88E'}}>01</RSSNumber>
                                    <RSSNTitle style={{color: '#A1D88E'}}>Define</RSSNTitle>
                                </RSSName>
                                <RSSTitle>퍼소나 설정</RSSTitle>
                                
                                <PersonaWrap>
                                    <Image src={require('../../images/works/nanalil/define/persona1.png')} />
                                    <Image src={require('../../images/works/nanalil/define/persona2.png')} />
                                </PersonaWrap>
                            </RSSTitleWrap>

                            <SectionLine src={require('../../images/works/nanalil/line.png')} />

                            <RSSTitleWrap>
                                <RSSName>
                                    <RSSNumber style={{background: '#A1D88E'}}>02</RSSNumber>
                                    <RSSNTitle style={{color: '#A1D88E'}}>Define</RSSNTitle>
                                </RSSName>
                                <RSSTitle>저니맵</RSSTitle>
                                
                                <Image margin={'64px auto 0'} type='inner' src={require('../../images/works/nanalil/define/persona1_map.png')} />
                                <Image type='inner' src={require('../../images/works/nanalil/define/persona1_solution.png')} />
                                <Image margin={'120px auto 0'} type='inner' src={require('../../images/works/nanalil/define/persona2_map.png')} />
                                <Image type='inner' src={require('../../images/works/nanalil/define/persona2_solution.png')} />
                            </RSSTitleWrap>
                        </ResearchArea>

                        <Image margin='150px auto 0' src={require('../../images/works/nanalil/develop/main.png')} />

                        <ResearchArea style={{background: '#45528b', padding:'150px 0 200px'}}>
                            <RSHeader>
                                <RSIcon><Image src={require('../../images/works/nanalil/develop/develop_icon.png')} /></RSIcon>
                                <RSTitle style={{color:'#fff'}}>생각단계</RSTitle>
                                <RSTitleEn style={{color:'#fff'}}>Develop</RSTitleEn>
                            </RSHeader>

                            <RSSTitleWrap style={{marginTop: '120px'}}>
                                <RSSName>
                                    <RSSNumber style={{background: '#44bbff'}}>01</RSSNumber>
                                    <RSSNTitle style={{color: '#44bbff'}}>Develop</RSSNTitle>
                                </RSSName>
                                <RSSTitle style={{color:'#fff'}}>플로우 차트</RSSTitle>
                                <Image margin={'64px auto 0'} type='inner' src={require('../../images/works/nanalil/develop/flowchart.png')} />
                            </RSSTitleWrap>

                            <RSSTitleWrap style={{marginTop: '200px'}}>
                                <RSSName>
                                    <RSSNumber style={{background: '#44bbff'}}>02</RSSNumber>
                                    <RSSNTitle style={{color: '#44bbff'}}>Develop</RSSNTitle>
                                </RSSName>
                                <RSSTitle style={{color:'#fff'}}>와이어 프레임</RSSTitle>
                                <Image margin={'64px auto 0'} src={require('../../images/works/nanalil/develop/wireframe.png')} />
                            </RSSTitleWrap>
                        </ResearchArea>

                        <Image margin={'-130px auto 0'} src={require('../../images/works/nanalil/develop/designsystem.png')} />
                </>
                }
            />
        </>
    )
}