//////////계산기
const result = document.querySelector("#result");
const resultBtn = document.querySelector("#resultBtn");
const resetBtn = document.querySelector("#reset");

resultBtn.addEventListener("click", function () {
  const val1 = Number(document.getElementById("val1").value);
  const val2 = Number(document.getElementById("val2").value);
  const op = document.getElementById("op").value;
  switch (op) {
    case "+":
      result.value = val1 + val2;
      break;
    case "-":
      result.value = val1 - val2;
      break;
    case "*":
      result.value = val1 * val2;
      break;
    case "/":
      result.value = val1 / val2;
      break;
    case "%":
      result.value = val1 % val2;
      break;
    default:
      result.value = "오류";
  }
});

resetBtn.addEventListener("click", () => {
  document.getElementById("val1").value = "";
  document.getElementById("val2").value = "";
  document.getElementById("op").value = "";
  document.getElementById("result").value = "";
});

//////////댓글달기

function submitComment() {
  const ul = document.querySelector("#ul");
  const id = document.querySelector("#id").value;
  const re = document.querySelector("#re").value;
  const li = document.createElement("li");

  if (id == "") {
    alert("아이디를 작성하세요");
  } else if (re == "") {
    alert("댓글을 작성하세요");
  } else {
    li.innerHTML = `<b>${id}</b>  - ${re}`;
    ul.append(li);
  }

  //input창 초기화
  document.getElementById("userId").value = "";
  document.getElementById("re").value = "";
}
