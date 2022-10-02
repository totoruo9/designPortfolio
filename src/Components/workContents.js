import React from 'react';
import styled from 'styled-components';
import { device, lightTheme } from '../theme';

const ContentWrap = styled.div`
    padding: ${props => props.padding ? props.padding : `120px 0 0`};
`;

const SubTitle = styled.h4`
    padding: 16px;
    color: #555;
    font-size:18px;
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;

    @media ${device.laptop} {
        font-size:20px;
    }
`;
const SubText = styled.p`
    padding: 0 16px 16px;
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
    white-space: inherit;

    @media ${device.laptop}{
        white-space: pre-line;
    }
`;

export default function WorkContents ({title, text, children, padding}) {
    return (
        <ContentWrap padding={padding}>
            <SubTitle>{title}</SubTitle>
            {text ? <SubText>{text}</SubText> : null}
            {children ? children : null}
        </ContentWrap>
    )
}