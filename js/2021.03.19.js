let el = document.querySelector('#targetInput');
let triggerBtn = document.querySelector('#triggerBtn');

triggerBtn.addEventListener('click',function(){
    let newValue = el.value;
    newValue = parseInt(newValue);
    newValue += 300;
    el.value = newValue;
    console.log(el.value);
    console.log(el.getAttribute('value'));
})