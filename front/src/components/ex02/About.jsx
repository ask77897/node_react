import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
    const location = useLocation();
    const search = new URLSearchParams(location.search);
    console.log(search);
    const detail = JSON.parse(search.get("detail"));
    const query = search.get("query");
    const page = search.get("page");

    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
            {detail && <p>검색어는 {query}이고 현재 페이지는 {page}입니다.</p>}
        </div>
    )
}

export default About