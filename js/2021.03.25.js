let arr = [];
axios.get('https://hexschool.github.io/ajaxHomework/data.json').then(function(response){
    console.log('資料有回傳了');
    arr = response.data;
})
console.log(arr);