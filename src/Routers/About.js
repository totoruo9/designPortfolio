import Template from 'Components/template';
import firebase from '../Firebase';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { device, lightTheme } from 'theme';
import { Timestamp, collection, getDocs, getFirestore, initializeFirestore, query, addDoc, orderBy } from 'firebase/firestore/lite';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';

const InnerContainer = styled.div`
    width: 100%;
    max-width: ${lightTheme.maxWidth};
    margin: 0 auto;
`;

const Container = styled(InnerContainer)`
    margin-top: 0;

    @media ${device.laptop} {
        margin-top: 160px;
    }
`;

const Profile = styled.img``;

const ProfileWrap = styled.div`
    display: flex;
    gap: 40px;

    flex-direction: column;

    @media ${device.laptop} {
        flex-direction: row;
    }
`;

const Info = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 16px;

    @media ${device.laptop} {
        flex-direction: row;
        padding: 0;
    }
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
    margin-bottom: 32px;    

    @media ${device.laptop} {
        margin-bottom: 120px;
    }
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

const Linked = styled.a`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 8px;
    border: 1px solid #eaeaea;
    padding: 8px 16px;
    border-radius: 8px;

    img {
        width: 24px;
        height: 24px;
    }

    @media ${device.laptop} {
        width: 200px;
        padding: 0;
        border: 0;
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
    overflow: hidden;
    z-index:-1;
    margin-top: -80px;
    display: none;

    @media ${device.laptop} {
        display: block;
    }
`;

const Banner = styled.div`
    justify-content: center;
    animation: ${flowAnimate} 100s linear infinite; 
    display: flex;
`;

const Tools = styled.div`
    display: flex;
    gap: 64px;
    flex-direction: column;

    @media ${device.laptop} {
        gap: 200px;
        flex-direction: row;
    }
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
    flex-direction: column;

    @media ${device.laptop} {
        flex-direction: row;
    }
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
    margin-bottom: 20px;

    @media ${device.laptop} {
        margin:0;
    }

`;
const CateItem = styled.p`
    border: 1px solid #F0F1FA;
    padding: 8px 16px;
    border-radius: 4px;
    color: ${props => props.clickOn ? '#fff' : '#aaa'};
    font-size:14px;
    line-height: 24px;
    cursor: pointer;

    background: ${props => props.clickOn ? '#0000ff' : '#fff'};
`;

const TextArea = styled.div`
    width: 100%;
`;

const InputTextArea = styled.textarea`
    width:100%;
    height: calc(100% - 40px);
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
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
`;
const InputWrap = styled.div``;

const Label = styled.div`
    margin-top: 24px;
    font-size:16px;

    &:first-child {
        margin-top: 0;
    }
`;

const InputStyle = styled.input`
    width: 100%;
    background: #FBFBFF;
    border: 1px solid #F0F1FA;
    border-radius: 8px;
    padding: 16px;
    margin-top:8px;

    ::placeholder {
        color: #aaa;
    }
`;

const SubmitBtn = styled.input`
    width: 100%;
    background: #333;
    color: #fff;
    padding: 8px 16px;
    border: 0;
    border-radius: 8px;
    font-size: 20px;
    line-height:40px;
    margin-top: 64px;
    cursor: pointer;
`;

const BoardWrap = styled.div`
    padding: 40px 0 80px;
    width: 100%;
    background: #FBFBFF;
    margin-bottom: -40px;
`;

const BoardStateWrap = styled(InnerContainer)`
    display: flex;
    padding:16px;
    gap: 20px;
`;

const BoardState = styled.div`
    display: flex;
    gap:8px;
    align-items: center;
    justify-content: center;
`;

const ColorBox = styled.div`
    background: ${props => props.state === 2 ? '#2C8DE7' : props.state === 1 ? "#FFB800" : '#ff0000'};
    width: 12px;
    height:12px;
    border-radius: 50%;
    margin: 6px;
`;


const StateText = styled.p`
    font-size:14px;
    line-height: 24px;
`;

const BoardItemWrap = styled(InnerContainer)`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    justify-content: center;

    @media ${device.laptop} {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const BoardItem = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    padding: 16px;
    background: #fff;
    margin: 0 16px;

    @media ${device.laptop} {
        margin: 0;
    }
`;

const BILeft = styled.div`

`;

const BoardName = styled.div``;
const BoardEmail = styled.div`
    color: #aaa;
    font-size: 14px;
    line-height:20px;
    margin-top:4px;
`;

const BIRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
`;

const BIRDate = styled.div`
    color: #aaa;
    font-size:14px;
    line-height:20px;
    margin-top:4px;
`;

const Blank = styled.div`
    display: none;

    @media ${device.laptop} {
        display: block;
    }
