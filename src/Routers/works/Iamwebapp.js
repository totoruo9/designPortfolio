import React from 'react';
import styled from 'styled-components';
import WorkContents from '../../Components/workContents';
import { ContentImg } from '../../Components/workImages';
import WorkNavTab from '../../Components/workNavTab';
import WorkTemplate from '../../Components/workTemplate';
import { device, lightTheme } from '../../theme';

const ContentArea = styled.div`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
`;

const SubTitle = styled.h4`
    padding: ${props => props.padding ? props.padding : `120px 16px 16px`};
    color: #555;
    font-size:18px;
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;

    @media ${device} {
        font-size:20px;
    }
`;
const SubText = styled.p`
    padding: 0 16px 16px;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
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
    flex-direction: column;
    :last-child {
        border-bottom: 0px;
    }

    @media ${device.laptop} {
        flex-direction: row;
    }
`;

const TableTd = styled.li`
    display: flex;
    min-width: 147px;
    padding: 8px 0;

    @media ${device.laptop} {
        padding:16px;
    }
`;

const TableNum = styled.p`
    color: #999;
    margin-right: 8px;
    font-size: 18px;
    font-weight: 700;

    @media ${device.laptop} {
        font-size: 20px;
    }
`;

const TableTitle = styled.p`
    color: #555;
    font-size: 18px;
    font-weight: 700;

    @media ${device.laptop} {
        font-size: 20px;
    }
`;

const TableText = styled.p``;

const ColorSection = styled.div`
    display: flex;;
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
    flex-direction: column;

    @media ${device.laptop} {
        flex-direction: row;
    }
`;

const ColorTextWrap = styled.div`
    width: 100%;

    @media ${device.laptop} {
        width: 80%;
    }
`;

const ColorImg = styled.img`
    width: 100%;
    padding-top: 16px;
    padding: 16px;

    @media ${device.laptop} {
        width: 20%;
        padding-top: 120px;
    }
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
    background:  linear-gradient(180deg, #960606 0%, rgba(250, 43, 43, 0) 100%);
    
    p, h4 {
        color: #fff;
    }

    h4 {
        padding: 24px 16px 8px;
    }

    @media ${device.laptop} {
        background: rgba(0,0,0,0);
        h4 {
            padding: 120px 16px 16px;
        }
    }
`;

const DubleGrideImgArea = styled(ContentArea)`
    padding: 16px;
    @media ${device.laptop} {
        padding: 0;
    }
`;

const DGWrap = styled.div`
    display: flex;
    flex-direction:column;
    gap:40px;


    @media ${device.laptop} {
        flex-direction: row;
        gap:0;

        img {
            width: 50%;
            padding: 0;
        }
    }
`;

const DGText = styled.p`
    width:100%;
    text-align: center;
    color: #fff;
    padding: 16px;
    background: #333;
    margin-top: 20px;
    border-radius: 4px;

    @media ${device.laptop} {
        flex-direction: row;
        gap:0;

        img {
            padding: 0;
        }
    }
`;

const GraphTextArea = styled(ContentArea)`
    display: flex;
`;
const GTGraph = styled.div`
    width: 70%;
`;

const GTText = styled.p`
    width: 30%;
    background: #FBFBFF;
    border-radius: 8px;
    padding: 24px 16px;
`;


