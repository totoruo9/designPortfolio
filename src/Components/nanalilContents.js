import React from 'react';
import styled from 'styled-components';
import { device, lightTheme } from '../theme';

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
    padding: 40px 0 0;
    

    @media ${device.laptop} {
        background: url(${props => props.bgUrl}) no-repeat center bottom;
        padding:160px 0 200px;
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

const TextArea = styled.div`
    padding: 16px 40px;
`;

const Title = styled.h4`
    font-family: 'gmarketL';
    font-size: 32px;
    line-height: 48px;
    color: #333;

    strong {
        font-family: 'gmarketB';
        color: #44BBFF;
        display: block;
    }

    @media ${device.laptop} {
        font-size: 70px;
        line-height: 96px;
    }
`;

const Text = styled.p`
    font-family: 'gmarketL';
    margin-top:24px;
    font-size:18px;
    line-height:32px;white-space: inherit;

    strong {
        font-family: 'gmarketM';
    }

    @media ${device.laptop} {
        margin-top:48px;
        font-size:22px;
        line-height:36px;
        white-space: pre-line;
    }
`;

const ImgArea = styled.div`
    padding: 16px 40px;
`;

const SectionName = styled.p`
    display: inline-block;
    border-radius: 24px;
    width: auto;
    background: #fff;
    color: #44BBFF;
    padding: 8px 40px;
    margin-bottom: 16px;
`;

export function Content ({bgUrl, title, text, src, sectionName, titleAlign, textAreaBgUrl, bgColor}) {
    return (
        <>
            <Section bgColor={bgColor} bgUrl={require(`../images/works/nanalil/${bgUrl}`)}>
                <Article>
                    <TextArea align={titleAlign} bgUrl={require(`../images/works/nanalil/${textAreaBgUrl}`)}>
                        {sectionName && <SectionName>{sectionName}</SectionName>}
                        <Title color={title.color}>
                            {title.top}
                            <strong>{title.bottom}</strong>
                        </Title>
                        
                        {text &&
                            <Text>
                                {text.map((item, index) => {
                                    if(item==='boldStart') {
                                        return(
                                            <strong>{text[index+1]}</strong>
                                        )
                                    }

                                    if(item === 'enter'){
                                        return <br />
                                    }

                                    if(text[index-1]==='boldStart' || item === 'boldEnd'){
                                        return ``;
                                    }

                                    return (item)
                                })}
                            </Text>
                        }
                    </TextArea>
                    <ImgArea><Image src={require(`../images/works/nanalil/${src}`)} /></ImgArea>
                </Article>
            </Section>
        </>
    )
}