const titleH1 = document.querySelector("h1");
const newUsr = document.querySelector("h2");
const para = document.querySelector(".winner");
const btns = document.querySelectorAll("button");
const first = document.querySelector("button:first-child");
const sec = document.querySelector(".btn-2");
let getNum = document.querySelector(".lottery-input");
let addNumBtn = document.querySelector(".btn-add");
let addName = document.querySelector(".add-name");
let player1Input = document.querySelector(".player-1");
let player2Input = document.querySelector(".player-2");
const lotteryInput = /[0-9]/;
const arr = [];
const arr2 = [];
const arr3 = [];
 const inputMaxLenght = 10
para.textContent = "WPROWADŹ CYFRĘ OD 1 DO 9";
titleH1.textContent = "Losowanie".toUpperCase();

btns.forEach((btn) => {
  btn.textContent = "START";
});
addNumBtn.textContent = "DODAJ";

const enterEventPlayer1 = (e) => { //nadanie aktywnoiści enter na pole do wpisania imienia player1
  if (e.key === "Enter") {
    addNameByPlayer();
  }
};

const addNameByPlayer = () => { //przypisywanie nazwy uzytkownika do pola button1
  if (player1Input.value !== "") {
    first.textContent = player1Input.value.toUpperCase();
  }
};

const user1 = () => {
  if (getNum.value.match(lotteryInput)) {
    first.textContent = getNum.value;
    getNum.value = "";
  } else {
    para.textContent = `Podałeś wartość "${getNum.value}", wprowadź cyfrę w zakresie 1-9`;
    getNum.value = "";
    setTimeout(errMeg, 3000);
  }
};
const user2 = () => {
  sec.textContent = getNum.value;
};

const check = (e) => {
  if (e.target.matches(".btn-1")) {
    winBtn1();
  }
  if (e.target.matches(".btn-2")) {
    winBtn2();
  }
};
const winBtn2 = () => {
  lotto2 = sec.textContent = Math.floor(Math.random() * 10);
  if (lotto2 === 5) {
    newUsr.textContent = `trafiłeś  ${lotto2}!! Wygrałeś`;
    setTimeout(clear, 3000);
    para.textContent = `trafiłeś wybraną cyfrę za ${arr2.length} razem`;
    arr2.length = [];
    setTimeout(winClear, 3000);
  }
  arr2.push(lotto2);
};

const winBtn1 = () => {
  let lotto3 = (first.textContent = Math.floor(Math.random() * 10));
  if (lotto3 === 8) {
    newUsr.textContent = `trafiłeś ${lotto3} wygrałeś`;
    setTimeout(clear, 3000);
    para.textContent = `trafiłeś wybraną cyfrę za ${arr3.length} razem`;
    arr3.length = [];
    setTimeout(winClear, 3000);
  }
  arr3.push(lotto3);
};
const errMeg = () => (para.textContent = "WPROWADŹ CYFRĘ OD 1 DO 9");
const winClear = () => (para.textContent = "");
const clear = () => (newUsr.textContent = "");



player1Input.addEventListener("keyup", enterEventPlayer1),
  addNumBtn.addEventListener("click", user1);
btns.forEach((btn) => btn.addEventListener("click", check));
