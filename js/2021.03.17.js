/* js */
let targetClass= document.querySelector(".targetClass");
console.log(targetClass.innerHTML);

let targetClass2 = document.querySelector(".targetClass2");
targetClass2.innerHTML = "<h3>修改後的內容</h3>";

let targetClass3 = document.querySelector(".targetClass3");
let score = 100;
targetClass3.innerHTML = `<p>&nbsp;&nbsp;小華的成績為 ${score} 分</P>`;

let targetClass4 = document.querySelector(".targetClass4");
const textTitle = "已修改的HTML結構。";
targetClass4.innerHTML = `<marquee align="midden" scrollamount="10" behavior="alternate" direction="right">${textTitle}</marquee>`;