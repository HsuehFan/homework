const urlPath = "https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json";

let totalObj = {};
axios.get(urlPath)
    .then(function(res){
        let data = res.data;
    data.forEach(function(item){
        if(totalObj[item.area] === undefined){
            totalObj[item.area] = 1;
        } else {
            totalObj[item.area] += 1;
        }
    })

    newData = [];
    let area = Object.keys(totalObj);
    // area output ["高雄","台北","台中"]
    area.forEach(function(item){
        let arr = [];
        arr.push(item);
        arr.push(totalObj[item]);
        newData.push(arr);
    })

      // 將 newData 丟入 c3 產生器
    const chart = c3.generate({
        bindto: ".chart",
        data: {
            columns: newData,
            type: 'donut'
        },
        donut: {
            title: "地區"
        }
    })
})
