import React, { useEffect } from 'react';
import { Link, useLocation} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import HeaderCom from '../Components/header';
import Template from '../Components/template';
import { firebaseApp } from '../firebase';
import { designSystem } from '../globalStyle';

const Visual = styled.div`
    width: 100%;
    height: 80vh;
    background: #FBFBFF;
    justify-content:center;
    align-items:center;
    position: relative;
`;

const VisualText = styled.div`
    position: absolute;
    width: 100%;
    top:50%;
    left: 50%;
    z-index:0;
    transform: translate(-50%, -50%);
`;

const VisualMainText = styled.h2`
    font-size: 64px;
    line-height: 120px;
    text-align: center;
    font-weight: 100;
    letter-spacing: 0.2em;
    color: ${designSystem.color.gray900};
`;

const VisualSubText = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-size: 20px;
    line-height: 40px;

    text-align: center;
    letter-spacing: 0.2em;

    color: ${designSystem.color.gray500};

    padding-top:80px;
`;

const St = styled.strong`
    color: ${designSystem.color.point};
    font-weight: 500;
`;

const BannerWrap = styled.div`
    position: relative;
`;

const IsMe = styled.div`
    width: 100%;
    position: absolute;
    bottom:0;
    text-align: center;
`;

const Banner = styled.div`
    width: 100%;
    overflow:hidden;
`;

const Container = styled.main`
    width: 100%;
    max-width: 1556px;
    padding: 80px 24px 40px;
    margin: 0 auto;
`;

const ItemWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    justify-content: center;
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
`;

const ItemImg = styled.img`
    width:100%;
    height: 100%;
    transition: .5s;

    :hover {
        opacity: .3;
    }
`;

export default function Home() {

    return (
        <Template contents={
            <>
            <Visual>
                <VisualText>
                    <VisualMainText>
                    사용자의 니즈를 넘어<br />
                    <St>디즈를 탐구하는 디자이너</St><br />
                    김진혁입니다.<br />
                    </VisualMainText>
                    <VisualSubText>UI/UX Designer  ∙  Front-end Developer</VisualSubText>
                </VisualText>
                
            </Visual>
            
            <BannerWrap>
                <Banner> <img src={require('../images/banner.png')}/> </Banner>
                <IsMe><img src={require('../images/test.png')}/></IsMe>
            </BannerWrap>

            <Container>
                <ItemWrap>
                    <Link to='/works/iamminiwebapp'><Item><ItemImg src={require(`../images/workBanners/nanalil.png`)} alt='' /></Item></Link>
                    <Link to='/works/iamminiwebapp'><Item><ItemImg src={require(`../images/workBanners/iamwebapp.png`)} alt='' /></Item></Link>
                    <Link to='/works/iamminiwebapp'><Item><ItemImg src={require(`../images/workBanners/snscontents.png`)} alt='' /></Item></Link>
                    <Link to='/works/ddbdd'>
                        <Item><ItemImg src={require(`../images/workBanners/ddbdd.png`)} alt='' /></Item>
                    </Link>
                    <Link to='/works/iamminiwebapp'>
                        <Item><ItemImg src={require(`../images/workBanners/cleaner.png`)} alt='' /></Item>
                    </Link>
                    <Link to='/works/eventpage'>
                        <Item><ItemImg src={require(`../images/workBanners/eventpage.png`)} alt='' /></Item>
                    </Link>
                    <Link to='/works/iamminiwebapp'>
                        <Item><ItemImg src={require(`../images/workBanners/productpage.png`)} alt='' /></Item>
                    </Link>
                    <Link to='/works/iamminiwebapp'>
                        <Item><ItemImg src={require(`../images/workBanners/productpage2.png`)} alt='' /></Item>
                    </Link>
                    <Link to='/works/iamminiwebapp'>
                        <Item><ItemImg src={require(`../images/workBanners/banner.png`)} alt='' /></Item>
                    </Link>
                </ItemWrap>
            </Container>
            </>
        } />
    )
};