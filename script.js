const titleH1 = document.querySelector("h1");
const newUsr = document.querySelector("h2");
const numerShow = document.querySelector(".first-number");
const numberShow2 = document.querySelector(".secend-number");
let fullName1 = document.querySelector('.name-one');
let fullName2 = document.querySelector('.name-sec');
const para = document.querySelector(".winner");
const btns = document.querySelectorAll("button");
const first = document.querySelector(".btn-1");
const sec = document.querySelector(".btn-2");
let getNum = document.querySelector(".lottery-input");
let addNumBtn = document.querySelector(".btn-add");
let addNumBtn2 = document.querySelector(".btn-add2");
let addName = document.querySelector(".add-name");
let player1Input = document.querySelector(".player-1");
let player2Input = document.querySelector(".player-2");
const lotteryInput = /[0-9]/;
const arr = [];
const arr2 = [];
const arr3 = [];
const inputMaxLenght = 10;
titleH1.textContent = "Losowanie".toUpperCase();

// btns.forEach((btn) => {
//   btn.textContent = "START";
// });
first.textContent = "losuj".toUpperCase();
sec.textContent = "losuj".toUpperCase();
addNumBtn.textContent = "DODAJ";
addNumBtn2.textContent = "DODAJ";

const enterEventPlayer1 = (e) => {
  //nadanie aktywnoiści enter na pole do wpisania imienia player1
  if (e.key === "Enter") {
    addNameByPlayer();
  }
};
const enterEventPlayer2 = (e) => {
  if (e.key === "Enter") {
    addNameByPlayer2();
  }
};

const addNameByPlayer = () => {
  //przypisywanie nazwy uzytkownika do pola button1
  if (player1Input.value !== "") {
    let firstName = (fullName1.textContent = player1Input.value.toUpperCase());
    player1Input.value = "";
    addNumBtn.classList.add("show");
    getNum.classList.add("show");
    para.classList.add("show");
    para.textContent = `${firstName} WPROWADŹ CYFRĘ OD 1 DO 9`;
  }
};
const addNameByPlayer2 = () => {
  if (player2Input.value !== "") {
    let secendName = (fullName2.textContent = player2Input.value.toUpperCase());
    player2Input.value = "";
    addNumBtn2.classList.add("show");
    getNum.classList.add("show");
    para.classList.add("show");
    para.textContent = `${secendName} WPROWADŹ CYFRĘ OD 1 DO 9`;
  }
};
const user1 = () => {
  //losowane cyfry od 1 do 9 dla gracza nr 1
  if (getNum.value.match(lotteryInput)) {
    first.textContent = 'LOSUJ'
    first.disabled = false;
    numerShow.textContent = getNum.value;
    getNum.value = "";
    first.classList.add('show');
  } else {
    para.textContent = `Podałeś wartość "${getNum.value}", wprowadź cyfrę w zakresie 1-9`;
    getNum.value = "";
    setTimeout(errMeg, 3000);
  }
};
const user2 = () => {
  if (getNum.value.match(lotteryInput)) {
    sec.textContent = 'LOSUJ'
    sec.disabled = false;
    numberShow2.textContent = getNum.value;
    getNum.value = "";
    sec.classList.add('show');
  } else {
    para.textContent = `Podałeś wartość "${getNum.value}", wprowadź cyfrę w zakresie 1-9`;
    getNum.value = "";
    setTimeout(errMeg, 3000);
  }
};


    const check = (e) => {
      //event na klikniecie buttona z odpowiednia klasą
      if (e.target.matches(".btn-1")) {
        winBtn1();
      }
      if (e.target.matches(".btn-2")) {
        winBtn2();
      }
    };


const winBtn2 = () => {
  //mechanizm losowania cyfry od 1 do 9
  let lotto2 = (sec.textContent = Math.floor(Math.random() * 10));
  if (sec.textContent === numberShow2.textContent) {
    newUsr.textContent = `BRAWO ${fullName2.textContent}  trafiłeś  ${lotto2}`;
    setTimeout(clear, 5000);
    para.textContent = `trafiłeś wybraną cyfrę za ${arr2.length} razem`;
    arr2.length = [];
    setTimeout(winClear, 7000);
    sec.textContent = 'WYGRANA'
    sec.disabled = true;
  }
  arr2.push(lotto2);
};

const winBtn1 = () => {
  let lotto3 = (first.textContent = Math.floor(Math.random() * 10));
  if (first.textContent === numerShow.textContent) {
    newUsr.textContent = `BRAWO ${fullName1.textContent} trafiłeś ${lotto3}`;
    setTimeout(clear, 5000);
    para.textContent = `trafiłeś wybraną cyfrę za ${arr3.length} razem`;
    arr3.length = [];
    setTimeout(winClear, 7000);
    first.textContent = 'WYGRANA';
    first.disabled = true;
  }
  arr3.push(lotto3);
};
const errMeg = () => (para.textContent = "WPROWADŹ CYFRĘ OD 1 DO 9");
const winClear = () => (para.textContent = "");
const clear = () => (newUsr.textContent = "");

player1Input.addEventListener("keyup", enterEventPlayer1);
player2Input.addEventListener("keyup", enterEventPlayer2);
addNumBtn2.addEventListener('click', user2);
addNumBtn.addEventListener("click", user1);
btns.forEach((btn) => btn.addEventListener("click", check));
