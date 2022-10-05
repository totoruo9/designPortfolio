import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { atomHdHeight } from '../atom';
import { device } from '../theme';

const HeaderWrap = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    z-index:1000;
    padding: 24px 16px;
    transition: 300ms;

    @media ${device.laptop} {
        padding: 24px;
    }

    @media ${device.desktop} {
        padding: 24px 40px;
    }
`;

const Logo = styled.h1`
    height:24px;

    img {
            height: 100%;
    }

    @media ${device.laptop} {
        height: 40px;
    }

    @media ${device.desktop} {
        height:40px;
    }
`;

const MenuWrap = styled.ul`
    display: flex;
    align-items: center;
    padding: 4px;

    @media ${device.laptop} {
        padding: 16px;
    }
`;

const Menu = styled.li`
    display: none;
    padding-left: 40px;

    @media ${device.laptop} {
        display: block;
    }

    @media ${device.desktop} {
        display: block;
    }
`;

const Hamburger = styled.img`
    display: block;

    @media ${device.laptop} {
        display: none;
    }

    @media ${device.desktop} {
        display: none;
    }
`;

const onClick = (item) => {
    let randomNum = `${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}`;
    console.log(randomNum);

    
    item.target.style.background = `rgba(${randomNum},.5)`;
    
    setTimeout(() => {
        item.target.style.background = `rgba(${randomNum},.0)`;
    }, 200);
    
}

export default function HeaderCom() {
    return (
        <HeaderWrap onClick={onClick}>
            <Logo><Link to='/'><img src={require('../images/logo02.png')} alt='logo' /></Link></Logo>
            <MenuWrap>
                <Menu><Link to='/'>work</Link></Menu>
                <Menu><Link to='/about'>about</Link></Menu>

                <Hamburger src={require('../images/icons/menu_btn.png')} />
            </MenuWrap>
        </HeaderWrap>
    )
};