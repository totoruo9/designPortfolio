import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40px 24px 24px;
    background: #fff;
`;

const FooterLeft = styled.ul`
    display: flex;
`;
const InfoItem = styled.li`
    padding: 8px 24px;
`;
const InfoTitle = styled.p`
    font-size: 14px;
    line-height: 24px;
`;
const Info = styled.p`
    padding-top:4px;
    font-size: 14px;
    line-height: 24px;
    color: #333;
`;

const FooterRight = styled.div`
    text-align: right;
    padding: 0 24px;
`;
const Logo = styled.p`
    font-size: 32px;
    line-height: 40px;
    font-weight: 900;
    color: #1c1c1c;
    font-family: 'Roboto';
    letter-spacing: -0.05em;
`;
const Copyright = styled.p`
    font-size: 14px;
    line-height: 24px;
    color: #333;
`;
const Shadow = styled.div`
    width: 100%;
    height: 40px;
    background: linear-gradient(180deg, rgba(79, 105, 198, 0) 0%, #4F69C6 100%);
    opacity: 0.15;
`;


export default function FooterCom(){
    return (
        <>
        <Shadow />
        <Footer>
            <FooterLeft>
                <InfoItem>
                    <InfoTitle>E-MAIL</InfoTitle>
                    <Info>wlsgurrla10@gmail.com</Info>
                </InfoItem>
                <InfoItem>
                    <InfoTitle>KAKAO</InfoTitle>
                    <Info>wlsgurrlaa</Info>
                </InfoItem>
            </FooterLeft>

            <FooterRight>
                <Logo>JINHYUK</Logo>
                <Copyright>© 2022 kim jin hyuk</Copyright>
            </FooterRight>
        </Footer>
        </>
    )
};