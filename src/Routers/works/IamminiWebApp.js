import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Template from '../../Components/template';
import { lightTheme } from '../../theme';

const HeaderWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding-bottom: 80px;
`;

const Header =  styled.div`
    width:100%;
    max-width: ${lightTheme.maxWidth};
`;

const Title = styled.h2`
    font-size: 80px;
    line-height: 120px;
    color: #1c1c1c;
    margin-top: 200px;
    padding: 24px 16px;
`;

const InfoTool = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
`;

const InfoWrap = styled.ul`
    display: flex;
`;
const Info = styled.li`
    display: flex;
    margin-right: 40px;
    padding: 24px 16px;
`;
const InfoTitle = styled.p`
    font-weight: 700;
    color: #333;
`;
const InfoContent = styled.p`
    padding-left:20px;
`;

const ToolIcons = styled.ul`
    display: flex;
    padding: 24px 16px;
`;

const ToolIcon =styled.li`
    margin-left: 8px;
`;

const Banner = styled.div`
    width:100%;
`;

const FixedBanner = styled.img`
    width: 100%;
`;

const Explanation = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    padding-top: 80px;
`;

const Text = styled.p`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    padding: 24px 16px;
`;

const NavigationTab = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    padding-top: 120px;
`;

const NavWrap = styled.ul`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    display: flex;
    padding: 24px 16px;
    border-bottom: 1px solid #eaeaea;
`;

const NavItem = styled.li`
    padding: 8px 32px;
    border-radius: 24px;
    background: ${props => props.focus ? '#0000ff' : '#fff'};
    color: ${props => props.focus ? '#fff' : '#333'};
    margin-right: 24px;
`;

const SectionArea = styled.div`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 64px auto 0;
    display: flex;
    justify-content: space-between;
`;

const SectionTextArea = styled.div`
    padding: 16px;
`;

const SectionNum = styled.p`
    font-size: 40px;
    line-height: 56px;
    font-weight: 900;
    font-family: 'Roboto';
    color: #333;
`;

const SectionTitle = styled.p`
    font-size: 24px;
    line-height: 40px;
    margin-bottom: 8px;
    font-weight: 700;
    color: #333;
`;

const SectionInfo = styled.p``;

const SectionImgArea = styled.img`
    width: 50%;
    height: auto;
`;




const tools = ['ai', 'ps', 'xd', 'figma', 'html', 'css', 'js'];

export default function IamminiWebApp(){
    return (
        <Template contents={
            <>
            <HeaderWrap>
                <Header>
                    <Title>
                        일상 속 작은 행복 아이엠미니<br/>
                        DIY 쇼핑몰 웹앱 
                    </Title>
                    <InfoTool>
                        <InfoWrap>
                            <Info>
                                <InfoTitle>클라이언트</InfoTitle>
                                <InfoContent>아이엠미니</InfoContent>
                            </Info>
                            <Info>
                                <InfoTitle>참여 영역</InfoTitle>
                                <InfoContent>기획, 디자인, 개발</InfoContent>
                            </Info>
                        </InfoWrap>
                        <ToolIcons>
                            {
                                tools.map((item, index) => (
                                    <ToolIcon key={index}><img src={require(`../../images/icons/skill/${item}.png`)} /></ToolIcon>
                                ))
                            }
                        </ToolIcons>
                    </InfoTool>
                </Header>
            </HeaderWrap>
            
            <FixedBanner src={require('../../images/iamwebapp_banner.png')} />

            <Explanation>
                <Text>
                    아이엠미니는 미니어처, 명화그리기, 보석십자수 등 취미용 DIY 제품을 판매하는 브랜드입니다.<br />
                    아이엠미니 홈페이지를 기획, 제작하였으며 2018-2022년도까지 꾸준하게 개선을 진행해왔습니다.<br />
                    구글 애널리틱스, 카페24 접속 통계, 뷰저블 등을 통해 정량적 데이터 분석과 설문조사, 네이버 데이터랩, 썸트랜드 등을 이용하여 정성적 분석을 통한 가설을 토대로 <br />
                    자사몰 구매 및 재구매율 상승, 회원 증가 및 충성고객 확보를 목표로 개선을 진행해왔습니다.<br />
                    업무 효율성을 위한 상세페이지 자동 생성 프로그램 제작 기획에 참여하였습니다. 다양한 실패와 성공에 대한 경험을 아래 내용으로 담았습니다.<br />
                </Text>
            </Explanation>

            <NavigationTab id='section01'>
                <NavWrap>
                    <NavItem focus={true}>
                        <a href='#section01'>01. 홈페이지 리뉴얼</a>
                    </NavItem>
                    <NavItem focus={false}>
                        <a href='#section02'>02. 홈페이지 개선</a>
                    </NavItem>
                    <NavItem focus={false}>
                        <a href='#section03'>03. 업무 효율화</a>
                    </NavItem>
                </NavWrap>
            </NavigationTab>

            <SectionArea>
                <SectionTextArea>
                    <SectionNum>01</SectionNum>
                    <SectionTitle>홈페이지 리뉴얼</SectionTitle>
                    <SectionInfo>
                    2021년도 1분기 - 2분기 사이 자사몰 활성화를 위해 기존 홈페이지의 리뉴얼 작업을 진행하였습니다.<br />
                    불편한 UI 개선과 고객 커뮤니티가 활성화된 사이트를 만드는 것을 주요 목표로 하였습니다.<br />
                    하지만 커뮤니티 형태의 사이트는 자사몰의 인지도가 낮고, 초기 양질의 콘텐츠를 제작해낼 인력 부족,<br />
                    카페24 무료 쇼핑몰의 환경적 한계 등으로 인해 인스타그램을 통해 진행하는 방향으로 변경됐습니다.
                    </SectionInfo>
                    </SectionTextArea>
                <SectionImgArea src={require('../../images/iamwebapp/iamwebapp_section01.png')} />
            </SectionArea>
            </>
        } />
    )
};