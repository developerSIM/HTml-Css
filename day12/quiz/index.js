const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const reset = document.querySelector(".reset")
const total = document.querySelector(".total")

btn1.addEventListener('click', ()=>{
    total.innerHTML = "총" + (parse(total.innerHTML.split(" ")[1]) + 5000) + "원" ;
});

btn2.addEventListener('click', ()=>{
    total.innerHTML = "총" + (parse(total.innerHTML.split(" ")[2]) + 6000) + "원" ;
});
btn3.addEventListener('click', ()=>{
    total.innerHTML = "총" + (parse(total.innerHTML.split(" ")[3]) + 6500) + "원" ;
});

reset.addEventListener("click", () => {
    total.innerHTML = "총 0원";
});