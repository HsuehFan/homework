/*js*/


let targetName = document.querySelector('#targetName');
let targetImg = document.querySelector('#targetImg');
let targetArea = document.querySelector('#targetArea');
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json')
    .then(function (response){
        targetName.textContent = response.data[0].name;
        targetImg.setAttribute('src', response.data[0].imgUrl);
        targetArea.textContent = response.data[0].area;

    });




