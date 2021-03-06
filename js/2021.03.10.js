/* js */
let arr = [];
//回傳一個新的陣列，並指派給變數
// let newArr = arr.filter();

/*
以下為 filter() 的用法:

filter() 內需放入一個函式，並回傳一個值。
filter() 會一一將陣列中的每個元素帶入函式測試，如果函式的回傳值為 true，則會將當前的元素保留至新陣列中，若為 false 則不保留。
callback 函式常見會帶有三種參數，範例如下:

*/



let food1 = [
    {
        foodName: '鍋燒意麵',
        price: 70
    },
    {
        foodName: '炒麵',
        price: 65
    },
    {
        foodName: '蘿蔔泥',
        price: 20
    },
    {
        foodName: '荷包蛋',
        price: 10
    }
];

// item: 目前正在處理的元素。
// index: 目前正在處理的元素之索引
// array: 呼叫 filter 的原始陣列，在此為 food。此參數較為少用

let target = food1.filter(function(item, index, array){
    // 回傳值，如果為 true，則將正在處理的這個 item 加入新陣列
    return item.price >= 20;
})
console.log(target);
console.log(food1);

/*
問題
請修改以下程式碼，用 filter() 方法執行以下要求:

取得 foodName 為 ‘鍋燒意麵’ 或 ‘炒麵’ 的物件，並將新陣列指派給 target1
取得索引值為 2、索引值為 3 的物件，並將新陣列指派給 target2
*/

let food = [
  {
    foodName: '鍋燒意麵',
    price: 70
  },
  {
    foodName: '炒麵',
    price: 65
  },
  {
    foodName: '蘿蔔泥',
    price: 20
  },
  {
    foodName: '荷包蛋',
    price: 10
  }
];



let target1, target2;
target1 = food.filter(function(item){
  return item.foodName ==  '鍋燒意麵' || item.foodName ==  '炒麵';
})

target2 = food.filter(function(item, index){
  return index >=2;
})

console.log(target1);
console.log(target2);