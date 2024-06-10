import { useSelector } from 'react-redux';

export default function DoneList() {
  const list = useSelector((state) => state.todo.list);

  const doneList = useSelector((state) => state.todo.list).filter(
    (el) => el.done === true
  );

  return (
    <section className='DoneList'>
      <h3>완료 목록</h3>
      <ul>
        {/* 
          done 여부 확인하지 않고 store에 저장된 모든 목록 보여주기
        {list.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))}
        */}

        {/* 완료된 목록만 보여주기 */}
        {doneList.map((el) => {
          return <li key={el.id}>{el.text}</li>;
        })}
      </ul>
    </section>
  );
}
