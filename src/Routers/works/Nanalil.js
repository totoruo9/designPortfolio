import React from 'react';
import styled from 'styled-components';
import WorkContents from '../../Components/workContents';
import { ContentImg } from '../../Components/workImages';
import WorkTemplate from '../../Components/workTemplate';
import { device, lightTheme } from '../../theme';

const IMG_BASE_URL = '../../images/works/nanalil';

const ContentArea = styled.div`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

const Section = styled.div`
    width:100%;
    padding: 40px 24px 0;
    

    @media ${device.laptop} {
        background: url(${props => props.bgUrl}) no-repeat center bottom;
        padding: 40px 16px 0;
        padding:160px 40px 200px;
    }
`;

const Article = styled(ContentArea)`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    img {
        padding: 20px 0;
    }

    @media ${device.laptop} {
        flex-direction: row;
        img {
            padding:0px;
        }
    }
`;

export default function Nanalil () {
    return (
        <>
            <WorkTemplate
                mainTitle={`나의 날씨 일기\n무드 트레커형 다이어리 앱`}
                client={'개인작업'}
                workArea={'기획, 디자인'}
                tools={['ps', 'ai', 'figma', 'xd']}
                bannerImg={'nanalil/banner.png'}
                contents={
                    <>
                        <Section bgUrl={require('../../images/works/nanalil/intro/background.png')}>
                            <Article>
                                <div><Image src={require(`../../images/works/nanalil/intro/text.png`)} /></div>
                                <div><Image src={require(`../../images/works/nanalil/intro/appvisual.png`)} /></div>
                            </Article>
                        </Section>
                    </>
                }
            />
        </>
    )
}