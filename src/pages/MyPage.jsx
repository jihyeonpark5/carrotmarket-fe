import React from 'react'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { getBoard } from '../api/boards';
import { userLogout } from '../api/users';
import { CommonButton, Layout } from '../components/ui'
import exampleImg from '../assets/board_example.jpg';

function MyPage() {
    const navigate = useNavigate();

    // 탭메뉴 관련 js
    const tabMenuHandler = (e) => {
        const targetMenu = e.target;
        const allMenus = document.querySelectorAll('.tabMenu');
        const tabNav = document.querySelector('.tabNav');
        const tabContents = document.querySelector('.tabContents');
        const NavWidth = 147;
        const SlideWidth = 33;
        const index = Array.from(allMenus).indexOf(targetMenu);
        const navDistance = index * NavWidth;
        const contentsDistance = index * SlideWidth;
        
        allMenus.forEach((menu) => {
            menu.classList.remove('checked');
        });

        targetMenu.classList.add('checked');

        tabNav.style.transform = `translateX(${navDistance}px)`;
        tabContents.style.transform = `translateX(-${contentsDistance}%)`;
        console.log(contentsDistance)
    };
    const access_token = sessionStorage.getItem('access_token');
    const { isLoading, isError, data } = useQuery("getBoard", () => getBoard(access_token));
    if(isLoading) {
        console.log(data)
        return <h1>로딩중입니다...</h1>
    }
    if(isError) {
        return <h1>오류가 발생하였습니다...</h1>
    }

    const Logout = () => {
        userLogout();
        sessionStorage.removeItem('access_token');
        navigate('/')
    };
    
  return (

    <Layout>
        <h1>닉네임님의 정보</h1>
        <CommonButton size="small" onClick={() => navigate('/newPost')} style={{marginRight:'13px'}}>글쓰기</CommonButton>
        {/* <CommonButton size="small" onClick={() => navigate('/editNickname')} style={{marginRight:'13px'}}>닉네임 변경</CommonButton> */}
        <CommonButton size="small" onClick={Logout}>로그아웃</CommonButton>
 
        <TabContainer>
            <TabMenuArea>
                <TabMenu id="sale" className='tabMenu checked' onClick={tabMenuHandler}>판매중</TabMenu>
                <TabMenu id="soldout" className='tabMenu' onClick={tabMenuHandler}>거래완료</TabMenu>
                <TabMenu id="like" className='tabMenu' onClick={tabMenuHandler}>찜</TabMenu>
                <TabNav className='tabNav'/>
            </TabMenuArea>

            <TabContentsArea>
                <TabSlideArea className='tabContents'>
                    <Contents>
                        {/* 판매중 영역 */}
                        <ItemBox>
                            <ItemArea>
                                <ImgBox>
                                    <img src={exampleImg} alt="판매상품이미지" />
                                </ImgBox>
                                <Info>
                                    <h2>상품명</h2>
                                    <p>동네</p>
                                    <b>가격</b>
                                </Info>
                            </ItemArea>
                            <ButtonWrap>
                                <button>상품삭제</button>
                                <button>거래완료</button>
                            </ButtonWrap>
                        </ItemBox>
                    </Contents>
                    <Contents>
                        {/* 거래 완료 영역 */}
                        <ItemBox>
                            <ItemArea>
                                <ImgBox>
                                    <img src={exampleImg} alt="판매상품이미지" />
                                </ImgBox>
                                <Info>
                                    <h2>상품명</h2>
                                    <p>동네</p>
                                    <b>가격</b>
                                </Info>
                            </ItemArea>
                        </ItemBox>
                    </Contents>
                    <Contents>
                        {/* 찜 영역 */}
                        <ItemBox>
                            <ItemArea>
                                <ImgBox>
                                    <img src={exampleImg} alt="판매상품이미지" />
                                </ImgBox>
                                <Info>
                                    <h2>상품명</h2>
                                    <p>동네</p>
                                    <b>가격</b>
                                </Info>
                            </ItemArea>
                        </ItemBox>
                    </Contents>
                </TabSlideArea>
            </TabContentsArea>
        </TabContainer>
    </Layout>
  )
}

export default MyPage;

const TabContainer = styled.article`
    width:100%;
    margin-top:30px;
`
const TabMenuArea = styled.div`
    position:relative;
    width:100%;
    height:50px;
    display:flex;
    border-bottom:1px solid #bdbdbd;
`
const TabMenu = styled.button`
    width:33%;
    background-color:transparent;
    border:none;
    font-size:18px;
    font-weight:700;
    color:#bdbdbd;
    &.checked{
        color:#222;
    }
`
const TabNav = styled.div`
    position:absolute;
    bottom:0;
    width:145px;
    height:2px;
    background-color:#333;
    transition:.3s;
`
const TabContentsArea = styled.div`
    width:100%;
    overflow:hidden;
`
const TabSlideArea = styled.div`
    width:300%;
    display:flex;
    transition:.3s;
`
const Contents = styled.div`
    width:100%;
    /* background-color:beige; */
    &>div{
        width:100%;
    }
`
const ItemBox = styled.div`
    border-bottom:1px solid #ccc;
`
const ItemArea = styled.div`
    padding:20px 0;
    display:flex;
    align-items:center;
    width:100%;
`
const ImgBox = styled.div`
    width:110px;
    height:110px;
    overflow:hidden;
    border-radius:10px;
    & img{
        width:100%;
        height:100%;
    }
`
const Info = styled.div`
    width:calc(100% - 130px);
    padding-left:20px;
    & h2{
        margin:0;
        font-size:20px;
        font-weight:500;
    }
    & p{
        margin: 0;
        color:#777;
    }
`
const ButtonWrap = styled.div`
    width:100%;
    & button{
        width:50%;
        height:50px;
        background-color:#fff;
        border:none;
        border-top:1px solid #ccc;
        font-size:17px;
        font-weight:500;
    }
    & button:first-child{
        border-right:1px solid #ccc;
    }
`
