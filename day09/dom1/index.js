// - 어케 접근함?
// document [html 타입]

const a = document.body.querySelector(".hi")
a.innerHTML = "수고하세영"

//과제 콘솔에 나오도록 머니,필링
// const b = document.body.querySelector(".text")
// b.innerHTML = "내일 화요일"

const month = document.body.querySelector(".month")
month.innerHTML = new Date().toDateString();

const date = document.body.querySelector(".date")
date.innerHTML = new date().getdate();

const time = document.body.querySelector(".hour");
time.innerHTML = new Date().toLocaleTimeString();

