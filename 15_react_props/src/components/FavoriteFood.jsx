export default function FavoriteFood(props) {
  const textStyle = {
    color: 'red',
    fontWeight: 900,
    fontSize: 20,
  };

  return (
    <>
      <div>
        제가 가장 좋아하는 음식은<div style={textStyle}>{props.food}</div>{' '}
        입니다.{' '}
      </div>
    </>
  );
}
FavoriteFood.defaultProps = {
  food: '초밥',
};
