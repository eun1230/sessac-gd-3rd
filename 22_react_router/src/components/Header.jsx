import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <Link to="/">홈</Link> 
        <Link to="/board">게시판</Link> 
        <Link to="/profile">프로필</Link> 
        <Link to="/products">상품</Link> 
        <Link to="/photos">사진</Link> 
      </nav>
    </header>
  );
}
