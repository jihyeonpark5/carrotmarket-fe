import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import { Layout } from '../components/ui';

const {kakao} = window;

function LocationSetting() {
    useEffect(()=> {
        const Container = document.getElementById('map');
        const options = {
            // 기준 좌표 : 회원가입할 때 받아논 주소 좌표 입력하기
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level:3
        };
        // 지도 생성
        const map = new kakao.maps.Map(Container, options);
        // 지금 위치 마커 생성
        var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

    },[]);
  return (
    <Layout>
        <h1>내 동네 설정</h1>
        <MapArea>
            <div id='map' style={{width:"100%",height:"400px"}}></div>

        </MapArea>
        <MapController>
            <h2>내 동네</h2>
            <p>공릉동</p>
            <Controller>

            </Controller>
        </MapController>
    </Layout>
  )
}

export default LocationSetting;

const MapArea = styled.section`

`
const MapController = styled.section`

`
const Controller = styled.section`

`

