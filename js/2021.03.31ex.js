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
  // 如何轉換成以下格式，計算各地區總人數
  // {
  //   高雄:2,
  //   台中:1,
  //   台北:1
  // }

let total = {};
people.forEach(function(item){
    if(total[item.area] == undefined){
        total[item.area] = 1;
    }else{
        total[item.area] +=1;
    }
})
console.log(total);