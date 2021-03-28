//作業一：比較運算子
let a = 4;
let b = 5;
console.log(a>0);
console.log(b>a);
console.log((a+b)>1);

let c = 5;
let d = 6;
console.log(c == d);
console.log(c !== d);

let e = 8;
let f = 5;
console.log(f >= e);
console.log(f != e);
console.log(f == e);

//作業二：比較運算子 + 強制轉型
let g = 8;
let h = "8";
console.log(g*h == 88);
console.log(g*h == 64);
console.log(g*h === 64);

let i = "9";
let j = "9";
console.log(i+j == 99);
console.log(i+j == "99");
console.log(i+j === 99);

var k = 2;
var l = "5";
//請文字解釋為什麼
console.log((k*l)>=5);
/*因為變數 l 為文字型別，一遇到乘法運算就會轉成數字型別，
所以運算結果為 2*5=10，10>=5，為 true。
*/

// 作業三 if 練習
// 最後 m、n 的值為？
// 需說明原因

let m = 1;      //把 1 賦給 m 變數
if (2>1){       // 2>1 為 ture 執行 if 內的命令
    m=3         //把 3 賦給 m 變數
}
console.log(m);  // m 為 3。

let n = 5;      // 把 5 賦給 n 變數
if(true) {      // 為 ture 執行 if 內的命令
    n+=10       //把 n+10 的結果賦給 n 變數
}
console.log(n); // n 為 15。


// 作業四 if 練習
// 情境：計算金額

// 媽媽帶小明去火鍋吃到飽吃飯
// 他們看了金額，成人 600 元、小孩 300 元
// 未滿 120(含) 公分就免費
// 於是小明寫了些程式碼，但就做不下去了
// 一起幫小明補程式碼，計算最後他們要付多少錢

let childHeight = 133;
let restaurtantChildHeight = 120;
let bill = 600;

if (childHeight < restaurtantChildHeight){
    bill += 0;
} else if (childHeight >= restaurtantChildHeight){
    bill += 300;
}else{
    bill += 600;
}

console.log(`他們總共支付了${bill}元`);

// 作業五 if、else 練習
// 情境：好寶寶徽章

// 小華目前有三個好寶寶徽章
// 父親請他腿買5個東西，
// 並和他說，如果他都買對，就再給他三個徽章
// 如果買錯的話，就只給一個徽章
// 但最後他買錯了，只買了四個東西
// 請用 if else 語法，來幫小華看看他得了多少徽章

let badge = 3;

// 請將您解決問題的 if else 寫在此處
// 可自由增加變數，或不增加也可。
// 小明最後是不是買錯了？ 答：true。
if (true){
    badge += 1
} else {
    badge += 3
}

console.log(`小華一共得了${badge}個徽章`);

// 作業六 邏輯運算子
// 請依序回答以下 console.log 的值為？

let o = 200;
let p = 300;

console.log(o==200 || p==300);  //true 
console.log(o!==200 || p!==300);    //false
console.log(o==200 && p==300);  //true

//以下為觀察是否有達折扣條件
let hamPrice = 50;
let hamNum = 20;
let isSale = 3000<=hamPrice*hamNum || hamNum>10;

console.log(isSale); //true，因為 hamNum>10，符合條件。


// 作業七 邏輯觀察
// 請試著加上 if 的判斷，讓以下三道任務可以正常運作

// 任務一：當 weight 在 40 以上，小於 60 時，console.log 顯示過輕
// 任務二：當 weight 在 60 以上，小於 80 時，console.log 顯示正常
// 任務三：當 weight 在 80 以上時，console.log顯示過重

let weight = 60; /*可自由變更值，觀看自己邏輯是否正確*/

if (40<weight && weight<60){
    console.log("過輕");
} else if (60<weight && weight<80){
    console.log("正常");
} else if (80<weight){
    console.log("過重");
} else {
    console.log("輕如鴻毛");
}

// 作業八 邏輯運算子加上 if
// 情境：百貨公司贈品
// 百貨公司有 200 個贈品，只要有達以下件件之一，就送客戶一個贈品
// 1. 消費滿 399 元
// 2. 是百貨公司的 VIP 會員

// Bob 今天來消費了 500 元，但並非 VIP 會員
// 請問 Bob 是否有獲得贈品，以及贈品剩下多少？ 請完成以下修變處程式碼

let giftNum = 200;  /* 贈品數量 */
let giftPriceRule = 399; /* 贈品消費門檻 */
let BobPrice = 5000;    /*Bob 消費金額 */
let BobIsvip = false; /*Bob 是否為vip */

// 修改開始處
if ((BobPrice>giftPriceRule)||(BobIsVip == true)){
    console.log("客戶您好，您有符口贈品資格");
    giftNum -= 1;
} else {
    console.log("客戶您好，您沒有符口贈品資格");
}
// 修改結束處

console.log(`贈品還剩下${giftNum}個`);


// 第九題
// 貪心國的個人所得稅收非常重
// 會計官想寫一個程式，來去計算民眾的稅收，以下為條件值
// 條件一：不管有無工作，基本費先收 5,000 元
// 條件二：全年所得在 54 萬以下者，收 30% 稅收
// 條件三：全年所得超過 54 萬～100 萬以下者，收 50% 稅收
// 條件四：全年所得超過 100 萬者，收 80% 稅收

// 例如小華的全年所得為 10 萬， 100,000*0.3+5,000，總計要支付 35,000 元稅收。

let mingMoney = 870000; /* 小明全年個人所得 */
let mingBill = 5000; /*小明稅收帳單，並已加入條件一基本費 5,000 元 */

// 程式碼填寫開始處
if (mingMoney<=540000){
    mingMoney *= 0.3;
    mingBill+=mingMoney;
}else if(mingMoney>540000 && mingMoney<=1000000){
    mingMoney *= 0.5;
    mingBill += mingMoney;
}else if(mingMoney>1000000) {
    mingMoney *= 0.8;
    mingBill += mingMoney;
} else {
    console.log("收入不明");
}

// 程式碼填寫結束處

console.log(`小明總共需支付${mingBill}帳單`);


// 第十題
// 請用 whimsical 服務畫剪刀石頭布的流程圖
// 請寫程式來判斷輸贏
// 請宣告兩個變數
// 第一個變數宣告名稱為 playeerA
// 第二個變數宣告名稱為 playeerB

// 以下為條件一的範例流程，但還是透過 if、if 包 if、else if、else 等方式，思考每個玩家出拳的情境來驗證程式無誤
//以下為範例：
let playerA = "剪刀";
let playerB = "剪刀";

if (playerA == "剪刀" && playerB == "剪刀") {
    console.log("平手");
}
//
//以下為照 whimsical 設計出的程式：
// whismsical 設計稿：https://whimsical.com/VutHTCGKjDuw77V9f5Waia

let NumC = '';
let NumD = '';
let player = ["剪刀","石頭","布"];
NumC = 2;
NumD = 2;
console.log(player[NumC]);
if ((NumC <=2) && (NumD <=2)) {
    if(player[NumC]==player[NumD]){
        console.log("平手！");
    }else if((NumC==0 && NumD==2) || (NumC==1 && NumD==0) || (NumC==2 && NumD==1)){
        console.log("playerC 贏了！");
    }else{
        console.log("playerD 贏了！");
    }
} else {
    console.log("不符遊戲規則，退出遊戲。");
}


