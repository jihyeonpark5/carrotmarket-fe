import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { createGlobalStyle, styled } from 'styled-components';
import { deleteBoard, getDetailBoard, getMyBoard, getMylikeBoard, putBoardSoldout } from '../../api/boards';
import { userLogout } from '../../api/users';
import { CommonButton, Layout } from '../../components/element';
import Loading from '../statusPage/Loading';
import Error from '../statusPage/Error';
import NullAlert from '../statusPage/NullAlert';
import { useRecoilValue } from 'recoil';
import { tokenState } from '../../recoil/token';

function MyPage() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // 상품 상태 변경 시 mutation 발생
    const soldoutMutation = useMutation(putBoardSoldout,{
        onSuccess: (response) => {
            queryClient.invalidateQueries("getMyBoard");
            console.log(response);
        },
        onError: (error) => {
            console.log(error)
        }
    });

    // 상품 삭제 시 mutation
    const deleteBoardMutation = useMutation(deleteBoard,{
        onSuccess: (response) => {
            queryClient.invalidateQueries("getMyBoard");
            console.log(response);
        },
        onError: (error) => {
            console.log(error)
        }
    })

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
    };

    // 게시물 불러오기
    const access_token = sessionStorage.getItem('access_token');
    // const access_token = useRecoilValue(tokenState);

    const { isLoading: isLoadingMyLikeBoard, isError: isErrorMyLikeBoard, data: dataMyLikeBoard } = useQuery("getMylikeBoard", () => getMylikeBoard(access_token));
    const { isLoading: isLoadingMyBoard, isError: isErrorMyBoard, data: dataMyBoard } = useQuery("getMyBoard", () => getMyBoard(access_token));
    
    if(isLoadingMyBoard) {
        return <Loading />
    }
    if(isErrorMyBoard) {
        return <Error />
    }
    if(isLoadingMyLikeBoard) {
        return <Loading />
    }
    if(isErrorMyLikeBoard) {
        return <Error />
    }

    // 상세페이지 이동
    const goDetail = (boardId, event) => {
        navigate(`/BoardDetail/${boardId}`);
        event.stopPropagation();
    };

    // 상품 게시글 삭제
    const BoardDelete = (event, boardId) => {
        deleteBoardMutation.mutate(boardId);
        event.stopPropagation();
    };

    // 상품 거래완료 처리
    const BoardSoldout = (event, boardId) => {
        soldoutMutation.mutate(boardId);
        event.stopPropagation();
    };

    // 로그아웃
    const Logout = () => {
        userLogout();
        navigate('/')
    };
  return (
    
    <Layout>
        {/* {dataMyBoard.nickname} */}
        <h1>{sessionStorage.getItem('usernickname')}님의 정보</h1>
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
                        {dataMyBoard.filter((item) => item.status === false).length === 0 || dataMyBoard.filter((item) => item.status === false) === null ? (
                        <NullAlert alertMessage='판매중인 상품이 없어요'/>
                        ) : (
                        dataMyBoard.filter((item) => item.status === false).map((item) => (
                            <ItemBox key={item.id} onClick={(event) => goDetail(item.id, event)}>
                                <Link to={`/BoardDetail/${item.id}`} key={item.id}>
                                    <ItemArea>
                                        <ImgBox>
                                        <img src={item.image} alt={item.title} />
                                        </ImgBox>
                                        <Info>
                                        <h2>{item.title}</h2>
                                        <p>{item.address}</p>
                                        <b>{item.price}</b>
                                        </Info>
                                    </ItemArea>
                                </Link>
                                <ButtonWrap>
                                    <button onClick={(event) => BoardDelete(event, item.id)}>상품삭제</button>
                                    <button onClick={(event) => BoardSoldout(event, item.id)}>거래완료</button>
                                </ButtonWrap>
                            </ItemBox>
                        ))
                        )}

                    </Contents>
                    <Contents>
                        {/* 거래 완료 영역 */}
                        {dataMyBoard.filter((item) => item.status === true).length === 0 ? (
                        <NullAlert alertMessage='거래 완료된 상품이 없어요'/>
                        ) : (
                        dataMyBoard.filter((item) => item.status === true).map((item) => (
                            <ItemBox key={item.id} onClick={(event) => goDetail(item.id, event)}>
                            <ItemArea>
                                <ImgBox>
                                <img src={item.image} alt={item.title} />
                                </ImgBox>
                                <Info>
                                <h2>{item.title}</h2>
                                <p>{item.address}</p>
                                <b>{item.price}</b>
                                </Info>
                            </ItemArea>
                            </ItemBox>
                            ))
                        )}
                    </Contents>
                    <Contents>
                        {/* 찜 영역 */}
                        {dataMyLikeBoard.length === 0 ? (
                            <NullAlert alertMessage='찜한 상품이 없어요'/>
                        ) : (
                            dataMyLikeBoard.map((item) => (
                                <ItemBox key={item.id}>
                                    <ItemArea>
                                        <ImgBox>
                                            <img src={item.image} alt={item.title} />
                                        </ImgBox>
                                        <Info>
                                            <h2>{item.title}</h2>
                                            <p>{item.address}</p>
                                            <b>{item.price}</b>
                                        </Info>
                                    </ItemArea>
                                </ItemBox>
                            ))
                        )}
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
