import Template from 'Components/template';
import firebase from '../Firebase';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { lightTheme } from 'theme';
import { collection, getDocs, getFirestore, initializeFirestore, query, addDoc } from 'firebase/firestore/lite';
import { useForm } from 'react-hook-form';

const InnerContainer = styled.div`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
`;

const Container = styled(InnerContainer)`
    margin-top: 160px;
`;

const Profile = styled.img``;

const ProfileWrap = styled.div`
    display: flex;
    gap: 40px;
`;

const Info = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const PrivacyWrap = styled.div``;

const PrivacyName = styled.p`
    color: #767676;
`;
const PrivacyText = styled.p`
    color: #333;
    margin-bottom: 16px;
`;

const CareerMapWrap = styled.div`
    display: flex;
    justify-content: end;
    flex-direction: column;
    margin-bottom: 120px;
`;
const CareerDate = styled.p`
    margin-top: 16px;
    font-size: 14px;
    line-height: 22px;
`;
const CareerInfo = styled.p`
    color: #333;
    font-size: 14px;
    line-height: 22px;
`;

const LinkWrap = styled.div`
    
`;

const Linked = styled(Link)`
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: space-between;
    margin-bottom: 8px;

    img {
        width: 24px;
        height: 24px;
    }
`;

const LinkName = styled.p`
    font-size: 16px;
    line-height: 24px;
`;

const flowAnimate = keyframes`
    from {
        transform: translateX(0px);
    }
    to {
        transform: translateX(3000px);
    }
`;

const BannerWrap = styled.div`
    position: relative;
    z-index:-1;
    margin-top: -80px;
`;

const Banner = styled.div`
    justify-content: center;
    animation: ${flowAnimate} 100s linear infinite; 
    display: flex;
`;

const Tools = styled.div`
    display: flex;
    gap: 200px;
`;

const ToolWrap = styled.div``;

const Title = styled.p`
    font-size: 24px;
    color: #333;
    padding: 16px 16px 0 16px;
    font-weight: 700;
`;

const ToolIcons = styled.div`
    display: flex;
    padding: 20px 16px;
    gap: 8px;
`;

const Text = styled.p`
    padding: 16px;
`;

const CollaboWrap = styled.form`
    display: flex;
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
    padding: 40px 16px;
    gap: 20px;
`;
const Category = styled.div`
    width: 100%;
`;
const CollaboTitle = styled.div`
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
    color: #767676;
`;


const CateItemWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;
const CateItem = styled.p`
    border: 1px solid #F0F1FA;
    padding: 8px 16px;
    border-radius: 4px;
    color: ${props => props.clickOn ? '#fff' : '#aaa'};
    font-size:14px;
    line-height: 24px;

    background: ${props => props.clickOn ? '#0000ff' : '#fff'};
`;

const TextArea = styled.div`
    width: 100%;
`;

const InputTextArea = styled.textarea`
    width:100%;
    height: 100%;
    padding: 16px;
    color: #767676;
    resize: none;
    background: #FBFBFF;
    border: 1px solid #F0F1FA;
    border-radius: 8px;

    ::placeholder {
        color: #aaa;
    }
`;

const InfoArea = styled.div`
    width: 100%;
`;
const InputWrap = styled.div``;

const Label = styled.div`
    margin-top: 24px;

    &:first-child {
        margin-top: 0;
    }
`;

const InputStyle = styled.input`
    width: 100%;
    background: #FBFBFF;
    border: 1px solid #F0F1FA;
    border-radius: 8px;
    padding: 8px 16px;
    margin-top:8px;

    ::placeholder {
        color: #aaa;
    }
`;

const SubmitBtn = styled.input``;

const categoryType = [
    '채용',
    '웹 개발',
    '웹 디자인',
    '웹 기획',
    '모바일 디자인',
    '모바일 기획',
    '뉴스레터',
    '상세페이지 제작',
    '배너 제작',
    '사이드프로젝트'
];




const db = initializeFirestore(firebase,{
    experimentalForceLongPolling: true,
});

const test = getFirestore();

