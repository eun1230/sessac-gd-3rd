import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function BoardDetail() {
  const navigation = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigation('/'); 
        }}
      >
        뒤로가기
      </button>
      <button
        onClick={() => {
          navigation('/board');
        }}
      >
        게시판으로가기
      </button>
      <button
        onClick={() => {
          navigation('/');
        }}
      >
        홈으로가기
      </button>
      <h1>Board-Detail 페이지 컴포넌트 입니다.</h1>
    </>
  );
}
