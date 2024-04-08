export default function CharactorInfo(props) {
  console.log('props -- ', props);
  const { charactorInfo } = props;
  console.log('charactorInfo', charactorInfo);
  const { name, age, nickName } = props.charactorInfo;
  console.log(name, age, nickName);

  return (
    <div>
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>
      <h3>NickName : {nickName}</h3>
    </div>
  );
}
