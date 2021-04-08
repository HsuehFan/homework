const urlpath = "https://hsuehfan.github.io/homework/directoryData.json";
const urlpath2 = "https://hsuehfan.github.io/homework/directoryData2.json";
let site1 = document.querySelector('.site1');
let site2 = document.querySelector('.site2');
let datalist = "";
let urlManager = "";
let datalist2 = "";
let urlManager2 = "";

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

axios.get(urlpath2)
.then(function(response){
    datalist2 = response.data;
    // console.log(datalist)
    datalist2.forEach(function(item){
        
        urlManager2 += `
        <a href="${item.urlLocalhost}">${item.titleName}</a></br>   
        `;
    })
    site2.innerHTML = `${urlManager2}`;
});