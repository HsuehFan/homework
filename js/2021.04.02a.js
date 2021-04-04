console.clear();
let data;
let sortedData;
function init(){
  axios.get("https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json")
  .then(function(response){
    data = response.data;
    // 資料排序
    dataSort();
    // 渲染畫面
    renderList();
    renderC3();
  })
}
function dataSort() {
  sortedData = data.sort(function(a, b){
     let timeA = parseInt(a.practiceMinute) * 60 + parseInt(a.practiceSecond);
     let timeB = parseInt(b.practiceMinute) * 60 + parseInt(b.practiceSecond);
     return timeA - timeB;
  })
}
function renderList(){
  let str = '';
  sortedData.forEach(function(item){
    str +=`<li>姓名：${item.slackName}，花費時間：${item.practiceMinute} 分 ${item.practiceSecond} 秒</li>`
  })
  const list = document.querySelector('.list');
  list.innerHTML = str;
}
function renderC3(){
  let totalObj = {};
  sortedData.forEach(function (item, index) {
    if (totalObj[item.jsGroup] === undefined) {
      totalObj[item.jsGroup] = 1;
    } else {
      totalObj[item.jsGroup] += 1;
    }
  })
 
  // dount 圖
  let newData = [];
  let groupNum = Object.keys(totalObj);
  groupNum.forEach(function (item, index) {
    let ary = [];
    ary.push(item);
    ary.push(totalObj[item]);
    newData.push(ary);
  })
  let chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: newData,
      type: 'donut',
    },
    donut: {
      title: "各組人數比例"
    }
  });
}
init();