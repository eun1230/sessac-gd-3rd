import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Board() {
  const navigation = useNavigate();

  return (
    <>
      <Header />
      <h1>여기는 Board 페이지 컴포넌트 입니다.</h1>
      <div
        onClick={() => {
          navigation('1'); // '/'가 없으면 현재 주소 뒤에 작성한값으로 이동 ex) board/1로 이동함
          // '/'를 작성하면 무조건 루트이기 때문에 /1로 작성한다면
          // 루트에서1을이동한 것으로 이동함
        }}
      >
        1번게시글 보러 가기
      </div>
      {/* <Link to="/board/1">게시판 상세 페이지</Link> */}
    </>
  );
}
