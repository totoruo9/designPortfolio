import React from 'react';
import { useRouteError } from 'react-router';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { device } from 'theme';
import Template from '../Components/template';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
`;

const Title = styled.h3`
    font-size: 24px;
    line-height: 36px;
    padding-top: 32px;
    color: #333;
    text-align: center;

    @media ${device.laptop} {
        font-size: 32px;
        line-height: 48px;
    }
`;

const ReturnBtn = styled(Link)`
    font-size: 20px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #eaeaea;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Image = styled.img`
    display: block;
    width: 100%;
    max-width: 600px;
`;

const ErrorText = styled.p`
    padding: 16px;
`;

const BackBtn = styled.img`
    width: 24px;
    height: 24px;
`;

const BannerWrap = styled.div`
    position: fixed;
    bottom:0;
    height: 48px;
    z-index:-1;
`;

const flowAnimate = keyframes`
    from {
        transform: translateX(0px);
    }
    to {
        transform: translateX(3000px);
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
    animation: ${flowAnimate} 100s linear infinite;
    transition:1s;
`;

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <Template contents={
            <Container>
                <Image src={require('../assets/images/page404.png')} alt='404' />
                <Title>
                    페이지가 존재하지 않거나 삭제되어<br />
                    페이지를 찾을수 없습니다.
                </Title>
                <ErrorText>
                    {error.statusText || error.message}
                </ErrorText>
                <ReturnBtn to='/'>
                    메인으로 돌아가기
                    <BackBtn src={require('../assets/images/icons/back_black.png')} />
                </ReturnBtn>

                <BannerWrap>
                    <Banner><img src={require('../assets/images/banner.png')}/></Banner>
                </BannerWrap>
            </Container>
        } />
    )
}