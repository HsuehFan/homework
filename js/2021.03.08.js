/* js */

function triggerAlert() {
    alert('點擊元素1');
}

function triggerAlertSecond() {
    alert('點擊元素2');
}

let el = document.querySelector('#btn');
el.onclick = triggerAlertSecond;

let el2 = document.querySelector('.btn');
/* 兩個事件處理函式都會執行 */
el2.addEventListener('click',triggerAlert);
el2.addEventListener('click',triggerAlertSecond);

/* 以下為作業部份 */

function triggerMouseenter(){
    console.log('滑入');
}

function triggerClick(){
    alert('點擊');
}

let boxTest = document.querySelector('#box');
boxTest.addEventListener('mouseenter',triggerMouseenter);
boxTest.addEventListener('click',triggerClick);