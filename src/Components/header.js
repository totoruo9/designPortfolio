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

    @media ${device.laptop} {
        padding: 24px 40px;
    }
`;

const Logo = styled.h1`
    height:24px;

    img {
            height: 100%;
        }

    @media ${device.laptop} {
        height:40px;
    }
`;

const MenuWrap = styled.ul`
    display: none;
    align-items: center;
    padding: 16px;


    @media ${device.laptop} {
        display: flex;
    }
`;

const Menu = styled.li`
    padding-left: 40px;
`;

export default function HeaderCom() {
    return (
        <HeaderWrap>
            <Logo><Link to='/'><img src={require('../images/logo01.png')} alt='logo' /></Link></Logo>
            <MenuWrap>
                <Menu><Link to='/'>work</Link></Menu>
                <Menu><Link to='/about'>about</Link></Menu>
            </MenuWrap>
        </HeaderWrap>
    )
};