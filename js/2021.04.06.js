console.clear();
const urlPath = "https://hexschoollivejs.herokuapp.com/api/livejs/v1/customer/rita/products";

axios.get(urlPath)
    .then((response) => {
        let data = response.data.products;
        console.log(data); //測試資料讀入
        console.log(data[0]);//測試資料讀入
    
        let dataInside = document.querySelector('.productList');
        let str="";
        data.forEach(function(item){
            // console.log(item);
            str +=`
                  <div class="col-6 mb-3">
                    <div class="card">
                      <img src="${item.images}" class="card-img-top productImg" alt="產品圖片">
                      <div class="card-body">
                        <h5 class="card-title"><strong>標題:</strong>${item.title}</h5>
                        <p class="card-text"><strong>種類:</strong> ${item.category}</p>
                        <p class="card-text"><strong>原始價格:</strong> ${item.origin_price}</p>
                        <p class="card-text"><strong>售價:</strong> ${item.price}</p>
                        <p class="card-text"><strong>描述:</strong> ${item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
            `;
        })
        dataInside.innerHTML = str;
    })


// let baseUrl = "https://hexschoollivejs.herokuapp.com";
// let api_path = "rita";
// let productList = document.querySelector('.productList');

// function getProduct() {
//   let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/products`;
// axios.get(url)
//   .then(function (res) {
//     let product = res.data.products
//     render(product);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
// }
// function render(product) {
//   let str = '';
//   product.forEach((item) => {
//     str += `
//       <div class="col-6 mb-3">
//       <div class="card">
//         <img src="${item.images}" class="card-img-top productImg" alt="${item.title}">
//         <div class="card-body">
//           <h5 class="card-title"><strong>標題:</strong> ${item.title}</h5>
//           <p class="card-text"><strong>種類:</strong> ${item.category}</p>
//           <p class="card-text"><strong>原始價格:</strong> ${item.origin_price}</p>
//           <p class="card-text"><strong>售價:</strong> ${item.price}</p>
//           <p class="card-text"><strong>描述:</strong> ${item.description}</p>
//         </div>
//       </div>
//     </div>
//     `
//   })
//   productList.innerHTML = str;
// }
// getProduct();