// const tag  = window.prompt("어떤 태그를 만들고 싶습니까");
// const backgroundcolor = window.prompt("태그의 배경색은 무엇입니까");
// const contents = window.prompt("만들고 싶은 내용");

// const newTag = document.createElement(tag);
// tag.style.backgroundcolor = backgroundcolor;
// tag.innerHTML = contents;

// document.body.appendChild(tag)


// 유저에게 좋아하는 음식들 입력 받고
// 음식들을 각각 버튼 태그로 만들고
// 버튼 태그 색상은 순서대로 빨주노초파남보...

//ex) 사과 키위 바나나 망고 포도 수박 멜론 오렌지



const tagg = prompt("좋아하는 음식");
const tagg1 = prompt("음식 태그 만들기")
const taggcolor = prompt("태그 색깔");

const newtagg = document.createElement(tagg1);
tagg.style.taggcolor = taggcolor;
tagg.innerHTML = taggcolor;

document.body.appendChild(tagg)
