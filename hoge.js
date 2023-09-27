let correctNumber = Math.floor(Math.random() * 20) + 1;
console.log(correctNumber); //デバッグ用。実際のゲームではコメントアウトした方が良いです。

function checkNumber() {
    let userInput = document.getElementById('userInput').value;
    
    if (userInput == correctNumber) {
        document.getElementById('result').innerHTML = '正解です！！';
    } else {
        document.getElementById('result').innerHTML = '違います。もう一度試してください！';
    }
}
