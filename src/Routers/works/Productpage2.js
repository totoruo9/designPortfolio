import React from 'react';
import WorkContents from '../../Components/workContents';
import { ContentImg } from '../../Components/workImages';
import WorkTemplate from '../../Components/workTemplate';

export default function Productpage2 () {
    return (
        <>
            <WorkTemplate
                mainTitle={`FULLSAT\n제품 상세페이지`}
                client={'FULLSAT'}
                workArea={'기획, 디자인'}
                explan={
                    `제품 상세페이지 제작시 경쟁사 분석, 카피라이팅 및 구성에 대한 기획을 진행하였고 필요시 간단한 사진촬영과 전문 업체에 맡기기 위한 촬영 구도에 대한 기획에 참여하였습니다.
                    이후 상세페이지 디자인 작업을 진행하였습니다.
                    
                    상세페이지 가로 사이즈 : 860~1000px`
                }
                tools={['ps', 'ai']}
                bannerImg={'productpage02/productpage_banner.png'}
                contents={
                    <>
                        <WorkContents
                            title={'상세페이지 기획 및 제작 과정'}
                        >
                            <ContentImg src={'productpage02/productpage_process.png'} alt={'셍세페이지 제작 프로세스'} padding={'0 16px 24px 16px'} />
                            <ContentImg src={'productpage02/productpage_result.png'} alt={'상세페이지'} type={'fullWidth'} margin={'80px 0 -40px'} />
                        </WorkContents>
                        
                    </>
                }
            />
        </>
    )
}