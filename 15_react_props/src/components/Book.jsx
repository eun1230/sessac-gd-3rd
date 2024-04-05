import imgSrc from '../assets/book.png';

export default function Book(props) {
  const { title, author, price, type } = props;
  return (
    <>
      <div className="container">
        <h3>이번주 베스트셀러</h3>
        <img src={imgSrc} alt="book" className="img" />
        <div className="title">{title}</div>
        <div className="desc-box">
          <div>저자 : {author}</div>
          <div>판매가 : {price}</div>
          <div>구분 : {type}</div>
        </div>
      </div>
    </>
  );
}