export default function About() {
    // db의 users 컬렉션을 가져옴
    const contectRef = collection(db, "contect");
    const [contectCnt, setContectCnt] = useState([]);
    const {register, handleSubmit, watch, formState: {errors}, reset} = useForm();
    const [cateFocues, setCateFocuse] = useState([]);

    const checkCate = (data) => {
        const text = data.target.innerText;
        const checker = cateFocues.includes(text);

        if(checker) {
            const filterText = cateFocues.filter(item => item !== text);
            setCateFocuse(filterText);
        } else {
            setCateFocuse(prev => [...prev, text]);
        }
        
     };

     const onSubmit = async(data) => {
         const {
            request,
            name,
            number,
            email} = data;

        try {            
            const docRef = await addDoc(collection(test, "contect"), {
                category: cateFocues,
                name: name,
                request: request,
                number: number,
                email: email,
                check: false
            });

            reset();
        } catch (e) {
            console.error(e);
        };

        
     };


    
    useEffect(()=>{
        const getContent = async () => {
            const data = await getDocs(contectRef);
            setContectCnt(data.docs);
        }

        getContent();
    },[]);

    

    return (
        <>
            <Template contents={
                <>
                <Container>
                    <ProfileWrap>
                        <Profile src={require('../images/about/profile.png')} />
                        <Info>
                            <PrivacyWrap>
                                <PrivacyName>Name</PrivacyName>
                                <PrivacyText>Kim Jin Hyuk</PrivacyText>

                                <PrivacyName>Career</PrivacyName>
                                <PrivacyText>4th year (2022)</PrivacyText>

                                <PrivacyName>E-mail</PrivacyName>
                                <PrivacyText>wlsgurral10@gmail.com</PrivacyText>

                                <PrivacyName>Kakao</PrivacyName>
                                <PrivacyText>wlsgurrlaa</PrivacyText>

                                <PrivacyName>Birth</PrivacyName>
                                <PrivacyText>1994</PrivacyText>
                            </PrivacyWrap>
                            <CareerMapWrap>
                                <CareerDate>2021</CareerDate>
                                <CareerInfo>Public ‘뜨브뜨’ Newsletter</CareerInfo>

                                <CareerDate>2021</CareerDate>
                                <CareerInfo>tvN / DNA Moters Eventpage</CareerInfo>

                                <CareerDate>2019</CareerDate>
                                <CareerInfo>DNFL Side Project Team</CareerInfo>

                                <CareerDate>2018-2022</CareerDate>
                                <CareerInfo>KBG International</CareerInfo>

                                <CareerDate>2013-2020</CareerDate>
                                <CareerInfo>Kwangwon Institute of Information Technology</CareerInfo>
                            </CareerMapWrap>
                            <div></div>
                            <LinkWrap>
                                <Linked to='https://github.com/totoruo9'><LinkName>Git hub</LinkName><img src={require('../images/icons/export.png')} /></Linked>
                                <Linked to='https://blog.naver.com/dnfl_cmc'><LinkName>DNFL Blog</LinkName><img src={require('../images/icons/export.png')} /></Linked>
                                <Linked to='https://ddbdd.stibee.com/'><LinkName>뜨브뜨 Newsletter</LinkName><img src={require('../images/icons/export.png')} /></Linked>
                                <Linked to='https://www.instagram.com/wegle.letter/'><LinkName>wegle.letter</LinkName><img src={require('../images/icons/export.png')} /></Linked>
                            </LinkWrap>
                        </Info>
                    </ProfileWrap>
                </Container>
                <BannerWrap>
                    <Banner> <img src={require('../images/banner.png')}/> <img src={require('../images/banner.png')}/> </Banner>
                </BannerWrap>

                <Container style={{margin: '64px auto 0'}}>
                    <Tools>
                        <ToolWrap>
                            <Title>Design Tools</Title>
                            <ToolIcons>
                                <img src={require('../images/icons/skill/ai.png')} />
                                <img src={require('../images/icons/skill/ps.png')} />
                                <img src={require('../images/icons/skill/xd.png')} />
                                <img src={require('../images/icons/skill/figma.png')} />
                            </ToolIcons>
                        </ToolWrap>

                        <ToolWrap>
                            <Title>Develop Skill</Title>
                            <ToolIcons>
                                <img src={require('../images/icons/skill/html.png')} />
                                <img src={require('../images/icons/skill/css.png')} />
                                <img src={require('../images/icons/skill/js.png')} />
                                <img src={require('../images/icons/skill/react.png')} />
                                <img src={require('../images/icons/skill/firebase.png')} />
                                <img src={require('../images/icons/skill/git.png')} />
                            </ToolIcons>
                        </ToolWrap>
                    </Tools>

                    <Title style={{marginTop: '80px'}}>About</Title>
                    <Text>
                    온갖 우는 따뜻한 끓는 이성은 있으랴? 천지는 그들은 찬미를 되려니와, 그들에게 할지라도 생생하며, 찾아다녀도, 듣는다. 이것이야말로 얼마나 능히 너의 봄바람이다. 있는 열락의 싹이 능히 봄날의 동력은 이것이다. 피어나는 힘차게 같이, 인생의 크고 뭇 찾아 위하여서. 가치를 끓는 가장 보이는 말이다. 영원히 이상이 열락의 뿐이다. 거친 실로 인도하겠다는 것이다.보라, 이것을 못할 청춘의 그것은 이상은 보라. 인간의 두기 돋고, 인생을 품었기 옷을 청춘에서만 사막이다. 많이 용감하고 용기가 아름다우냐?
                    </Text>

                    <Title style={{marginTop: '80px'}}>Collaboration or Inquiries</Title>
                    <CollaboWrap onSubmit={handleSubmit(onSubmit)}>
                        <Category>
                            <CollaboTitle>카테고리</CollaboTitle>
                            <CateItemWrap>
                                {
                                    categoryType.map((item, index) => (
                                        <CateItem key={index} clickOn={cateFocues.includes(item)} onClick={checkCate}>{item}</CateItem>
                                    ))
                                }
                            </CateItemWrap>
                        </Category>
                        <TextArea>
                            <CollaboTitle>문의 및 프로젝트 내용</CollaboTitle>
                            <InputTextArea placeholder='문의 및 프로젝트 상세 내용을 기술해주세요.' {...register('request', {required: true})} />
                        </TextArea>
                        <InfoArea>
                            <InputWrap>
                                <Label>이름</Label>
                                <InputStyle type='text' placeholder='문의주신분의 성함을 알려주세요.' {...register('name', {required: true})} />

                                <Label>연락처</Label>
                                <InputStyle type='text' placeholder='연락드릴 연락처를 알려주세요.' {...register('number', {required: true})} />

                                <Label>이메일</Label>
                                <InputStyle type='email' placeholder='연락드릴 이메일을 알려주세요.' {...register('email', {required: true})} />
                            </InputWrap>

                            <SubmitBtn type="submit" value='전송하기' />
                        </InfoArea>
                    </CollaboWrap>
                </Container>

                <Container style={{margin: '64px auto 0'}}>
                    {
                        contectCnt.map((item, index) => {
                            const {name, email, number, category, request} = item.data();
                            return(
                                <div key={index+email}>
                                    <p>{email}</p>
                                    <p>{name}</p>
                                </div>
                            )
                        })
                    }
                </Container>
                </>
            } />
        </>
    )
};