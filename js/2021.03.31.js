console.clear();
let url = "https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json";
let totalNum = document.querySelector('.totalNum');
let str = "";
axios.get(url)
    .then((response) => {
        let total = {};
        let data = response.data;
        data.forEach((item, i) => {
            if(total[item.jsGroup] === undefined){
                total[item.jsGroup] = 1
            }else {
                total[item.jsGroup] += 1;
            
            }
        })
        console.log(total);
        for (i=1; i<28; i++){
            str+=`<li>"${i}":  ${total[i]}</li>`;
        }
        str += `"未分組": 27`;
        totalNum.innerHTML = str;
    })
