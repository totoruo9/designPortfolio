import React from 'react';
import styled from 'styled-components';
import WorkNavTab from '../../Components/workNavTab';
import WorkTemplate from '../../Components/workTemplate';
import { lightTheme } from '../../theme';

const ContentArea = styled.div`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
`;

const SectionArea = styled(ContentArea)`
    margin: 64px auto 0;
    display: flex;
    justify-content: space-between;
`;

const SectionTextArea = styled.div`
    padding: 16px;
`;

const SectionNum = styled.p`
    font-size: 40px;
    line-height: 56px;
    font-weight: 900;
    font-family: 'Roboto';
    color: #333;
`;

const SectionTitle = styled.p`
    font-size: 24px;
    line-height: 40px;
    margin-bottom: 8px;
    font-weight: 700;
    color: #333;
`;

const SectionInfo = styled.p``;

const SectionImgArea = styled.img`
    width: 50%;
    height: auto;
`;



const SubTitle = styled.h4`
    padding: ${props => props.padding ? props.padding : `120px 16px 16px`};
    color: #555;
    font-size:20px;
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
`;
const SubText = styled.p`
    padding: 0 16px 16px;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
`;

const InnerFullImgArea = styled.div`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
    padding: ${props => props.padding ? props.padding : 0};
`;
const InnerFullImg = styled.img`
    width: 100%;
`;

const TargetTable = styled.div`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    padding: 16px;
    margin: 0 auto;
`;

const TableTr = styled.ul`
    padding: 8px 0;
    display: flex;
    border-bottom: 1px solid #eaeaea;
    :last-child {
        border-bottom: 0px;
    }
`;

const TableTd = styled.li`
    display: flex;
    min-width: 147px;
    padding: 16px;
`;

const TableNum = styled.p`
    color: #999;
    margin-right: 8px;
    font-size: 20px;
    font-weight: 700;
`;

const TableTitle = styled.p`
    color: #555;
    font-size: 20px;
    font-weight: 700;
`;

const TableText = styled.p``;

const ColorSection = styled.div`
    display: flex;;
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
`;

const ColorTextWrap = styled.div`
    width:80%;
`;

const ColorImg = styled.img`
    width: 20%;
    padding-top: 120px;
`;

const VerticalScroll = styled.div`
    padding: 40px 80px;
    display: flex;
    gap: 20px;
    filter: drop-shadow(0px 4px 16px rgba(79, 105, 198, 0.15));
    width: 100%;
    overflow-x: scroll;
`;

const VerticalWrap = styled.div``;

const VerticalItem = styled.img``;

const FullWidthImg = styled.div`
    margin-top: 120px;
    width: 100%;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
`;

const FullWidthText = styled(ContentArea)`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,0);
    z-index:10;
    
    p, h4 {
        color: #fff;
    }
`;

