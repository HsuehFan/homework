/*

"您的體重正常"
"您的體重過重"
"您的體重過輕"
"您的體重輕度肥胖"
"您的體重中度肥胖"
"您的體重重度肥胖"
"您的數值輸入錯誤，請重新輸入"

*/
/*

(178, 20);
(178, 70);
(178, 85);
(178, 90);
(178, 110);
(178, 130);
("身高", "體重");

*/

let bmiHistoryData = [];

const bmiStatesData = {
    "overThin": {
      "state": "過輕",
      "color": "藍色"
    },
    "normal": {
      "state": "正常",
      "color": "紅色"
    },
    "overWeight": {
      "state": "過重",
      "color": "澄色"
    },
    "mildFat": {
      "state": "輕度肥胖",
      "color": "黃色"
    },
    "moderateFat": {
      "state": "中度肥胖",
      "color": "黑色"
    },
    "severeFat": {
      "state": "重度肥胖",
      "color": "綠色"
    },
  }


// 輸入數據，顯示對應物件內容







