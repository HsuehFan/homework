
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json')
    //如果連接成功，可以用 then() 處理傳回來的值，以下程式碼將回傳結果儲存於 responce。
    .then(function (response){
        console.log(response.data.length);
        console.log(response.data[0].id);
        console.log(response.data[0].name);
        console.log(response.data[0].imgUrl);
        console.log(response.data[0].area);
        console.log(response.data[0].description);
        console.log(response.data[0].group);
        console.log(response.data[0].price);
        console.log(response.data[0].rate);
    });

    