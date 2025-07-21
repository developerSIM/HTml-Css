const password = window.prompt("비밀번호 설정");

if (password.length < 4 || password.length > 12) {
    window.console.log("비밀번호 길이가 맞지 않습니다.");
} else if(!(password.includes("@") || password,includes("!") || password.includes("#"))) {
    window
}
    