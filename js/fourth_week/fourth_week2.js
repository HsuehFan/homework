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
("身高", "'體重")';

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

function printBmi(height, weight){
  let bmi = (weight / (height /100)**2).toFixed(2);
  if(bmi > 0) {
    bmi < 18.5
        ? addData("overThin", bmi)
        : bmi <24 
        ? addData("normal", bmi)
        : bmi <27 
        ? addData("overWeight", bmi)
        : bmi <30 
        ? addData("mildFat", bmi)
        : bmi <35 
        ? addData("moderateFat", bmi)
        : addData("severeFat", bmi);
  } else {
    console.log("您的數值輸入錯誤，請重新輸入。");
  }
}

function addData(state, bmi){
  bmiHistoryData.push({
      bmi: bmi,
      state: bmiStatesData[state].state,
      color: bmiStatesData[state].color,
  });
  console.log(
    `您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`
  );
}

function showHistoryData() {
  lastIndex = bmiHistoryData.length-1;
  abbData = bmiHistoryData[lastIndex];
  console.log(
    `總共計算 ${lastIndex+1}次 BMI 計錄，最後一次 BMI 指數為 ${abbData.bmi}，體重${abbData.state}！健康指數為${abbData.color}`
  );
}


printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
printBmi(178, 90);
printBmi(178, 110);
printBmi(178, 130);
printBmi("身高", "'體重")

showHistoryData();