`;



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
    const contectRef = collection(db, "contect");
    const [contectCnt, setContectCnt] = useState([]);
    const {register, handleSubmit, watch, formState: {errors}, reset} = useForm();
    const [cateFocues, setCateFocuse] = useState([]);
    const [fakeDb, setFakeDb] = useState([]);

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

        const date = await dayjs(Timestamp.now().toDate()).format('YY-MM-DD HH:mm:ss');

        try {            
            const docRef = await addDoc(collection(test, "contect"), {
                category: cateFocues,
                name: name,
                request: request,
                number: number,
                email: email,
                check: 0,
                timestamp: date
            });

            setFakeDb(prev => [...prev, {
                category: cateFocues,
                name: name,
                request: request,
                number: number,
                email: email,
                check: 0,
                timestamp: date
            }])

            reset();
        } catch (e) {
            console.error(e);
        };

        
     };


    
    useEffect(()=>{
        const getContent = async () => {
            const q = query(contectRef, orderBy("timestamp", 'desc'));
            const data = await getDocs(q);
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
                        <Profile src={require('../assets/images/about/profile.png')} />
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
                            <Blank></Blank>
                            <LinkWrap>
                                <Linked target='_blank' href='https://github.com/totoruo9'><LinkName>Git hub</LinkName><img src={require('../assets/images/icons/export.png')} /></Linked>
                                <Linked target='_blank' href='https://blog.naver.com/dnfl_cmc'><LinkName>DNFL Blog</LinkName><img src={require('../assets/images/icons/export.png')} /></Linked>
                                <Linked target='_blank' href='https://ddbdd.stibee.com/'><LinkName>뜨브뜨 Newsletter</LinkName><img src={require('../assets/images/icons/export.png')} /></Linked>
                                <Linked target='_blank' href='https://www.instagram.com/wegle.letter/'><LinkName>wegle.letter</LinkName><img src={require('../assets/images/icons/export.png')} /></Linked>
                            </LinkWrap>
                        </Info>
                    </ProfileWrap>
                </Container>
                <BannerWrap>
                    <Banner> <img src={require('../assets/images/banner.png')}/> <img src={require('../assets/images/banner.png')}/> </Banner>
                </BannerWrap>

                <Container style={{margin: '64px auto 0'}}>
                    <Tools>
                        <ToolWrap>
                            <Title>Design Tools</Title>
                            <ToolIcons>
                                <img src={require('../assets/images/icons/skill/ai.png')} />
                                <img src={require('../assets/images/icons/skill/ps.png')} />
                                <img src={require('../assets/images/icons/skill/xd.png')} />
                                <img src={require('../assets/images/icons/skill/figma.png')} />
                            </ToolIcons>
                        </ToolWrap>

                        <ToolWrap>
                            <Title>Develop Skill</Title>
                            <ToolIcons>
                                <img src={require('../assets/images/icons/skill/html.png')} />
                                <img src={require('../assets/images/icons/skill/css.png')} />
                                <img src={require('../assets/images/icons/skill/js.png')} />
                                <img src={require('../assets/images/icons/skill/react.png')} />
                                <img src={require('../assets/images/icons/skill/firebase.png')} />
                                <img src={require('../assets/images/icons/skill/git.png')} />
                            </ToolIcons>
                        </ToolWrap>
                    </Tools>

                    <Title style={{marginTop: '80px', display: 'none'}}>About</Title>
                    <Text style={{display: 'none'}}>
                    {``}
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

                <BoardWrap styled={{marginTop: '64px'}}>
                    <BoardStateWrap>
                        <BoardState>
                            <ColorBox state={0} />
                            <StateText>확인 전</StateText>
                        </BoardState>

                        <BoardState>
                            <ColorBox state={1} />
                            <StateText>확인 중</StateText>
                        </BoardState>

                        <BoardState>
                            <ColorBox state={2} />
                            <StateText>답변 완료</StateText>
                        </BoardState>
                    </BoardStateWrap>
                    <BoardItemWrap>
                    {
                        fakeDb.map((item, index) => {
                            const {name, email, number, category, request, timestamp, check} = item;
                            return(
                                <BoardItem>
                                    <BILeft>
                                        <BoardName>{name.slice(0,-2)+'**'}</BoardName>
                                        <BoardEmail>{email.replace(/(?!\w\w\w\w\w\w)([0-9a-zA-Z]+)@/g, '*****@')}</BoardEmail>
                                    </BILeft>
                                    <BIRight>
                                        <ColorBox state={check} />
                                        <BIRDate>{timestamp.replace(/\s[0-9:]+/,'')}</BIRDate>
                                    </BIRight>
                                </BoardItem>
                            )
                        })
                    }
                    {
                        contectCnt.map((item, index) => {
                            const {name, email, number, category, request, timestamp, check} = item.data();
                            return(
                                <BoardItem>
                                    <BILeft>
                                        <BoardName>{name.slice(0,-2)+'**'}</BoardName>
                                        <BoardEmail>{email.replace(/(?!\w\w\w\w\w\w)([0-9a-zA-Z]+)@/g, '*****@')}</BoardEmail>
                                    </BILeft>
                                    <BIRight>
                                        <ColorBox state={check} />
                                        <BIRDate>{timestamp.replace(/\s[0-9:]+/,'')}</BIRDate>
                                    </BIRight>
                                </BoardItem>
                            )
                        })
                    }
                    </BoardItemWrap>
                </BoardWrap>
                </>
            } />
        </>
    )
};