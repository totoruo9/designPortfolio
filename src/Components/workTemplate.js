import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { device, lightTheme } from '../theme';
import Template from './template';

const HeaderWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding-bottom: 0px;

    @media ${device.laptop} {
        padding-bottom: 80px;
    }
`;

const Header =  styled.div`
    width:100%;
    max-width: ${lightTheme.maxWidth};
`;

const Title = styled.h2`
    font-size: 32px;
    line-height: 48px;
    color: #1c1c1c;
    margin-top: 72px;
    padding: 24px 16px;
    white-space: pre-line;

    @media ${device.laptop} {
        font-size: 80px;
        line-height: 120px;
        margin-top: 152px;
    }
`;

const InfoTool = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
    @media ${device.laptop} {
        padding-top: 16px;
        flex-direction:row;
    }
`;

const InfoWrap = styled.ul`
    display: flex;
    flex-direction: column;

    @media ${device.laptop} {
        flex-direction: row;
    }
`;
const Info = styled.li`
    display: flex;
    margin-right: 40px;
    padding: 0 16px;

    :last-child {
        margin-right: 0;
    }

    @media ${device.laptop} {
        padding: 24px 16px;
    }
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
    padding: 24px 8px;

    @media ${device.laptop} {
        padding: 24px 16px;
    }
`;

const ToolIcon =styled.li`
    margin-left: 8px;

    img {
        width: 24px;
    }

    @media ${device.laptop} {
        img {
            width: 100%
        }
    }
`;

const FixedBannerArea = styled.div`
    width: 100%;
    min-height:350px;
    padding:0;
    margin:0;
    background: url(${props => props.bgImg}) center center;
    background-size: cover;

    @media ${device.laptop} {
        min-height: 950px;
    }
`;

const FixedBanner = styled.img`
    width: 100%;
    display:none;
`;

const Explanation = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    padding-top: 0px;

    @media ${device.laptop} {
        padding-top: 80px
    }
`;

const Text = styled.p`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    padding: 24px 16px;
    white-space: inherit;

    @media ${device.laptop} {
        white-space: pre-line;
    }
`;

export default function WorkTemplate({mainTitle, client, workArea, tools, explan, contents, bannerImg}){
    return (
        <Template contents={
            <>
            <HeaderWrap>
                <Header>
                    <Title>{mainTitle}</Title>
                    <InfoTool>
                        <InfoWrap>
                            <Info>
                                <InfoTitle>클라이언트</InfoTitle>
                                <InfoContent>{client}</InfoContent>
                            </Info>
                            <Info>
                                <InfoTitle>참여 영역</InfoTitle>
                                <InfoContent>{workArea}</InfoContent>
                            </Info>
                        </InfoWrap>
                        <ToolIcons>
                            {
                                tools.map((item, index) => (
                                    <ToolIcon key={index}><img src={require(`../images/icons/skill/${item}.png`)} /></ToolIcon>
                                ))
                            }
                        </ToolIcons>
                    </InfoTool>
                </Header>
            </HeaderWrap>
            
            <FixedBannerArea bgImg={require(`../images/works/${bannerImg}`)}>
            <FixedBanner src={require(`../images/works/${bannerImg}`)} />
            </FixedBannerArea>
            {
                explan
                    ? (
                        <Explanation>
                            <Text>{explan}</Text>
                        </Explanation>
                    ) : null
            }

            {contents}
            </>
        } />
    )
};