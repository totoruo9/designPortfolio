import Template from 'Components/template';
import firebase from '../Firebase';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { lightTheme } from 'theme';
import { collection, getDocs, getFirestore, initializeFirestore, query } from 'firebase/firestore';

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



const db = initializeFirestore(firebase,{
    experimentalForceLongPolling: true,
  });

export default function About() {
    // db의 users 컬렉션을 가져옴
    const usersCollectionRef = collection(db, "users");
    const [users, setUsers] = useState([]);
    // 시작될때 한번만 실행
    useEffect(()=>{
        // 비동기로 데이터 받을준비
        const getUsers = async () => {
            // getDocs로 컬렉션안에 데이터 가져오기
            const data = await getDocs(usersCollectionRef);
            console.log(data);

            data.forEach(doc => console.log(doc.data()));
        }

        getUsers();
    },[])

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
                </Container>
                </>
            } />
        </>
    )
};