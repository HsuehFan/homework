/* js */

let data = ["a", "b", "c"];

// 參數 item 代表陣列中目前正在被處理的那個元素
// 參數 index 代表陣列中目前正在被處理的那個元素的索引值
// 參數 array 代表被處理的陣列本身，在此為 data
data.forEach(function(item, index, array){
    console.log(item, index, array);
})


/* 以下為作業部分
問題
請根據以下要求撰寫程式碼:
1. 如果 NumberAll 陣列內的值大於或等於 30，則用 push() 方法將其加入 NumberAbove30 陣列中，
2. 如果 NumberAll 陣列內的值大於或等於 30，則用 splice() 方法將其從 NumberAll 中移除。
*/


let NumberAll = [25, 30, 15, 50, 17, 40];
let NumberAbove30 = [];
NumberAll.forEach(function(item, index){
    if(item >= 30){
        /* 程式碼撰寫處 */
        NumberAbove30.push(item);
        NumberAll.splice(index, 1);
    }
});
console.log(NumberAbove30);
console.log(NumberAll);