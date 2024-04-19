import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import Test from './components/Test';
import Board from './pages/Board';
import BoardDetail from './pages/BoardDetail';
import Profile from './pages/Profile';
// import NotFound from './components/NotFound';
import Home from './pages/Home';
import Header from './components/Header';

import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import PhotoPage from './pages/PhotoPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      {/* 라우팅 연습
      <h1>라우팅!!</h1>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
      */}
      {/* 라우팅 연습 2
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/1" element={<BoardDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/photos" element={<PhotoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
