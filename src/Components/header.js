import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrap = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    z-index:1000;
    padding: 24px 40px;
`;

const MenuWrap = styled.ul`
    display: flex;
    align-items: center;
    padding: 16px;
`;

const Menu = styled.li`
    padding-left: 40px;
`;

export default function HeaderCom() {
    return (
        <HeaderWrap>
            <h1>LOGO</h1>
            <MenuWrap>
                <Menu><Link to='/'>work</Link></Menu>
                <Menu><Link to='/about'>about</Link></Menu>
            </MenuWrap>
        </HeaderWrap>
    )
};