export default function IamWebApp () {
    return (
        <>
            <WorkTemplate
                mainTitle={`일상 속 작은행복 아이엠미니\nDIY 쇼핑몰 웹앱`}
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
                bannerImg={'iamwebapp/iamwebapp_banner.png'}
                contents={
                    <>
                        <WorkNavTab
                            id={'section01'}
                            focusNum={0}
                            navItem={[{text:'01. 홈페이지 리뉴얼', link:'section01'}, {text:'02. 홈페이지 개선', link:'section02'}, {text:'03. 업무 효율화', link:'section03'}]}
                            title={'홈페이지 리뉴얼'}
                            text={
                                `2021년도 1분기 - 2분기 사이 자사몰 활성화를 위해 기존 홈페이지의 리뉴얼 작업을 진행하였습니다.
                                불편한 UI 개선과 고객 커뮤니티가 활성화된 사이트를 만드는 것을 주요 목표로 하였습니다.
                                하지만 커뮤니티 형태의 사이트는 자사몰의 인지도가 낮고, 초기 양질의 콘텐츠를 제작해낼 인력 부족,
                                카페24 무료 쇼핑몰의 환경적 한계 등으로 인해 인스타그램을 통해 진행하는 방향으로 변경됐습니다.`
                            }
                            sectionImg={[{src:'iamwebapp/iamwebapp_section01.png', alt:'홈페이지 리뉴얼 이미지'}]}
                        />

                        <WorkContents
                            title={'01-1. 제품 리뷰 / 설문조사를 통한 가설 설정'}
                            padding={'80px 0 0'}
                        >
                            <ContentImg src={'iamwebapp/iamwebapp_target.png'} alt={'20대 여성, 모음전, 차별성'} padding={'40px 0px 0px'} />
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
                        </WorkContents>

                        <ColorSection>
                            <ColorTextWrap>
                                <WorkContents
                                    title={'01-2.브랜드 컬러 변경'}
                                    text={
                                        `핵심 고객층을 20대 여성으로 설정하며 기존 브랜드 컬러의 변경이 필요하다 판단하여 작업을 진행하였습니다.
                                        기존 ‘중명도+고체도’의 브랜드 색상의 채도를 더 높여 ‘고명도+고체도’ 특유의 부드럽고 즐거운 느낌을 강조하고자
                                        하였습니다.
                                        
                                        DIY는 무언가를 만드는 동적인 활동임과 동시에 일상 속 취미생활이라는 휴식의 키워드담고 있어
                                        변경된 컬러는 동적인 휴식이라는 키워드에 조금 더 부합하고 상품의 특성과 잘 맞아 해당 컬러로 변경됐습니다.`
                                    }
                                />
                            </ColorTextWrap>

                            <ColorImg src={require('../../images/works/iamwebapp/iamwebapp_color.png')} alt='브랜드 컬러 변경, #E94753 -> #ff4a5b' />
                        </ColorSection>

                        <WorkContents
                            title={'01-3. 페르소나 작성'}
                            text={
                                `가설을 토대로 4명의 핵심 페르소나를 작성하였습니다.`
                            }
                        >
                            <ContentImg
                                type={'horizontal'}
                                images={[
                                    {src:'iamwebapp/iamwebapp_persona1.png', alt:'초등학생 자녀 페르소나'},
                                    {src:'iamwebapp/iamwebapp_persona2.png', alt:'DIY 덕후 페르소나'},
                                    {src:'iamwebapp/iamwebapp_persona3.png', alt:'새로운 취미찾는 대학생 페르소나'},
                                    {src:'iamwebapp/iamwebapp_persona4.png', alt:'중학교 교사 페르소나'}
                                ]}
                            />
                        </WorkContents>

                        

                        <ContentImg src={'iamwebapp/iamwebapp_renewall.png'} alt={'tvN15주년 페이지 UI'} type={'fullWidth'} margin={'120px 0 0'}  minHeight={['400px', '1560px']}>
                            <FullWidthText>
                                <WorkContents
                                    title={'01-4. UI 제작'}
                                    text={
                                        `위 내용을 바탕으로 UI를 제작 하였습니다.`
                                    }
                                    padding={'0'}
                                />
                            </FullWidthText>
                        </ContentImg>


                        <WorkContents
                            title={'01-5. 개발 과정'}
                            text={
                                `카페24에서 제공하는 무료 쇼핑몰의 기본 템플릿 수정하여 홈페이지를 제작하였습니다.
                                개발 과정에서 카페24의 기본 개발 템플릿의 자동완성 기능이 불완전하여 Visual Studio의 ftp-simple을 이용하여 작업 속도 향상 및 오류를 줄여나갔습니다.
                                카페24의 기본 모듈로 작업이 불가능한 영역은 Vanilla js와 카페24 개발자센터의 front API를 활용하여 작업하였습니다.`
                            }
                        >
                            <ContentImg src={'iamwebapp/iamwebapp_coding.png'} alt={'코딩 이미지'} type={'fullWidth'} margin={'40px 0 0'} />
                        </WorkContents>

                        <WorkNavTab
                            id={'section02'}
                            focusNum={1}
                            navItem={[{text:'01. 홈페이지 리뉴얼', link:'section01'}, {text:'02. 홈페이지 개선', link:'section02'}, {text:'03. 업무 효율화', link:'section03'}]}
                            title={'홈페이지 개선'}
                            text={
                                `2021년도 3분기 - 2022년도 2분기 까지 리뉴얼 된 자사몰 개선작업을 진행하였습니다.
                                커뮤니티형 및 플렛폼 형식의 자사몰로 발전을 위한 실방문 사용자 증가와
                                구매 및 재구매율 상승을 목표로 개선을 진행하였습니다.`
                            }
                            sectionImg={[{src:'iamwebapp/iamwebapp_section02.png', alt:'홈페이지 개선 이미지'}]}
                        />


                        <WorkContents
                            title={'02-1. 문제 파악과 저니맵을 통한해 해결방안 분석'}
                            text={
                                `저니맵을 작성하여 리뉴얼된 사이트에서 Pain Point와 Solution을 분석하였습니다.`
                            }
                        >
                            <ContentImg
                                type={'horizontal'}
                                images={[
                                    {src:'iamwebapp/iamwebapp_jeny1.png', alt:'초등학생 자녀 페르소나'},
                                    {src:'iamwebapp/iamwebapp_jeny2.png', alt:'인스타 광고 저니맵'},
                                    {src:'iamwebapp/iamwebapp_jeny3.png', alt:'자연 유입 저니맵'}
                                ]}
                            />
                        </WorkContents>

                        <SubTitle>02-3. 고객방문이 가장 많은 한글설명서 페이지에서의 구매 전환값이 0원</SubTitle>
                        <SubText>
                            쿠팡 및 팜플렛을 통해 사이트에서 가장 많이 고객이 유입되는 페이지는 한글설명서 페이지였습니다. 하지만 대부분의 고객이 해당 페이지에서 한글설명서만 다운받고 이탈하였습니다.<br />
                            이러한 문제점을 개선하기 위해 관련 상품을 한글설명서 내부에 배치하고 회원가입 유도 배너, 이벤트 배너 등을 통해 구매를 유도하였고 개선 결과 페이지 구매값이 증가하는 것을 확인하였습니다.
                        </SubText>

                        <DubleGrideImgArea>
                            <DGWrap>
                                <Image src={require('../../images/works/iamwebapp/iamwebapp_graph01.png')} />
                                <Image src={require('../../images/works/iamwebapp/iamwebapp_graph02.png')} />
                            </DGWrap>
                            <DGText>
                            사용자들이 자사몰 방문시 처음 접근하는 페이지의 비중이 가장 높은 5개를 순서대로 선정하였으며, 해당 페이지를 기준으로 탐색 후 구매가 이루어진 평균 값을 구하였습니다.
                            </DGText>
                        </DubleGrideImgArea>

                        <ContentImg src={'iamwebapp/iamwebapp_ui01.png'} alt={'개선 ui 이미지 01'} type={'fullWidth'} margin={'80px 0 0'} />

                        <SubTitle>02-4. 상품을 찾고 관련 정보를 보기 어려운 불편한 모음전 UI</SubTitle>
                        <SubText>
                            인스타그램 광고를 통해 유입되는 모음전 페이지는 가장 많은 페이지 구매값을 가지고 있었습니다.<br/>
                            하지만 상품을 확인하기 어려운 UI구조를 가지고 있어 구매 전환값을 더 높이기 위해 관련 UI의 편의성을 개선하였습니다.
                        </SubText>

                        <GraphTextArea>
                            <GTGraph>
                                <Image src={require('../../images/works/iamwebapp/iamwebapp_graph03.png')} alt='개선율 보여주는 그래프' />
                            </GTGraph>
                            <GTText>
                            UI 개선 이후 미니어처 모음전에서의<br />
                            이탈율은 약 8% 개선됐으며<br />
                            페이지 값은 약 800원 증가하였습니다.<br />
                            <br />
                            UI 개선 이후 명화그리기 모음전에서의<br />
                            이탈율을 약 7% 개선됐으며<br />
                            페이지 값은 약 130원 증가하였습니다.
                            </GTText>
                        </GraphTextArea>

                        <ContentImg src={'iamwebapp/iamwebapp_ui02.png'} alt={'개선 ui 이미지 02'} type={'fullWidth'} margin={'80px 0 0'} />

                        <SubTitle>02-5. 높은 장바구니 포기율</SubTitle>
                        <SubText>
                            애널리틱스를 통한 고객들의 이동 경로를 분석결과 구매를 망설이거나 장바구니에서 머물러있는 상품이 많다는 것을 확인하였습니다.<br />
                            이러한 상황을 개선하기위해 구매과정에 있는 모든 프로세스의 페이지의 UI를 개선하고 마케팅, 영업팀과의 협업으로 이벤트를 진행하여 장바구니 포기율을 개선하였습니다.
                        </SubText>

                        <ContentImg src={'iamwebapp/iamwebapp_graph04.png'} alt={'개선 그래프'} padding={'40px 0 0'} />
                        <ContentImg src={'iamwebapp/iamwebapp_ui03.png'} alt={'개선 ui 이미지 03'} type={'fullWidth'} margin={'80px 0px 0px'} />

                        <WorkNavTab
                            id={'section03'}
                            focusNum={2}
                            navItem={[{text:'01. 홈페이지 리뉴얼', link:'section01'}, {text:'02. 홈페이지 개선', link:'section02'}, {text:'03. 업무 효율화', link:'section03'}]}
                            title={'업무 효율화'}
                            text={
                                `업무 속도 개선 및 효율성을 위해 반복적인 작업과 협업에 필요한 요소에 대한 작업을 진행하였습니다.`
                            }
                        />

                        <SubTitle padding={'80px 16px 16px'}>03-1. 상세페이지 자동 제작 프로그램</SubTitle>
                        <SubText>
                            똑같은 형식의 상세페이지를 매달 신상품이 추가될 때마다 20-30개씩 작업하여 핵심 아젠다에 맞는 작업을 진행하지 못하는 문제점을 발견하였습니다.<br />
                            이러한 이유로 Java Engineer와 협업하여 상세페이지 자동 제작 프로그램을 제작해 작업 효율성을 높였습니다. 해당 프로그램의 구동 방식 및 디자인 가이드를 작성하였으며 이후 오류발생시 개선하였습니다.
                        </SubText>

                        <ContentImg src={'iamwebapp/iamwebapp_step.png'} alt={'개선 단걔 표'} />
                        <ContentImg src={'iamwebapp/iamwebapp_productInfoPage.png'} alt={'자동생성 상세페이지'} type={'fullWidth'} margin={'40px 0 0'} />

                        <SubTitle>02. 디자인 시스템 작성</SubTitle>
                        <SubText>
                            외주 및 협업시 통일된 디자인 UI를 위해 디자인 시스템이 필요하다 판단하여 해당 작업을 진행하였습니다.
                        </SubText>

                        <ContentImg src={'iamwebapp/iamwebapp_designSystem.png'} alt={'디자인 시스템 이미지'} type={'fullWidth'} margin={'40px 0 -40px'} />
                    </>
                }
            />
        </>
    )
}