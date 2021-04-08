let lastPage = "https://ko.javascript.info/alert-prompt-confirm";

let readline = require('readline');
let r = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r.question("나이를 입력해주세요.",function(age) {
    console.log( `당신의 나이는 ${age}살 입니다!` );

    r.question("시간 경과",function(time) {
        console.log( `${time}년 후` );

        console.log( `${time}년 후에는 ${age + time}살이 됩니다!` );

    });

});