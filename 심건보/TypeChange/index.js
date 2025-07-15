//1번퀴즈
const length = window.prompt("한 변의 길이를 입력해주십시오");
const area = Number(length) * Number(length);
window.console.log(`한 변의 길이가 ${length}인 정사각형 넓이: ${area}`);


//2번 퀴즈
const length1 = window.prompt("밑 변의 길이를 입력해주십시오");
const length2 = window.prompt("높이의 길이를 입력해주십시오");
const triangle = Number(length1)*Number(length2)/2
window.console.log(`밑변 ${length1}의 길이와 높이 ${length2}인 삼각형의 넓이는 ${triangle}입니다`)

//3번 퀴즈
const won = window.prompt("우리나라 원화 금액을 입력해 주세요");
const exchange = 9.33; 
const yen = Number(won) * exchange;
window.console.log(`${won}원은(는) 약 ${yen}엔 입니다.`);

//4번 퀴즈



