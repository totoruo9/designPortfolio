import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../theme';

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

export default function WorkNavTab ({id,navItem, focusNum}) {
    return (
        <NavigationTab id={id}>
            <NavWrap>
                {
                    navItem.map((item, index) => (
                        <NavItem key={index} focus={focusNum === index}>
                            <a href={`#${item.link}`}>{item.text}</a>
                        </NavItem>
                    ))
                }
            </NavWrap>
        </NavigationTab>
    )
}