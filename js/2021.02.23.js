/*問題一
以下變數 a, b, c, d, e, f 它們的值、型別各自為何? (請先想想看，不要用 console.log 檢查)
*/

let a ="10"+"10";   // a = "1010",Sting type;
let b = "10" * "10"; // b =  100 ,Number type;
let c = 10 + "10"; // c = "1010", String type;
let d 10 * "10"; // d = 100,Number type;
let e 10 - "2"; // e = 8,Number type;
let f = "10" - "2"; // f = 8,Number type;


/*問題二
請問以下題項哪些是有問題的，並說明為什麼。
*/
// 1
let myName = "jay";

// 2
var _state = true;

// 3
let true = true;   // (3)，因為不能使用關鍵字當變數。

// 4
const 520Pretty = 520;  //(4)，變數名命開頭不能用數字

// 5
const appleNum = 10; //(5)cont 不能重新賦值; 
appleNum = 2;

//6
var ming ='小明';
var ming = '小民';

//7
const ming = '小明'; 
const ming = '小民';  //(7)cont 不能重新賦值; 

//8
let ming = '小明';
let ming = '小民'; //(8) let 不能二次宣告;

//9
let ming = '小明';
ming = '小民';

// 10
let $open = "芝麻開門'; '"//(10)前後引號要一致;