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