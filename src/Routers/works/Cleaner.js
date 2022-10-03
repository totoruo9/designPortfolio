import React from 'react';
import WorkContents from '../../Components/workContents';
import { ContentImg } from '../../Components/workImages';
import WorkNavTab from '../../Components/workNavTab';
import WorkTemplate from '../../Components/workTemplate';

export default function Cleaner () {
    return (
        <>
            <WorkTemplate
                mainTitle={`와디즈 3억 달성 초음파 세척기\n상세페이지 및 판매 사이트`}
                client={'FULLSAT'}
                workArea={'기획, 디자인, 개발'}
                tools={['ai', 'ps', 'xd', 'html', 'css', 'js']}
                explan={
                    `FULLSAT 초음파 세척기의 상세페이지 / 패키지 기획, 디자인 작업에 참여하여 와디즈에서 약 3억원을 달성하였습니다.
                    이후 살균 초음파 세척기를 2세대 상품으로 출시하면서 해당 상품을 판매하기 위한 사이트 제작을 진행하였습니다.`
                }
                bannerImg={'cleaner/cleaner_banner.png'}
                contents={
                    <>
                        <WorkNavTab
                            id={'section01'}
                            focusNum={0}
                            navItem={[{text:'01. 상세페이지 및 패키지 기획 / 디자인', link:'section01'}, {text:'02. 상품 판매 사이트', link:'section02'}]}
                            title={'상세페이지 및 패키지 기획 / 디자인'}
                            text={
                                `FULLSAT 초음파 세척기의 와디즈 및 상시판매용 상세페이지 내용 기획, 디자인 및 패키지 작업에 참여하였습니다.
                                디자인 시안을 제작하고 해당 상세페이지 제작에 필요한 사진촬영 기획을 작성하였으며 이후 상세페이지 및 제품 패키지 제작을 진행하였습니다.`
                            }
                        />
                        <WorkContents
                            title={'상세페이지 기획 및 제작 과정'}
                        >
                            <ContentImg src={'cleaner/cleaner_process.png'} alt={'초음파 세척기 제작 프로세스'} padding={'0 16px'} />
                            <ContentImg src={'cleaner/cleaner_package.png'} alt={'초음파 세척기 패키지 및 상세페이지'} type={'fullWidth'} margin={'40px 0 0'} />
                        </WorkContents>

                        

                        <WorkNavTab
                            id={'section02'}
                            focusNum={1}
                            navItem={[{text:'01. 상세페이지 및 패키지 기획 / 디자인', link:'section01'}, {text:'02. 상품 판매 사이트', link:'section02'}]}
                            title={'상품 판매 사이트'}
                            text={
                                `카페24와 html, css, javascript 언어를 이용하여 사이트를 제작하였으며 해당 상품 판매를 위한 목적으로 제작됐습니다.`
                            }
                        />

                        <ContentImg src={'cleaner/cleaner_ui.png'} alt={'dna 페이지 UI'} type={'fullWidth'} margin={'80px 0 -40px'} />
                    </>
                }
            />
        </>
    )
}