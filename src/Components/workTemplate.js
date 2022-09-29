import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { lightTheme } from '../theme';
import Template from './template';

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
    white-space: pre-line;
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
    white-space: pre-line;
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
            
            <FixedBanner src={require(`../images/${bannerImg}.png`)} />

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