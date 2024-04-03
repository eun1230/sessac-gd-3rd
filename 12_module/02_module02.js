//es6
//바로 export시키기
export const animals = ['cat', 'dog', 'lion'];
export function showAnimals() {
  animals.forEach((animal) => console.log(animal));
}
export const addAnimal = (newAnimal) => {
  //animals배열에 인자로 전달받은 newAnimal을 추가한 후 해당 배열을 반환하는 함수
  animals.push(newAnimal);
  return animals;
};
