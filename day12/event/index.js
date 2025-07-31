const span = document.querySelector("span");

const btn = document.querySelector("input");
btn.addEventListener("input", (x) => {
    span.innerHTML = x.target.value.length;
});

const imt = document.querySelector("button")
imt.addEventListener("click", (x) =>{
    imt.innerText = x.target.innerHTML == "😎" ? "😜" : "😎";
    input.type = input.type = "text" ? "password" : "text";
});

