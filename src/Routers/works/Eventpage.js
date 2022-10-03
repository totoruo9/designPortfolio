import React from 'react';
import { ContentImg } from '../../Components/workImages';
import WorkNavTab from '../../Components/workNavTab';
import WorkTemplate from '../../Components/workTemplate';

export default function EventPage () {
    return (
        <>
            <WorkTemplate
                mainTitle={`tvN / DNA moters\n팝업스토어 이벤트 페이지`}
                client={'Sweetspot'}
                workArea={'디자인, 개발'}
                tools={['ai', 'ps', 'html', 'css', 'js']}
                explan={
                    `tvN, DNA moters의 오프라인 팝업스토어의 이베트 전용 페이지 제작에 참여하였습니다.`
                }
                bannerImg={'eventpage/eventpage_banner.png'}
                contents={
                    <>
                        <WorkNavTab
                            id={'section01'}
                            focusNum={0}
                            navItem={[{text:'01. tvN15주년 이벤트 페이지', link:'section01'}, {text:'02. 디앤에이모터스 이벤트 페이지', link:'section02'}]}
                            title={'tvN15주년 팝업 스토어 이벤트 페이지'}
                            type={'vertical'}
                            text={
                                `tvN15주년 오프라인 팝업스토어 이벤트 페이지 제작에 참여하였었습니다.
                                반응형 사이트로 제작됐으며 행사와 이벤트정보를 담은 정보전달용 사이트입니다.`
                            }
                            linkBtn={{link :'https://totoruo9.github.io/tvnfunpark15/index.html', text: '사이트 바로가기'}}
                            sectionImg={[{src:'eventpage/eventpage_tvnMockup.png', alt:'tvN15주년 페이지 목업'}]}
                        />

                        <ContentImg src={'eventpage/eventpage_tvnUI.png'} alt={'tvN15주년 페이지 UI'} type={'fullWidth'} margin={'80px 0 0'} />

                        <WorkNavTab
                            id={'section02'}
                            focusNum={1}
                            navItem={[{text:'01. tvN15주년 이벤트 페이지', link:'section01'}, {text:'02. 디앤에이모터스 이벤트 페이지', link:'section02'}]}
                            title={'디앤에이모터스 팝업스토어 이벤트페이지'}
                            type={'vertical'}
                            text={
                                `DNA moters 오프라인 팝업스토어 이벤트 페이지 제작에 참여하였었습니다.
                                반응형 사이트로 제작됐으며 행사와 이벤트정보를 담은 정보전달용 사이트입니다.`
                            }
                            linkBtn={{link :'https://totoruo9.github.io/DNAmoters-eventpage/index.html', text: '사이트 바로가기'}}
                            sectionImg={[{src:'eventpage/eventpage_dnaMockup.png', alt:'dna 페이지 목업'}]}
                        />

                        <ContentImg src={'eventpage/eventpage_dnaUI.png'} alt={'dna 페이지 UI'} type={'fullWidth'} margin={'80px 0 -40px'} />
                    </>
                }
            />
        </>
    )
}