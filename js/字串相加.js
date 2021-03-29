// 範例一：字串相加
const title = document.querySelector("h3");
let str = `<span style="color:red">紅色標題</span>`;
str+=`<span style="color:blue">藍色標題</span>`;
title.innerHTML = str;


const list = document.querySelector(".list");
let data = [
  "hello","你好嗎？"
];

let str2 = "";
data.forEach(function(item){
  str2+=`<li>${item}</li>`
})
list.innerHTML = str2;