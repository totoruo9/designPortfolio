import React from 'react';
import WorkContents from '../../Components/workContents';
import { ContentImg } from '../../Components/workImages';
import WorkTemplate from '../../Components/workTemplate';

export default function Bannerpage () {
    return (
        <>
            <WorkTemplate
                mainTitle={`아이엠미니 / 삼성생명\n광고배너 제작`}
                client={'아이엠미니 / 삼성생명'}
                workArea={'디자인'}
                explan={
                    `이벤트 및 광고에 필요한 배너제작에 참여하였습니다.
                    
                    상세페이지 가로 사이즈 : 860~1080px`
                }
                tools={['ps', 'ai']}
                bannerImg={'bannerpage/bannerpage_banner.png'}
                contents={
                    <ContentImg src={'bannerpage/bannerpage_result.png'} alt={'상세페이지'} type={'fullWidth'} margin={'80px 0 -40px'} />
                }
            />
        </>
    )
}