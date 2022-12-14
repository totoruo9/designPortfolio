import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device, lightTheme } from '../theme';

const NavigationTab = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    padding-top: 24px;

    @media ${device.laptop} {
        padding-top: 80px;
    }

    @media ${device.desktop} {
        padding-top: 120px;
    }
`;

const NavWrap = styled.ul`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    display: flex;
    padding: 24px 16px;
    border-bottom: 1px solid #eaeaea;
    align-items: center;

    @media ${device.laptop} {
        padding: 24px;
    }

    @media ${device.desktop} {
        padding: 24px 16px;
    }
`;

const NavItem = styled.li`
    padding: ${props => props.focus ? '4px' : '0px'};
    border-radius: 24px;
    background: ${props => props.focus ? '#0000ff' : '#F8F9FF'};
    color: ${props => props.focus ? '#fff' : '#333'};
    margin-right: 16px;
    text-align: center;
    cursor: pointer;
    width: ${props => props.focus ? '36px' : '28px'};
    height: ${props => props.focus ? '36px' : '28px'};


    :last-child {
        margin-right: 0;
    }

    @media ${device.laptop} {
        background: ${props => props.focus ? '#0000ff' : '#FFF'};
        padding: 8px 32px;
        margin-right: 24px;
        border-radius: 24px;
        width: auto;
        height: auto;
    }

    @media ${device.desktop} {
        padding: 8px 32px;
        margin-right: 24px;
        border-radius: 24px;
    }
`;

const NavHref = styled.a`
    
`;

const ContentArea = styled.div`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
`;

const SectionArea = styled(ContentArea)`
    margin: 24px auto 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media ${device.laptop} {
        flex-direction: ${props => props.sectionType !== 'horezontal' ? 'column' : 'row'};
        margin: 40px auto 0;
    }

    @media ${device.desktop} {
        flex-direction: ${props => props.sectionType !== 'horezontal' ? 'column' : 'row'};
        margin: 64px auto 0;
    }
`;

const SectionTextArea = styled.div`
    padding: 0 16px 16px;

    @media ${device.laptop} {
        padding: 0 24px 16px;
    }

    @media ${device.desktop} {
        padding: 0 16px 16px;
    }
`;

const SectionNum = styled.p`
    font-size: 24px;
    line-height: 32px;
    font-weight: 800;
    color: #333;

    @media ${device.laptop} {
        font-size: 40px;
        line-height: 56px;
    }

    @media ${device.desktop} {
        font-size: 40px;
        line-height: 56px;
    }
`;

const SectionTitle = styled.p`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 8px;
    font-weight: 700;
    color: #333;

    @media ${device.laptop} {
        font-size: 24px;
        line-height: 40px;
    }

    @media ${device.desktop} {
        font-size: 24px;
        line-height: 40px;
    }
`;

const SectionInfo = styled.p`
    white-space: inherit;

    @media ${device.laptop}{
        white-space: pre-line;
    }

    @media ${device.desktop}{
        white-space: pre-line;
    }
`;

const SectionImgArea = styled.img`
    width: 100%;
    height: 100%;
    padding: 0 16px;

    @media ${device.laptop} {
        width: ${props => props.sectionType !== 'horezontal' ? '100%' : '50%'};
    }

    @media ${device.desktop} {
        width: ${props => props.sectionType !== 'horezontal' ? '100%' : '50%'};
    }
`;

const LinkBtnArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    margin-top: 40px;

    @media ${device.laptop} {
        flex-direction: row;
        gap:20px;
        margin-top: 0;
    }
`;

const LinkBtn = styled.a`
    padding: 8px 24px;
    border: 1px solid #0000ff;
    gap: 4px;
    border-radius: 28px;
    color: #0000ff;
    font-size: 20px;
    line-height: 40px;
    margin-top: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    text-align: center;
    justify-content:center;

    @media ${device.laptop} {
        margin-top: 64px;
        width: auto;
    }
`;

export default function WorkNavTab ({id, navItem, focusNum, title, text, sectionImg, linkBtn, type='horezontal'}) {
    const [winWidth, setWinWidth] = useState(0);

    const handleResize = (event) => {
        setWinWidth(prev => prev = event.currentTarget.innerWidth);
    }

    useEffect(() => {
        setWinWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [winWidth]);

    return (
        <>
        <NavigationTab id={id}>
            <NavWrap>
                {
                    navItem.map((item, index) => (
                        <NavItem key={index} focus={focusNum === index}>
                            <NavHref href={`#${item.link}`}>
                                {
                                    winWidth > 1024 ? item.text : index+1
                                }
                            </NavHref>
                        </NavItem>
                    ))
                }
            </NavWrap>
        </NavigationTab>

        <SectionArea sectionType={type}>
            <SectionTextArea>
                <SectionNum>0{focusNum+1}</SectionNum>
                <SectionTitle>{title}</SectionTitle>
                <SectionInfo>
                    {text}
                </SectionInfo>
                {linkBtn &&
                    <LinkBtnArea>
                        {Array.isArray(linkBtn)
                        ?(
                            linkBtn.map((item, index) => (
                                <LinkBtn target='_blank' href={item.link}><p>{item.text}</p><img src={require('../assets/images/icons/link_arrow.png')} alt={'btn_arrow'} /></LinkBtn>
                            ))
                        )
                        : <LinkBtn target='_blank' href={linkBtn.link}><p>{linkBtn.text}</p><img src={require('../assets/images/icons/link_arrow.png')} alt={'btn_arrow'} /></LinkBtn>
                        }
                    </LinkBtnArea>
                }  
            </SectionTextArea>
            {sectionImg && Array.isArray(sectionImg)
                ? sectionImg.map((item, index) => (
                    <SectionImgArea sectionType={type} key={index} src={require(`../assets/images/works/${item.src}`)} alt={`${item.alt}`} />
                ))
                : null
            }
        </SectionArea>
        
        </>
    )
}