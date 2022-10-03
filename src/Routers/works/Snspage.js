import React from 'react';
import styled from 'styled-components';
import WorkContents from '../../Components/workContents';
import { ContentImg } from '../../Components/workImages';
import WorkNavTab from '../../Components/workNavTab';
import WorkTemplate from '../../Components/workTemplate';
import { device, lightTheme } from '../../theme';

const InnerText = styled.p`
    width: 100%;
    margin: 0 auto;
    max-width: ${lightTheme.maxWidth};
    white-space: inherit;
    padding: 0 16px;

    @media ${device.laptop}{
        white-space: pre-line;
    }
`;

const Table = styled.div`
    width: 100%;
    margin: 24px auto 0;
    max-width: ${lightTheme.maxWidth};
`;

const TableHead = styled.div`
    display: flex;
    gap: 8px;
`;

const Subject = styled.p`
    padding: 20px 16px;
    background: #FBFBFF;
    color: #555;
    border-bottom: 1px solid #aaa;
    width: 100%;
`;

const TableBody = styled.div`
    display: flex;
    gap: 8px;
`;

const TableText = styled.p`
    width: 100%;
    padding: 20px 16px;
    white-space: pre-line;
`;

const TableFooter = styled.div`
    border-radius: 8px;
    display: flex;
    border: 1px solid #eaeaea;
    overflow: hidden;
    margin-top: 40px;
`;

const TFTitle = styled.p`
    color: #fff;
    background: #0000ff;
    font-weight: 700;
    padding: 20px 40px;
`;

const TFText = styled.p`
    width: 100%;
    padding: 20px 40px;
`;

const SplitContents = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 40px auto 0;

`;

const LeftContent = styled.div`
    width: 100%;
`;

const RightContent = styled.div`
    width: 100%;
`;


export default function Snspage () {
    return (
        <>
            <WorkTemplate
                mainTitle={`아이엠미니 소셜 미디어\n운영 및 광고배너 제작`}
                client={'아이엠미니'}
                workArea={'기획, 디자인'}
                tools={['ai', 'ps']}
                explan={
                    `인스타그램 활성화를 위한 소셜미디어 운영 계획서를 작성하고 관련 콘텐츠 및 이벤트를 제안 및 제작하였습니다.
                    이벤트 및 광고에 필요한 배너제작에 참여하였습니다.
                    
                    콘텐츠 사이즈 : 1080 * 1350px`
                }
                bannerImg={'snspage/snspage_banner.png'}
                contents={
                    <>
                        <WorkNavTab
                            id={'section01'}
                            focusNum={0}
                            navItem={[{text:'01. 소셜미디어 운영 과정 및 성과', link:'section01'}, {text:'02. 소셜미디어 운영 계획서', link:'section02'}, {text:'03. 소셜미디어 콘텐츠', link:'section03'}]}
                            title={'소셜미디어 운영 과정 및 성과'}
                        />

                        <ContentImg src={'snspage/snspage_process.png'} alt={'운영 과정'} padding={'0 16px'} />
                        <InnerText>{`기존에 운영하고 있던 인스타그램의 문제점을 분석하고 인스타 계정에 페르소나를 부여하여 고개과 소통하고 친근한 이미지로 다가가기 위해 노력하였습니다.
4월28일 본격적인 운영을 시작하고 8월 5일까지 컨텐츠를 제작하였으며, 운영 결과 기존 대비 팔로워수 300%증가하였습니다.`}</InnerText>
                        <ContentImg src={'snspage/snspage_result.png'} alt={'운영 성과'} padding={'40px 16px'} />

                        <WorkNavTab
                            id={'section02'}
                            focusNum={1}
                            navItem={[{text:'01. 소셜미디어 운영 과정 및 성과', link:'section01'}, {text:'02. 소셜미디어 운영 계획서', link:'section02'}, {text:'03. 소셜미디어 콘텐츠', link:'section03'}]}
                            title={'소셜미디어 운영 계획서'}
                            text={`소셜미디어 운영의 필요성 및 운영을 위한 기획을 작성하였습니다. 현재 서비스 및 제품의 가치와 커뮤니케이션의 장단점 등을 분석하고 소셜미디어 운영목적을 정하였습니다.
                            이후 페르소나 작성과 만들어질 콘텐츠의 레퍼런스를 조사한 뒤 콘텐츠 제작을 진행하였습니다.`}
                        />

                        <WorkContents
                            title={'02-1. DIY 제품의 핵심 가치와 행동'}
                            padding={'80px 0 0'}
                        >
                            <ContentImg src={'snspage/snspage_keyword.png'} alt={'코딩 이미지'} padding={'40px 16px'} />
                            <InnerText>
                                {`성취감과 즐거움을 같은 카테고리로 묶어 성취감을 통한 즐거움을 위해 많은 노력을 해왔습니다. 하지만 즐거움은 성취감을 통해서만 오지 않습니다.
                                배송 과정에서부터 제품 완성까지 전반의 과정에 즐거움이 생길 수 있습니다. 앞으로 핵심가치 중 하나인 즐거움이라는 키워드를 위한 액션이 필요하다 생각합니다.`}
                            </InnerText>
                        </WorkContents>

                        <WorkContents
                            title={'02-2. 지금까지 커뮤니케이션의 장단점'}
                        >
                            <Table>
                                <TableHead>
                                    <Subject>현재 커뮤니케이션</Subject>
                                    <Subject>장점</Subject>
                                    <Subject>단점</Subject>
                                </TableHead>
                                <TableBody>
                                    <TableText>
                                        {`∙ 카카오톡 채널, 전문 상담원을 통한 CS 및 제작 도움
                                        ∙ 분기별 고객 설문조사 실시`}
                                    </TableText>
                                    <TableText>∙ 고객 불만 및 제품 문제를 해결하기 위해 꾸준한 소통</TableText>
                                    <TableText>∙ 고객과의 대화보다는 문제 해결을 위한 소통에 가까움</TableText>
                                </TableBody>
                                <TableFooter>
                                    <TFTitle>Solution</TFTitle>
                                    <TFText>인스타그램을 이용해 리그램, 베스트 리뷰 선정, 타겟과 제품 성격에 맞는 재미있는 콘텐츠로 고객과의 대화를 더 활성화하고 핵심가치인 즐거움을 강화시키자</TFText>
                                </TableFooter>
                            </Table>   
                        </WorkContents>

                        <WorkContents
                            title={'02-1. DIY 제품의 핵심 가치와 행동'}
                            padding={'80px 0 0'}
                        >
                            <SplitContents>
                                <LeftContent>
                                    <ContentImg src={'snspage/snspage_persona.png'} alt={'페르소나 이미지'} />
                                </LeftContent>

                                <RightContent>
                                    <ContentImg src={'snspage/snspage_persona02.png'} alt={'컨텐츠 이미지'} />
                                </RightContent>
                            </SplitContents>
                        </WorkContents>

                        <WorkNavTab
                            id={'section03'}
                            focusNum={2}
                            navItem={[{text:'01. 소셜미디어 운영 과정 및 성과', link:'section01'}, {text:'02. 소셜미디어 운영 계획서', link:'section02'}, {text:'03. 소셜미디어 콘텐츠', link:'section03'}]}
                            title={'소셜미디어 콘텐츠'}
                            text={`설정한 페르소나와 운영 목적에 맞는 콘텐츠를 제작하여 업로드하였습니다.`}
                        />

                        <ContentImg src={'snspage/snspage_ui.png'} alt={'sns 콘텐츠 이미지'} margin={'80px 0 -40px'} type={'fullWidth'} />
                    </>
                }
            />
        </>
    )
}