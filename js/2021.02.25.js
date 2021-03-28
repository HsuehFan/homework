let btnData = document.querySelector('.btnData');
btnData.addEventListener('click',function(){
    let inputNum = parseInt(document.querySelector('.inputData').value);
    let stypeNum
    if (inputNum % 2 === 0){
        stypeNum = "偶數";
    } else {
        stypeNum = "奇數";
    };
    let testText = document.querySelector('.judge');
    testText.textContent = `你輸入的數字是：${inputNum}，它是${stypeNum}。`;
},false);
