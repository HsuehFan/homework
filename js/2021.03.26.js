/*js*/

let arr = [];
axios.get('https://hexschool.github.io/ajaxHomework/data.json')
.then(function(response){
    console.log('資料有回傳了');
    arr = response.data;
    console.log(arr);
    renderData();
})

function renderData(){
    console.log(arr); 
    const title = document.querySelector('.title');  // 區間 1
    title.textContent = arr[0].name;
}
console.log(arr); 
 // 區間 2
