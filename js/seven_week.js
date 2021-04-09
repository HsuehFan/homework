let people = [
    {
        area:"高雄",
        name:"小明"
    },
    {
        area: "高雄",
        name: "小天"
    },
    {
        area:"台中",
        name:"小華"
    },
    {
        area: "台北",
        name: "小華"
    }
]

  // 篩選地區，並累加數字上去
  // totalObj 會變成 {高雄: 2, 台北: 1, 台中: 2}
let totalObj = {};
    people.forEach(function(item){
        if(totalObj[item.area] == undefined){
            totalObj[item.area] = 1;
        }else{
            totalObj[item.area] += 1;
        }
    })
    console.log(totalObj);

  // newData = [["高雄", 2], ["台北",1], ["台中", 1]]
let newData = [];
let area = Object.keys(totalObj);
console.log(area);
  // area output ["高雄","台北","台中"]
area.forEach(function(item,index){
    let ary = [];
    console.log(item);
    ary.push(item);
    console.log(totalObj[item]);
    ary.push(totalObj[item]);

    newData.push(ary);
})
console.log(newData);
  // 將 newData 丟入 c3 產生器
const chart = c3.generate({
    bindto: "#chart",
    data: {
        columns: newData,
        type : 'donut',
    },
    donut: {
        title: "地區"
    }
});
