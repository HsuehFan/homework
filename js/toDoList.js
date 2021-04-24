    
const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const list = document.querySelector('.list')
let data = [];

function renderData(){
    let str = ""
    data.forEach(function(item, index){
        str += 
        `
        <li>${item.content} <input type="button" data-num="${index}" class="delete" value="刪除待辦"></li>
        `;
    })
    list.innerHTML=str;
}
renderData();

//新增功能
save.addEventListener('click', function(e){  //資料送出功能
    if(txt.value==''){         //這邊會基本排錯，避免輸入空白。
        alert('空白，請輸入資料。');
        return;
    }

    let obj = {};
    obj.content = txt.value;   //<= 重要
    data.push(obj)
    renderData();
    console.log(data);
    txt.value ='';
})

//刪除功能
list.addEventListener('click', function(e){
    if(e.target.getAttribute("class") !=="delete"){
        alert("沒點擊到刪除按鈕");
        return;
    }
    // alert("您目前確實點到刪除鈕。");  <=測試
    
    let num = e.target.getAttribute('data-num');
    console.log(`您點到的是${num}`);
    data.splice(num, 1);
    renderData();
})