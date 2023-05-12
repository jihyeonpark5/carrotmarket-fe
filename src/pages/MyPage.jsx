import React from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { CommonButton, Layout } from '../components/ui'

function MyPage() {
    const navigate = useNavigate();

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
    
  return (
    <Layout>
        <h1>닉네임님의 정보</h1>
        <CommonButton onClick={() => navigate('/newPost')} style={{marginRight:'13px'}}>글쓰기</CommonButton>
        <CommonButton onClick={() => navigate('/editNickname')}>닉네임 변경</CommonButton>
 
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
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                        <div>판매중 영역</div>
                    </Contents>
                    <Contents>
                        <div>판매완료 영역</div>
                    </Contents>
                    <Contents>
                        <div>찜 영역</div>
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
    background-color:beige;

    &>div{
        width:100%;
    }
`