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
    display: block;
`;

const FullWidthImg = styled.div`
    margin: ${props => props.margin || 0};
    width: 100%;
    position: relative;

    min-height: ${props => props.minHeight && props.minHeight[0]};
    background: url(${props => props.bgImg}) center top;
    background-size: cover;

    @media ${device.laptop} {
        min-height: ${props => props.minHeight && props.minHeight[1]};
    }
`;

const InnerImgArea = styled(ContentArea)`
    padding: ${props => props.padding ? props.padding : 0};
`;


const HorizontalArea = styled.div`
    position: relative;
`;

const HorizontalScroll = styled.div`
    padding: 8px 16px;
    display: flex;
    gap: 20px;
    filter: drop-shadow(0px 4px 16px rgba(79, 105, 198, 0.15));
    width: 100%;
    overflow-x: scroll;

    @media ${device.laptop} {
        padding: 24px;
    }

    @media ${device.desktop} {
        padding: 40px 80px;
    }
`;

const SlideImg = styled.img`
    position: absolute;
    bottom:0px;
    right:16px;
    height: 32px;

    @media ${device.laptop} {
        bottom:20px;
        right:24px;
        height:auto;
    }

    @media ${device.desktop} {
        bottom:20px;
        right:80px;
        height:auto;
    }
`;

const HorizontalWrap = styled.div``;

const HorizontalItem = styled.img`
    width: 420px;

    @media ${device.laptop} {
        width: auto;
    }
`;


export function ContentImg({type='default', padding, margin, src, alt, children, minHeight, images}) {

    switch(type) {
        case 'fullWidth':
            return (
                minHeight
                    ? (
                        <FullWidthImg margin={margin} bgImg={require(`../images/works/${src}`)} minHeight={minHeight}>
                            {children}
                        </FullWidthImg>
                    )
                    : (
                        <FullWidthImg margin={margin}>
                            <Image src={require(`../images/works/${src}`)} alt={alt} />
                            {children}
                        </FullWidthImg>
                    )
            )
        case 'horizontal':
            return (
                <HorizontalArea>
                    <HorizontalScroll>
                        {
                            images.map((item, index) => (
                                <HorizontalWrap key={index}>
                                    <HorizontalItem src={require(`../images/works/${item.src}`)} alt={item.alt} />
                                </HorizontalWrap>
                            ))
                        }
                    </HorizontalScroll>
                    <SlideImg src={require('../images/icons/slideImg.png')} />
                </HorizontalArea>
            )
        default:
            return (
                <InnerImgArea padding={padding}>
                    <Image src={require(`../images/works/${src}`)} alt={alt}/>
                </InnerImgArea>
            )
    }
}