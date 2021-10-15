const titleH1 = document.querySelector("h1");
const newUsr = document.querySelector("h2");
const para = document.querySelector('p');
const btns = document.querySelectorAll('button')
const first = document.querySelector('button:first-child')
const sec = first.nextElementSibling;
const arr = [];
const arr2 = [];
const arr3 = []
titleH1.textContent = "Losowanie".toUpperCase();
btns.forEach(btn => {
  btn.textContent = 'START'
})

// const dateW = new Date();
// dateW.getDay();
// let weekday = dateW.toLocaleString("pl", { weekday: "long" });
// titleH1.textContent = weekday;

const check = (e) => {
    if (e.target.matches(".btn-1")) {
      winBtn1();
    }
    if (e.target.matches(".btn-2")) {
      winBtn2();
    }
    if (e.target.matches(".btn-3")) {
      winBtn3();
    }
  };
  const winBtn3 = () => {
    let lotto1 = (sec.nextElementSibling.textContent = Math.floor(
      Math.random() * 10
    ));
    if (lotto1 === 3) {
      newUsr.textContent = `trafiłeś  ${lotto1}  wygrałeś!`;
      setTimeout(clear, 3000);
      para.textContent = `trafiłeś wybraną cyfrę za ${arr.length} razem`
      arr.length = []
      setTimeout(winClear, 3000);
    }
    arr.push(lotto1);
  };
  const winBtn2 = () => {
    lotto2 = sec.textContent = Math.floor(Math.random() * 10);
    if (lotto2 === 5) {
      newUsr.textContent = `trafiłeś  ${lotto2}!! Wygrałeś`;
      setTimeout(clear, 3000);
      para.textContent = `trafiłeś wybraną cyfrę za ${arr2.length} razem`
      arr2.length = []
      setTimeout(winClear, 3000);
    }
    arr2.push(lotto2);
  };
  
  const winBtn1 = () => {
    let lotto3 = (first.textContent = Math.floor(Math.random() * 10));
    if (lotto3 === 8) {
      newUsr.textContent = `trafiłeś ${lotto3} wygrałeś`;
      setTimeout(clear, 3000);
      para.textContent = `trafiłeś wybraną cyfrę za ${arr3.length} razem`
      arr3.length = [];
      setTimeout(winClear, 3000);
    }
    arr3.push(lotto3);
  };
  
  const winClear = () => para.textContent = ''
  const clear = () => newUsr.textContent = "";
  btns.forEach((btn) => btn.addEventListener("click", check));
  