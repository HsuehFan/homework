let data = [
    {
      Charge:"免費",
      name:"廖洧杰充電站"
    }, {
      Charge: "投幣式",
      name: "小花充電站"
    }, {
      Charge: "投幣式",
      name: "小明充電站"
    }, {
      Charge: "投幣式",
      name: "小天充電站"
    }
  ];
  const list = document.querySelector('.list');
  // 預設載入函式
  function init(){
    let str = "";
    data.forEach(function (item, index) {
      let content = `<li>${item.name}，${item.Charge}</li>`;
      str += content;
    })
    list.innerHTML = str;
  }
  init();
  // 篩選器邏輯
  const stationFilter = document.querySelector(".filter");
  stationFilter.addEventListener("click",function(e){
    if (e.target.value == undefined){
      return ;
    }
    let str = "";
    data.forEach(function(item,index){
      if (e.target.value == "全部"){
        str += `<li>${item.name}，${item.Charge}</li>`
      }else if (e.target.value == item.Charge){
        str+=`<li>${item.name}，${item.Charge}</li>`
      }
    })
    list.innerHTML = str;
  })
  // 新增邏輯
  
  const stationName = document.querySelector(".stationName");
  const stationCharge = document.querySelector(".stationCharge");
  const btn = document.querySelector(".btn");
  
  btn.addEventListener("click",function(e){
    console.log(stationName.value);
    console.log(stationCharge.value);
    let obj = {};
    obj.Charge = stationCharge.value;
    obj.name = stationName.value;
    data.push(obj);
    init();
    stationCharge.value ="免費";
    stationName.value = "";
   
})
