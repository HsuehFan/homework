let answer = {};
let urlPath = "https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json";
let answer1 = document.querySelector('.answer1');
axios.get(urlPath)
    .then((response) =>{

        let total = {};
        let data = response.data;

        data.forEach((item, i) =>{
            if(total[item.jsGroup]===undefined){
                total[item.jsGroup] = 1;
            } else {
                total[item.jsGroup] +=1;
            }
            
        })
        let dataProcess = Object.keys(total);
            dataProcess.forEach((item)=>{
                if(item !=="未分組"){
                    answer[`第 ${item} 組人數`] = total[item];

                }else{
                    answer[`第 ${item} 人數`] = total[item];

                }
            })
            console.log(answer);
    })