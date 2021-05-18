const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const listitem = document.querySelector('.list');

let data = [
    {"todo": "上課"}
];

//資料初始化
function rederData(){
    let str ='';
    data.forEach(function(item, index){
        console.log(item.todo);
    str +=
    `<li>${item.todo}<input type="button" data-num="${index}" class="delete" value="刪除待辦"></li>`;
    })
    listitem.innerHTML = str;
}
rederData();

save.addEventListener('click', function(){
    // console.log(txt.value);
    data.push({
        todo: txt.value
    })
    rederData();
    txt.value = "";
})

listitem.addEventListener('click', function(e){
    if(e.target.nodeName !== "INPUT"){
        console.log("如要刪除清單，請點擊'刪除待辦'");
        return;
    }
    let num = e.target.getAttribute("data-num");
    data.splice(num, 1);
    rederData();
})