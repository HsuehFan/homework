console.clear();
const api_path =  "rita";
const baseUrl = `https://hexschoollivejs.herokuapp.com`;
let productList = document.querySelector('.productList');
let cartList = document.querySelector('.cartList');
let delAllCarList = document.querySelector('.delAllCartList');

delAllCarList.addEventListener('click', function(){
    axios.delete(`${baseUrl}/api/livejs/v1/customer/${api_path}/carts`)
    .then(function (response) {
        let cartData = response.data.carts;
        renderCart(cartData);
        // alert('已清空購物車！');
    })
})




function getProduct() {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/products`;
  axios.get(url)
  .then(function (response) {
  let product = response.data.products;
      renderProduct(product);
    })
    .catch(function (error) {
      console.log(error);
    })
}
function getCarts() {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts`;
  axios.get(url)
    .then(function (response) {
      let cartData = response.data.carts;
      renderCart(cartData);
    })
    .catch(function (error) {
      console.log(error);
    })
}

function renderCart(cartData) {
   let str = '';
   cartData.forEach(function(item) {
     str += `
        <li>
          <p>名稱: <span>${item.product.title}</span></p>
          <p>數量: <span>${item.quantity}</span></p>
        </li>
     `;
   })
   cartList.innerHTML = str;
}

function renderProduct(product) {
  let str = '';
  product.forEach((item) => {
    str += `
      <div class="col-6 mb-3">
      <div class="card">
        <img src="${item.images}" class="card-img-top productImg" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title"><strong>標題:</strong> ${item.title}</h5>
          <p class="card-text"><strong>種類:</strong> ${item.category}</p>
          <p class="card-text"><strong>原始價格:</strong> ${item.origin_price}</p>
          <p class="card-text"><strong>售價:</strong> ${item.price}</p>
          <p class="card-text"><strong>描述:</strong> ${item.description}</p>
          <button type="button" class="btn btn-primary addCart" data-id="${item.id}">加入購物車</button>
        </div>
      </div>
    </div>
    `
  })
  productList.innerHTML = str;
  let addCartBtn = document.querySelectorAll('.addCart');
  addCartBtn.forEach(function(item) {
    item.addEventListener('click', function(e){
      addCart(e.target.dataset.id);
      console.log(e);
    });
  })
}
function addCart(id) {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts`;
  let data = {
    "data": {
      "productId": id,
      "quantity": 1
    }
  }
  axios.post(url, data)
    .then(function (response) {
      console.log(response.data.carts);
      getCarts();
    })
    .catch(function (error) {
      console.log(2, error);
    })
}
getProduct();
getCarts();