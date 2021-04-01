const urlpath = "https://hsuehfan.github.io/homework/directoryData.json";
const urlpath2 = "";
let site1 = document.querySelector('.site1');
let site2 = document.querySelector('.site2');
let datalist = "";
let urlManager = "";

axios.get(urlpath)
.then(function(response){
    datalist = response.data;
    // console.log(datalist)
    datalist.forEach(function(item){
        
        urlManager += `
        <a href="${item.urlLocalhost}">${item.titleName}</a></br>   
        `;
    })
    site1.innerHTML = `${urlManager}`;
});
