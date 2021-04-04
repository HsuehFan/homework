console.clear();
const url ="https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json";

axios.get(url)
    .then((response) => {
        let total = {};
        let data = response.data;
        data.forEach((item, i) => {
            if(total[item.jsGroup] === undefined){
                
                total[item.jsGroup] = 1;
                
            }else{
                total[item.jsGroup] += 1;
            }
        })
        console.log(total);
    })