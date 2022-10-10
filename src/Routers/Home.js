import React, { useEffect, useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import HeaderCom from '../Components/header';
import Template from '../Components/template';
import { designSystem } from '../globalStyle';
import { device } from '../theme';

const flowAnimate = keyframes`
    from {
        transform: translateX(0px);
    }
    to {
        transform: translateX(3000px);
    }
`;

const Visual = styled.div`
    width: 100%;
    height: 80vh;
    background: #FBFBFF;
    justify-content:center;
    align-items:center;
    position: relative;

    @media ${device.laptop} {
        height:85vh;
    }
`;

const VisualText = styled.div`
    position: absolute;
    width: 100%;
    top:50%;
    left: 0;
    right: 0;
    z-index:0;

    transition: 0.3s;
    transform: perspective(0) translateZ(-${props => props.scrollY/700}px) translateY(-50%);
    opacity: ${props => props.scrollY > 100 ? `0.${props.scrollY+7}` : 1};

    @media ${device.laptop} {}
`;

const VisualMainText = styled.h2`
    font-size: 28px;
    line-height: 48px;
    text-align: center;
    font-weight: 100;
    letter-spacing: 0.2em;
    color: ${designSystem.color.gray900};

    @media ${device.laptop} {
        font-size: 56px;
        line-height: 96px;
    }

    @media ${device.desktop} {
        font-size: 64px;
        line-height: 120px;
    }
`;

const VisualSubText = styled.h3`
    font-style: normal;
    font-weight: 100;
    font-size: 14px;
    line-height: 24px;

    text-align: center;
    letter-spacing: 0.2em;

    color: ${designSystem.color.gray500};

    padding-top:24px;

    @media ${device.laptop} {
        font-size: 16px;
        padding-top:40px;
    }

    @media ${device.desktop} {
        font-size: 20px;
        line-height: 40px;
        padding-top: 80px;
    }
`;

const St = styled.strong`
    color: ${designSystem.color.point};
    font-weight: 500;
`;

const BannerWrap = styled.div`
    position: relative;
    height: 48px;
`;

const IsMe = styled.div`
    width: 100%;
    position: absolute;
    bottom:0;
    text-align: center;

    img {
        width: 64px;
    }

    @media ${device.laptop} {
        img {
            width: 88px;
        }
    }
`;

const Banner = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    z-index:0;
    overflow: hidden;

    img {
        animation: ${flowAnimate} 100s linear infinite;
        transition:1s;
        opacity: ${props => props.scrollY ? 0.5 : 1};
        height: 32px;
    }


    @media ${device.laptop} {
        position: fixed;
        bottom:92px;

        img {
            height: 64px;
            transform: scale(${props => props.scrollY >100 ? 0.9 : 1});
            opacity: ${props => props.scrollY >100 ? 0.5 : 1};
        }
    }

    @media ${device.desktop} {
        bottom:160px;

        img {
            height: 80px;
        }
    }
`;

const Container = styled.main`
    width: 100%;
    max-width: 1556px;
    padding: 40px 16px 80px;
    margin: 0 auto -80px;
    position: relative;
    z-index:0;
    background: #fff;
    border-radius: 8px 8px 0 0;

    @media ${device.laptop} {
        padding: 40px 24px 120px;
    }
`;

const ItemWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 16px;
    justify-content: center;

    @media ${device.laptop} {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
`;

const ItemImg = styled.img`
    width:100%;
    height: 100%;
    transition: .5s;
    cursor: pointer;

    :hover {
        transform: scale(.98);
        opacity: .65;
    }
`;

const Filter = styled.ul`
    display: flex;
    gap: 8px;
    padding: 16px 0 40px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;

    @media ${device.laptop} {
        gap: 40px;
        flex-wrap: nowrap;
    }
`;

const FilterItem = styled.li`
    padding: 4px 24px;
    border-radius: 28px;
    color: ${props => props.colorOn ? '#fff' : '#333'};
    background: ${props => props.colorOn ? '#0000ff' : '#fff'};
    font-size: 14px;
    cursor: pointer;

    @media ${device.laptop} {
        padding: 8px 24px;
        border-radius: 28px;
        font-size: 18px;
    }
`;

const workCategory = {
    all: ['nanalil', 'iamwebapp', 'snspage', 'ddbdd', 'cleaner', 'eventpage', 'productpage', 'productpage2', 'bannerpage'],
    main: ['nanalil', 'iamwebapp', 'snspage'],
    uiux: ['nanalil', 'iamwebapp', 'cleaner', 'eventpage'],
    front: ['iamwebapp', 'eventpage', 'cleaner'],
    etc: ['snspage', 'ddbdd', 'productpage', 'productpage2', 'bannerpage']
}

export default function Home() {
    const [scrollY, setScrollY] = useState(0);
    const [ismeCnt, setIsmeCnt] = useState(2);
    const [filterColor, setFilterColor] = useState('0');
    const [filterCategory, setFilterCategory] = useState(workCategory.all);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        const timeoutId = setInterval(() => {
            setIsmeCnt(prev =>{
                if(prev >= 4) {
                    prev = 1;
                }
                return ++prev;
            })
        }, 500);

        return () => {
            clearTimeout(timeoutId)
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        if(window.scrollY >= 50){
            setScrollY(Math.round(window.scrollY));
        } else {
            setScrollY(0);
        }
    }

    const onFilter = (event) => {
        const filter = event.target.dataset.type;
        setFilterColor(event.target.dataset.index);
        setFilterCategory(Object.values(workCategory)[event.target.dataset.index]);
    }

    return (
        <Template contents={
            <>
            <Visual>
                <VisualText scrollY={scrollY}>
                    <VisualMainText>
                    사용자의 니즈를 넘어<br />
                    <St>디즈를 탐구하는 디자이너</St><br />
                    김진혁입니다.<br />
                    </VisualMainText>
                    <VisualSubText>UI/UX Designer  ∙  Front-end Developer</VisualSubText>
                </VisualText>
                
            </Visual>
            
            <BannerWrap>
                <Banner scrollY={scrollY}><img src={require('../assets/images/banner.png')}/></Banner>
                <IsMe>
                    <img src={require(`../assets/images/isMe/${ismeCnt}.png`)}/>
                </IsMe>
            </BannerWrap>

            <Container>
                <Filter>
                    <FilterItem onClick={onFilter} data-index='0' data-type='all' colorOn={filterColor==='0'}>ALL</FilterItem>
                    <FilterItem onClick={onFilter} data-index='1' data-type='main' colorOn={filterColor==='1'}>MAIN-WORK</FilterItem>
                    <FilterItem onClick={onFilter} data-index='2' data-type='uiux' colorOn={filterColor==='2'}>UXUI</FilterItem>
                    <FilterItem onClick={onFilter} data-index='3' data-type='front' colorOn={filterColor==='3'}>FRONT-END</FilterItem>
                    <FilterItem onClick={onFilter} data-index='4' data-type='etc' colorOn={filterColor==='4'}>ETC</FilterItem>
                </Filter>
                <ItemWrap>
                    {
                        filterCategory.map((item, index) =>(
                            <Link key={item+index} to={`/works/${item}`}>
                                <Item><ItemImg src={require(`../assets/images/workBanners/${item}.png`)} alt='' /></Item>
                            </Link>
                            // <a key={item+index} href={`/works/${item}`} target='_blank'>
                            //     <Item><ItemImg src={require(`../assets/images/workBanners/${item}.png`)} alt='' /></Item>
                            // </a>
                        ))
                    }
                </ItemWrap>
            </Container>
            </>
        } />
    )
};