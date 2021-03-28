let element = document.querySelector("#targetId");
console.log(element.getAttribute('id'));    

//--------------

console.log(element.getAttribute('name'));//由於 name 屬性不存在，因此會回傳 null


// setAttribute
let element2 = document.querySelector("#targetId2");
element2.setAttribute('class', 'colorRed');

//問題
let element3 = document.querySelector('#targetHref');
if( element3.getAttribute('name')=="google"){
    element3.setAttribute('href', 'https://www.google.com');
    element3.setAttribute('target', '_blank');
    element3.setAttribute('class', 'colorRed');
}    