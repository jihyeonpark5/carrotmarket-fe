import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Layout, Image, StatusButton } from '../components/element';
import { SlArrowDown } from 'react-icons/sl';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { getBoards } from '../api/boards';

function BoardList() {
  const [boardData, setBoardData] = useState([]);

  // * 페이지가 마운트될 때 게시글 리스트를 조회하도록 설정
  useEffect(() => {
    getBoardList();
  }, []);

  // * 게시글 리스트 조회
  const getBoardList = () => {
    const setPage = {
      "page": 0,
      "size": 10,
      "sort": ["createdAt,DESC"],
    }
    getBoardListMutation.mutate(setPage);
  }

  // * 게시글 리스트 조회 useMutation
  const getBoardListMutation = useMutation(getBoards, {
    onSuccess: (response) => {
      setBoardData(response.data.responseDtos);
    }
  })

  return (
    <Layout>
      <ListNav>
        {/* TODO 사용자의 동 이름으로 출력해야 함 */}
        <span>문학동</span>
        <SlArrowDown />
      </ListNav>
      <ListSection>
        {
          boardData.length !== 0 &&
          boardData.map((board) => {
            return (
              <Link to={`/BoardDetail/${board.id}`} key={board.id}>
                <ListOneDiv>
                  <Image
                    width={'130px'}
                    height={'130px'}
                    borderradius={'10px'}
                    src={board.image}
                    alt={'상품 이미지'}
                  />
                  <ListInfoDiv>
                    <ListTitleH1>{board.title}</ListTitleH1>
                    <ListDetailH3>
                      <span>{board.address}</span>
                    </ListDetailH3>
                    <ListPriceH2>
                      {/* TODO 둘 다 잘 나오는지 확인 */}
                      {/* {board.status && <StatusButton color={'black'}>거래완료</StatusButton>} */}
                      {!!board.status ? <StatusButton color={'black'}>거래완료</StatusButton> : ''}
                      {Number(board.price).toLocaleString()}원
                    </ListPriceH2>
                  </ListInfoDiv>
                </ListOneDiv>
              </Link>
            )
          })
        }
        <WriteButton>
          <Link to="/BoardWrite">+</Link>
        </WriteButton>
      </ListSection>
    </Layout>
  )
}

export default BoardList

const ListNav = styled.nav`
  height: 60px;
  width: 440px;
  display: flex;
  position: fixed;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid lightgrey;
  background-color: #FFFFFF;
  cursor: pointer;
  :first-child {
    font-size: 20px;
    font-weight: bold;
  }
  :last-child {
    margin-top: 5px;
  }
`

const ListSection = styled.section`
  display: flex;
  position: relative;
  padding-top: 60px;
  flex-direction: column;
`

const ListOneDiv = styled.div`
  padding: 15px 5px;
  display: flex;
  border-bottom: 1px solid lightgrey;
  cursor: pointer;
`

const ListInfoDiv = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ListTitleH1 = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`

const ListPriceH2 = styled.h2`
  margin: 0;
  & span {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }
`

const ListDetailH3 = styled.h3`
  margin: 10px 0 7px 0;
  font-size: 15px;
  font-weight: 300;
  color: grey;
`

const WriteButton = styled.button`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 740px;
  right: 20px;
  border: none;
  border-radius: 50%;
  background-color: #FF7E36;
  color: white;
  font-size: 30px;
  transition: all 0.03s ease-out;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #ED6C26;
  }
`