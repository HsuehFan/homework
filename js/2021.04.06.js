let baseUrl ="https://hexschoollivejs.herokuapp.com";

let api_path = "rita";
let productList = document.querySelector('.productList');

function getProduct(){
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/products`;
  axios.get(url)
      .then(function(res){
        let product = res.data.products;
        console.log(product); // 資料連接測試
        render(product);
      })
      .catch(function(error){
        console.log(error);
      })
}
function render(product){
  let str = "";
  product.forEach((item) => {
    str +=`
    <div class="col-6 mb-3">
    <div class="card">
      <img src="${item.images}" class="card-img-top productImg" alt="${item.title}">
      <div class="card-body">
        <h5 class="card-title"><strong>標題:</strong> ${item.title}</h5>
        <p class="card-text"><strong>種類:</strong> ${item.category}</p>
        <p class="card-text"><strong>原始價格:</strong> ${item.origin_price}</p>
        <p class="card-text"><strong>售價:</strong> ${item.price}</p>
        <p class="card-text"><strong>描述:</strong> ${item.description}</p>
      </div>
    </div>
  </div>
    `;
  })
  productList.innerHTML = str;
}

getProduct();
