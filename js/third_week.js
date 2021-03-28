/***   作業 1 填答區開始   **/
// 題目一
// 請在 obj 上新增以下內容

// 1. 設定屬性名為 "myName"，並賦予值為 "Tom"
// 2. 設定屬性名為 "age"，並賦予值為 18
// 3. 設定屬性名為 "pets"，並賦予值為 ["John","Mike"]
// 4. 設定屬性名為 "isWakeUp"，並賦予值為 false
let obj = {
    myName: "Tom",
    age: 18,
    pets: ["John","Mike"],
    isWakeUp: false
};
console.log(obj.myName);
console.log(obj.age);
console.log(obj.pets[1]);
console.log(obj.isWakeUp);

/***   作業 1 填答區結束   **/



/***   作業 2 填答區開始   **/
// 題目二
// 請新增一行 Code，在 colors 用 push 語法新增一筆顏色資料，名稱為 black
// 請新增一行 Code，在 console.log 來印出陣列總長度筆數

let colors = ["red","black","yellow"];

colors.push("black");
console.log(colors);
console.log(colors.length);

/***   作業 2 填答區結束   **/



/***   作業 3 填答區開始   **/
// 題目三
// 母親今年的狀態需要更新，還請協助她修改物件資料
// 流程一：母親多一歲了，幫他累加一歲在 age 屬性對應的 value 上
// 流程二：母親多了一位小孩，幫她在 sons 屬性新增一位 "John"
// 請新增一行 Code，寫 console.log 來印出 motherStatus

let motherStatus = [
    {
        name: "mary",
        age: 31,
        sons: ["Tom", "Bob"]
    }
]

motherStatus[0].age += 1;
motherStatus[0].sons.push("John");
console.log(motherStatus);
console.log(motherStatus[0].sons);

/***   作業 3 填答區結束   **/

/***   作業 4 填答區開始   **/
// 題目四
// 小杰獲得高雄旅遊網的資料，並且把資料放進 kaohsiungTravelData 物件裡，
// 但是資料太雜了，他只想取出他想要的內容，還請幫幫他

// 資料一：小杰想取得第一筆旅遊景點名稱，也就是 "佛光山"
// 資料二：小杰想取出得第二筆旅遊景點 x 座標，屬性名稱為 Px
// 例：取出 contentType 的 value 為 kaohsiungTravelData.contentType

let kaohsiungTravelData = {}

/***   作業 4 填答區結束   **/

/***   作業 5 填答區開始   **/
// 題目五

// 宣告變數，變數名稱請符描述情境
// 伂照描述賦予變數陣列與物件的屬性和值

/*
描述一：是一個家庭合照
描述二：母親姓名為 Jane
描述三：父親姓名為 Bill
描述四：女兒姓名為 Rosa
描述五：兒子姓名為 Howard
描述六：有養兩隻狗，名字叫做 Bobo、Koko
            ↓                     */   
let famiryPhotos = [
    {
        motherName: "Jane",
        fatherName: "Bill",
        daughterName: "Rosa",
        sonName: "Howard",
        dogsName: ["Bobo","Koko"]
    }
]

/***   作業 5 填答區結束   **/

/***   作業 6 填答區開始   **/
// 題目六
// 宣告變數，變數名稱還請符合描述情境
// 伂照描述賦予變數陣與物件的屬性和值

/*
    描述一：販售版寫了一棟別墅的販售資訊
    描述二：內容是有一個建案，名稱叫做「六角大別墅」，地點在「高雄市」
    描述三：因為太豪華，所以這個建案只有「兩戶」

    第一戶資訊：
    價格：2 億 8 千萬
    坪數：900 坪
    是否有游泳池：無
    是否有地下室：有
    樓數：5樓
    衛浴：3衛
    專屬管家：無
    是否已被賣掉：有

    第二戶資訊：
    價格：3 億 2 千萬
    坪數：1200 坪
    是否有游泳池：有
    是否有地下室：有
    樓數：7樓
    衛浴：4衛
    專屬管家：有
    是否已被賣掉：無
*/

let villaInfo = {
    buildCaseName: "六角大別墅",
    location: "高雄市",
    houseHolds:[
        {
            buildPrice: 280000000,
            houseSize: 900,
            swimmingPools: false,
            basement: true,
            floors: 5,
            bathrooms: 3,
            steward: false,
            sold: true
        },
        {
            buildPrice: 320000000,
            houseSize: 1200,
            swimmingPools: true,
            basement: true,
            floors: 7,
            bathrooms: 4,
            steward: true,
            sold: false
        }
    ]
}




