import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device, lightTheme } from '../theme';

const NavigationTab = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    padding-top: 24px;

    @media ${device.laptop} {
        padding-top: 120px;
    }
`;

const NavWrap = styled.ul`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    display: flex;
    padding: 24px 16px;
    border-bottom: 1px solid #eaeaea;
`;

const NavItem = styled.li`
    padding: 8px 8px;
    border-radius: 8px;
    background: ${props => props.focus ? '#0000ff' : '#fff'};
    color: ${props => props.focus ? '#fff' : '#333'};
    margin-right: 8px;
    text-align: center;

    :last-child {
        padding: 8px 16px;
        margin-right: 0;
    }

    @media ${device.laptop} {
        padding: 8px 32px;
        margin-right: 24px;
        border-radius: 24px;
    }
`;

const ContentArea = styled.div`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
`;

const SectionArea = styled(ContentArea)`
    margin: 8px auto 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media ${device.laptop} {
        flex-direction: ${props => props.sectionType !== 'horezontal'
 ? 'column' : 'row'};
        margin: 64px auto 0;
    }
`;

const SectionTextArea = styled.div`
    padding: 16px;
`;

const SectionNum = styled.p`
    font-size: 24px;
    line-height: 32px;
    font-weight: 900;
    font-family: 'Roboto';
    color: #333;

    @media ${device.laptop} {
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
`;

const SectionInfo = styled.p`
    white-space: inherit;

    @media ${device.laptop}{
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
`;

const LinkBtnArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap:20px;
`;

const LinkBtn = styled.a`
    padding: 8px 24px;
    border: 1px solid #0000ff;
    gap: 4px;
    border-radius: 28px;
    color: #0000ff;
    width: auto;
    font-size: 20px;
    line-height: 40px;
    margin-top: 64px;
    display: flex;
    align-items: center;
`;

export default function WorkNavTab ({id, navItem, focusNum, title, text, sectionImg, linkBtn, type='horezontal'}) {
    return (
        <>
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
                                <LinkBtn target='_blank' href={item.link}><p>{item.text}</p><img src={require('../images/icons/link_arrow.png')} alt={'btn_arrow'} /></LinkBtn>
                            ))
                        )
                        : <LinkBtn target='_blank' href={linkBtn.link}><p>{linkBtn.text}</p><img src={require('../images/icons/link_arrow.png')} alt={'btn_arrow'} /></LinkBtn>
                        }
                    </LinkBtnArea>
                }  
            </SectionTextArea>
            {sectionImg && Array.isArray(sectionImg)
                ? sectionImg.map((item, index) => (
                    <SectionImgArea sectionType={type} key={index} src={require(`../images/works/${item.src}`)} alt={`${item.alt}`} />
                ))
                : null
            }
        </SectionArea>
        
        </>
    )
}