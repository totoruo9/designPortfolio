import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../theme';

const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    background: #fff;
    flex-direction: column;
    align-items: center;

    @media ${device.laptop} {
        padding: 40px 24px 24px;
        flex-direction: row;
    }
`;

const FooterLeft = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    @media ${device.laptop} {
        width: auto;
        flex-direction: row;
        margin-bottom: 0;
    }
`;
const InfoItem = styled.li`
    display: block;
    padding: 4px;
    :last-child {
        text-align: right;
    }

    @media ${device.laptop} {
        padding: 8px 24px;

        :last-child {
        text-align: left;
    }
    }
`;
const InfoTitle = styled.p`
    font-size: 14px;
    line-height: 24px;
`;
const Info = styled.p`
    font-size: 14px;
    line-height: 24px;
    color: #333;

    @media ${device.laptop} {
        padding-top: 4px;
    }
`;

const FooterRight = styled.div`
    text-align: right;
    padding: 16px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #eaeaea;

    @media ${device.laptop} {
        padding: 0 24px;
        display:block;
        border-top: 0;
    }
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

const TopBtn = styled.img`
    position: fixed;
    z-index:1000;
    right: 24px;
    bottom: 40px;

    width: 40px;

    @media ${device.laptop} {
        right: 80px;
        bottom: 80px;
        width: auto;
    }
`;

const goTop = () => {
    window.scrollTo(0,0);
}

export default function FooterCom(){
    return (
        <>
        <TopBtn src={require('../images/icons/top_btn.png')} alt='상단으로 이동하기 버튼' onClick={goTop} />
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