export default function IamWebApp () {
    return (
        <>
            <WorkTemplate
                mainTitle={`일상 속 작은 행복 아이엠미니\nDIY 쇼핑몰 웹앱`}
                client={'아이엠미니'}
                workArea={'기획, 디자인, 개발'}
                tools={['ai', 'ps', 'xd', 'figma', 'html', 'css', 'js']}
                explan={
                    `아이엠미니는 미니어처, 명화그리기, 보석십자수 등 취미용 DIY 제품을 판매하는 브랜드입니다.
                    아이엠미니 홈페이지를 기획, 제작하였으며 2018-2022년도까지 꾸준하게 개선을 진행해왔습니다.
                    구글 애널리틱스, 카페24 접속 통계, 뷰저블 등을 통해 정량적 데이터 분석과 설문조사, 네이버 데이터랩, 썸트랜드 등을 이용하여 정성적 분석을 통한 가설을 토대로
                    자사몰 구매 및 재구매율 상승, 회원 증가 및 충성고객 확보를 목표로 개선을 진행해왔습니다.
                    업무 효율성을 위한 상세페이지 자동 생성 프로그램 제작 기획에 참여하였습니다. 다양한 실패와 성공에 대한 경험을 아래 내용으로 담았습니다.`
                }
                bannerImg={'iamwebapp_banner'}
                contents={
                    <>
                        <WorkNavTab
                            id={'section01'}
                            focusNum={0}
                            navItem={[{text:'01. 홈페이지 리뉴얼', link:'section01'}, {text:'02. 홈페이지 개선', link:'section02'}, {text:'03. 업무 효율화', link:'section03'}]}
                        />

                        <SectionArea>
                            <SectionTextArea>
                                <SectionNum>01</SectionNum>
                                <SectionTitle>홈페이지 리뉴얼</SectionTitle>
                                <SectionInfo>
                                2021년도 1분기 - 2분기 사이 자사몰 활성화를 위해 기존 홈페이지의 리뉴얼 작업을 진행하였습니다.<br />
                                불편한 UI 개선과 고객 커뮤니티가 활성화된 사이트를 만드는 것을 주요 목표로 하였습니다.<br />
                                하지만 커뮤니티 형태의 사이트는 자사몰의 인지도가 낮고, 초기 양질의 콘텐츠를 제작해낼 인력 부족,<br />
                                카페24 무료 쇼핑몰의 환경적 한계 등으로 인해 인스타그램을 통해 진행하는 방향으로 변경됐습니다.
                                </SectionInfo>
                                </SectionTextArea>
                            <SectionImgArea src={require('../../images/iamwebapp/iamwebapp_section01.png')} />
                        </SectionArea>



                        <SubTitle padding={'80px 16px 16px'}>01-1. 제품 리뷰 / 설문조사를 통한 가설 설정</SubTitle>
                        <InnerFullImgArea padding={'40px 0px 0px'}><InnerFullImg src={require('../../images/iamwebapp/iamwebapp_target.png')} alt='20대 여성, 모음전, 차별성'/></InnerFullImgArea>
                        <TargetTable>
                            <TableTr>
                                <TableTd>
                                    <TableNum>01</TableNum>
                                    <TableTitle>타켓</TableTitle>
                                </TableTd>
                                <TableTd>
                                    <TableText>미니어처, 명화그리기와 같은 DIY 상품을 구매하는 연령층과 동기에 대한 설문조사를 진행하였습니다. 구매 연령은 20-50대 사이의 여성이 80% 이상을 차지하였고 구매 동기는 취미, 자녀교육,<br />
                                    학교 및 학원 교보재, 인테리어 등의 순으로 조사됐습니다. 마케팅팀과의 소통을 통해 20대 여성의 잠재고객으로서의 가능성을 확인하여 핵심 타겟층으로 설정하였습니다.
                                    </TableText>
                                </TableTd>
                            </TableTr>
                            <TableTr>
                                <TableTd>
                                    <TableNum>02</TableNum>
                                    <TableTitle>모음전</TableTitle>
                                </TableTd>
                                <TableTd>
                                    <TableText>오픈몰 판매율을 토대로 모음전 상품이 일반 상품에 비해 구매율이 높았습니다. 이는 모은전이 일반 상품에 비해 달리는 리뷰 및 판매수가 많아 판매 순위가 올라가서 생긴 효과도 있지만<br />
                                    하나의 페이지에서 관련 상품을 모아서 선택할 수 있다는 편의성에서도 증가하였다는 가설을 세웠습니다.
                                    </TableText>
                                </TableTd>
                            </TableTr>
                            <TableTr>
                                <TableTd>
                                    <TableNum>03</TableNum>
                                    <TableTitle>차별성</TableTitle>
                                </TableTd>
                                <TableTd>
                                    <TableText>중국에서 판매하는 상품을 소싱해오는 상품으로서 타사에서도 판매할 수 있기에 차별성이 부족했습니다.<br />
                                    이러한 문제점을 개선하기 위해 경쟁사를 분석하였고 자체 상품 개발, 한글 설명서 및 영상 설명서 제공, 커뮤니티형 자사몰 제작을 목표로 작업을 진행하였습니다.
                                    </TableText>
                                </TableTd>
                            </TableTr>
                        </TargetTable>



                        <ColorSection>
                            <ColorTextWrap>
                                <SubTitle>01-2.브랜드 컬러 변경</SubTitle>
                                <SubText>핵심 고객층을 20대 여성으로 설정하며 기존 브랜드 컬러의 변경이 필요하다 판단하여 작업을 진행하였습니다.<br />
                                기존 ‘중명도+고체도’의 브랜드 색상의 채도를 더 높여 ‘고명도+고체도’ 특유의 부드럽고 즐거운 느낌을 강조하고자<br />
                                하였습니다.<br />
                                <br />
                                DIY는 무언가를 만드는 동적인 활동임과 동시에 일상 속 취미생활이라는 휴식의 키워드담고 있어<br />
                                변경된 컬러는 동적인 휴식이라는 키워드에 조금 더 부합하고 상품의 특성과 잘 맞아 해당 컬러로 변경됐습니다.
                                </SubText>
                            </ColorTextWrap>

                            <ColorImg src={require('../../images/iamwebapp/iamwebapp_color.png')} alt='브랜드 컬러 변경, #E94753 -> #ff4a5b' />
                        </ColorSection>

                        <SubTitle>01-3. 페르소나 작성</SubTitle>
                        <SubText>가설을 토대로 4명의 핵심 페르소나를 작성하였습니다.</SubText>

                        <VerticalScroll>
                            <VerticalWrap>
                                <VerticalItem src={require('../../images/iamwebapp/iamwebapp_persona1.png')} alt='초등학생 자녀 페르소나' />
                            </VerticalWrap>
                            <VerticalWrap>
                                <VerticalItem src={require('../../images/iamwebapp/iamwebapp_persona2.png')} alt='DiY 덕후 페르소나' />
                            </VerticalWrap>
                            <VerticalWrap>
                                <VerticalItem src={require('../../images/iamwebapp/iamwebapp_persona3.png')} alt='새로운 취미찾는 대학생 페르소나' />
                            </VerticalWrap>
                            <VerticalWrap>
                                <VerticalItem src={require('../../images/iamwebapp/iamwebapp_persona4.png')} alt='중학교 교사 페르소나' />
                            </VerticalWrap>
                        </VerticalScroll>

                        <FullWidthImg>
                            <Image src={require('../../images/iamwebapp/iamwebapp_renewall.png')} alt='리뉴얼된 UI/UX 이미지' />
                            <FullWidthText>
                                <SubTitle>01-4. UI 제작</SubTitle>
                                <SubText>위 내용을 바탕으로 UI를 제작 하였습니다.</SubText>
                            </FullWidthText>
                        </FullWidthImg>


                        <WorkNavTab
                            id={'section02'}
                            focusNum={1}
                            navItem={[{text:'01. 홈페이지 리뉴얼', link:'section01'}, {text:'02. 홈페이지 개선', link:'section02'}, {text:'03. 업무 효율화', link:'section03'}]}
                        />
                    </>
                }
            />
        </>
    )
}