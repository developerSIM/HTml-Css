 const first = window.prompt("첫번째 숫자를 알려주세요");
 const second = window.prompt("두번째 숫자를 알려주세요");
 const three = Number(first) + Number(second)
 window.alert(`${first} + ${second} =${three}`)

const age = window.prompt("나이를 알려주세요");
const year = 2025 - Number(`${age}`);
window.alert(`귀하의 태어난 년도는 ${year}입니다`)
