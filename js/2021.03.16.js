let targetClass2 = document.querySelector(".targetClass2 p");
console.log(targetClass2.textContent);


//問題 
/*
請練習用 querySelector 取得以下元素，
並用 textContent 替它新增一些文字內容。
*/

let targetClass = document.querySelector(".targetClass");
const textTitle = "已用querySelector 取得元素，並使用 textContent增加文字內容了。"
targetClass.textContent = `${textTitle}`