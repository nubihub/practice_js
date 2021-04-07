let lastPage = "https://ko.javascript.info/alert-prompt-confirm";

let readline = require('readline');
let r = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
r.question("나이를 입력해주세요.",function(age) {
    console.log( `당신의 나이는 ${age}살 입니다!` );
});