/***   作業 6 填答區結束   **/

/***   作業 7 填答區開始   **/
// 題目七
// 下方為台灣一間旅館的 JSON 資料
// 有一個客戶，在下週二平常日時段，將所有房型都訂了一間房
// 請透過程式去計算他一共花了多少錢

let roomDetail = {
  "success": true,
  "items": [
    {
      "id": "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 1380,
      "holidayPrice": 1500,
      "name": "Single Room"
    },
    {
      "id": "g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1564182379166-8fcfdda80151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
      "normalDayPrice": 1899,
      "holidayPrice": 2000,
      "name": "Deluxe Single Room"
    },
    {
      "id": "RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1526913621366-a4583840d736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "normalDayPrice": 2460,
      "holidayPrice": 2500,
      "name": "Double Room"
    },
    {
      "id": "kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1519710889408-a67e1c7e0452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 2888,
      "holidayPrice": 3000,
      "name": "Deluxe Double Room"
    },
    {
      "id": "VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1558976825-6b1b03a03719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "normalDayPrice": 3350,
      "holidayPrice": 3500,
      "name": "Twin Room"
    },
    {
      "id": "YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1552902019-ebcd97aa9aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 3899,
      "holidayPrice": 4000,
      "name": "Deluxe Twin Room"
    }
  ]
}

//首先，先順利取值，再確認資料長度，最後安排迴圈做加總運算。

// let priceValue = roomDetail.items[0]["normalDayPrice"];
// console.log(priceValue);  // 1380 順利取值。
let howLong = roomDetail.items.length;
console.log(howLong);  //才6筆資料而已。
//以下使用迴圈作加總
let totalPrice =0;
for (let j=0; j< howLong; j++){
    let priceValue =  roomDetail.items[j].normalDayPrice;
    totalPrice += priceValue;
}
console.log(totalPrice); //總共 15,876 元

/***   作業 7 填答區結束   **/



/***   作業 8 填答區開始   **/
// 題目八
// 老闆想要幫公司兩人都加薪到 40,000元
// 請透過以下資訊修變，幫老闆做加薪的動作

let salaryData = { 
    company: 'circle center',
    bossName: 'casper',
    staff:[
        {
            name: "Bob",
            salary: 32000
        },
        {
            name: "Jack",
            salary: 28000
        }
    ]
}

// 第一位員工加薪邏輯
if(salaryData.staff[0].salary <= 40000 /* 此處邏輯寫錯 */){
    //請填寫第一位員工加薪程式碼
    salaryData.staff[0].salary += 40000 - salaryData.staff[0].salary;
    console.log(salaryData.staff[0].salary);
}

// 第二位員工加薪邏輯
if(salaryData.staff[1].salary <= 40000){
    salaryData.staff[1].salary += 40000 - salaryData.staff[1].salary;
    console.log(salaryData.staff[1].salary);
}
/***   作業 8 填答區結束   **/

/***   作業 9 填答區開始   **/
// 題目九
// 請根據以上三個 JSON 格式 API，選擇其中一個用文字說明他的資料集內容
// 例：最外層是一個陣列，陣內包含很多個物件，物件內有…屬性，值為…。
// 選擇 1. 電動機車充電站名稱及充電站地址。(因為資料結構較為簡單)

/*
最外層是一個陣列，陣內包含多個物件，物件一共有4個屬性，分別為 
    kind: 值 一律為 "公共充電站"。
    Charge:  值有"免費" 及 "投幣式" 兩種。
    Location: 值為 所在區域。
    Address: 值通常為 詳細的地址 。
    如以下實例
[        
    {
    Kind: "公共充電站",
    Charge: "免費",
    Location: "新興區公所 ",
    Address: " 高雄市新興區中正三路34號1樓(室內停車場)"
    },
    {
    Kind: "公共充電站",
    Charge: "免費",
    Location: "高雄市民權停車場(機車停車場) ",
    Address: " 高雄市新興區民權一路221號"
    },
]

/***   作業 9 填答區結束   **/

/***   作業 10 填答區開始   **/
// 題目十
// 請用 whimsical 服務畫 BMI 流程圖
// 請參考圖片來繪製
// 流程請原本的從最輕到重，改為從最重到過經
// 並提供 whimsical 網址方便檢測。
// Whimsical 位置：https://whimsical.com/bmi-VYY3VRCH1GySbzagD631zB

/***   作業 10 填答區結束   **/

