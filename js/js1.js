function init(){
    axios.get(url)
        .then(function(response){
            data = response.data;
            datasort();  // ← 資料排序
            rederList(); // ← 渲染畫面 1
            rederC3(); // ← 渲染畫面 2
        })
    }