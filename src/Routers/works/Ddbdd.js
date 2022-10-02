import React from 'react';
import styled from 'styled-components';
import { ContentImg } from '../../Components/workImages';
import WorkNavTab from '../../Components/workNavTab';
import WorkTemplate from '../../Components/workTemplate';
import { device, lightTheme } from '../../theme';

const ContentArea = styled.div`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
`;

const FullWidthImg = styled.div`
    margin: ${props => props.margin || 0};
    width: 100%;
    position: relative;

    min-height: ${props => props.minHeight && props.minHeight[0]};
    background: url(${props => props.bgImg}) center top;
    background-size: cover;

    @media ${device.laptop} {
        min-height: ${props => props.minHeight && props.minHeight[1]};
    }
`;

const Image = styled.img`
    width: 100%;
    display: block;
`;


export default function Ddbdd () {
    return (
        <>
            <WorkTemplate
                mainTitle={`뜨는 브랜드 뜯어보기, 뜨브뜨\n뉴스레터 및 사이드 프로젝트`}
                client={'DNFL (사이트프로젝트 팀)'}
                workArea={'기획, 디자인, 에디터'}
                tools={[]}
                bannerImg={'ddbdd/ddbdd_banner.png'}
                contents={
                    <>
                        <WorkNavTab
                            id={'section01'}
                            focusNum={0}
                            navItem={[{text:'01. 뜨브뜨 뉴스레터', link:'section01'}, {text:'02. DNFL 사이드 프로젝트', link:'section02'}]}
                            title={'뜨브뜨 뉴스레터'}
                            type={'vertical'}
                            text={
                                `매월 2, 4째주 수요일, 브랜드라는 넓은 우주를 여행하는 3명의 친구(마이티, 셀리, 라이카)와 함께 핫한 브랜드 정보를 전달하는 뉴스레터를 작성하고있습니다.
                                핫플의 냄새를 놓치지 않고 찾아가는, 호기심 대왕 라이카로 활동하며 시몬스 ‘그로서리스토어’ ‘아더에러’ ‘보안여관’ 등 다양한 브랜드를 소개해왔습니다.
                                이외에도 ‘누깍’ ‘무신사 스텐다드 홍대’ ‘스티비 크리에이터 트랙' 등 다양한 브랜드와의 협업이 진행 또는 진행 예정에 있습니다.
                                2021년 8월 25일 첫 뉴스레터를 발송하여 지금까지 꾸준하게 발송한 뉴스레터는 많은 구독자님들의 피드백과 사랑으로 발전해가고있는 중입니다.`
                            }
                            linkBtn={[{link :'https://page.stibee.com/subscriptions/132892', text: '뜨브뜨 구독하기'}, {link :'https://ddbdd.stibee.com/', text: '뜨브뜨 아카이빙'}]}
                        />

                        <ContentImg src={'ddbdd/ddbdd_01.png'} alt={'뜨브뜨 이미지'} type={'fullWidth'} margin={'80px 0 0'} />

                        <WorkNavTab
                            id={'section02'}
                            focusNum={1}
                            navItem={[{text:'01. 뜨브뜨 뉴스레터', link:'section01'}, {text:'02. DNFL 사이드 프로젝트', link:'section02'}]}
                            title={'DNFL 사이드 프로젝트'}
                            type={'vertical'}
                            text={
                                `DNFL 팀에서 ‘한 번 해볼까’ 라는 단순히 스쳐지나가는 생각을 흘려보내지 않고 실행하여 다양한 활동에 도전하고있습니다.
                                일주일에 한 번 써오던 글을 모아 ‘나의 어제는 글이 되었다’는 책을 공동 출판하여 교보문고, 예스24 등 다양한 서점에서 판매중이며
                                매주 위글 프로젝트를 통해 1주 1글을 작성하고 피드백을 하는 시간을 가져 2번째 독립출판을 앞두고있습니다.
                                그밖에도 독터뷰를 통한 한 달에 한 권의 책을 읽고 독서모임을 하는 등 다양한 사이드 프로젝트들이 활발하게 이루어지고있습니다.`
                            }
                            linkBtn={[{link :'http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9791162143759', text: '‘나의 어제는 글이 되었다’ 구매 페이지'}, {link :'https://blog.naver.com/dnfl_cmc', text: '독터뷰 바로가기'}, {link :'https://www.instagram.com/wegle.letter/', text: '위글 바로가기'}]}
                        />

                        <ContentImg src={'ddbdd/ddbdd_02.png'} alt={'DNFL 이미지'} type={'fullWidth'} margin={'80px 0 -40px'} />
                    </>
                }
            />
        </>
    )
}