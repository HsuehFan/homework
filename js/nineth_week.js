console.clear();
const api_path = "rita"
const baseUrl = "https://hexschoollivejs.herokuapp.com";
const urlCars = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts`;
let product = [];
let cart = {};
let productWrap = document.querySelector('.productWrap');
let productSelect = document.querySelector('productSelect');
let cartTable = document.querySelector(".shoppingCart-table");
let orderInfo = document.querySelectorAll(".orderInfo-input");
let sendOrderInfo = document.querySelector(".orderInfo-btn");

//初始化
let url =`${baseUrl}/api/livejs/v1/customer/${api_path}/products`;
    axios.get(url)
    .then(function(response){
        console.log(response.data);//測試
        if(response.data.status){
            product = response.data.products;
            productsList();
            cartInit();
            productFilter();
        }else{
            alert('資料錯誤');
        }
    });

//顯示商品目錄用
function productsList() {
    let str = "";
    product.forEach(function (item) {
    str += `
        <li class="productCard">
        <h4 class="productType">新品</h4>
        <img src= ${item.images}  alt="">
        <a href="#" id="addCardBtn" data-id=${item.id}>加入購物車</a>
        <h3>${item.title}</h3>
        <del class="originPrice">NT$${item.origin_price}</del>
        <p class="nowPrice">NT$${item.price}</p>
        </li>
        `;
    });
    productWrap.innerHTML = str;
}


//產品篩選
function productFilter() {
    let filter = [];
    let filterList = `<option value="全部" selected>全部</option>`;
    product.forEach(function (item) {
        
        if (filter.indexOf(item.category) === -1) {
            filter.push(item.category);
            filterList += `<option value=${item.category}>${item.category}</option>`;
        }
    });
    productSelect.innerHTML = filterList;
}

  //購物車初始化(axios)
function cartInit(){
    axios.get(urlCars)
    .then(function (response) {
        cart = response.data;
        cartCombind();
    });
}

  //購物車內容
function cartCombind() {
    let cartList = 
        `<tr>
            <th width="40%">品項</th>
            <th width="15%">單價</th>
            <th width="15%">數量</th>
            <th width="15%">金額</th>
            <th width="15%"></th>
        </tr>`;
    cart.carts.forEach(function (item) {
    cartList += 
        `<tr>
            <td>
                <div class="cardItem-title">
                    <img src=${item.images} alt="">
                    <p>${item.product.title}</p>
                </div>
            </td>
            <td>NT$${item.product.price}</td>
            <td>${item.quantity}</td>
            <td>NT$${item.product.price * item.quantity}</td>
            <td class="discardBtn">
                <a href="#" class="material-icons" data-id=${item.id}>
                    clear
                </a>
            </td>
        </tr>`;
    });
    cartList += 
        `<tr>
            <td>
                <a href="#" class="discardAllBtn">刪除所有品項</a>
            </td>
            <td></td>
            <td></td>
            <td>
                <p>總金額</p>
            </td>
            <td>NT$${cart.finalTotal}</td>
        </tr>`;
    cartTable.innerHTML = cartList;
}

  //監聽產品購買
productWrap.addEventListener("click", function(e){
    e.preventDefault();
    if (e.target.nodeName === "A") {
        let addCartObj = {};
        addCartObj.data = {
            productId: e.target.getAttribute("data-id"),
            quantity: +1
    };
    axios.post(`urlCars`, addCartObj)
        .then(function (response) {
            cartInit();
        })
        .catch(function (response) {
            alert("傳送失敗");
        });
    } else {
        return;
    }
});

    //購物車刪除
cartTable.addEventListener("click", function(e){
    e.preventDefault();
    if (e.target.nodeName === "A") {
        if (e.target.parentNode.getAttribute("class") === "discardBtn") {
            axios.delete(`${baseUrl}/api/livejs/v1/customer/${api_path}/carts/${e.target.getAttribute("data-id")}`)
            .then(function () {
            cartInit();
            });
        } else if (e.target.getAttribute("class") === "discardAllBtn") {
            axios.delete(`${baseUrl}/api/livejs/v1/customer/${api_path}/carts/`)
            .then(function (response) {
            cartInit();
            })
        .catch(function () {
            alert("刪除失敗");
        });
    }
    } else {
        return;
    }
});

  //下拉式選單功能
productSelect.addEventListener("change", function(e){
    let productList = "";
    if (e.target.value === "全部") {
        productInit();
        } else {
        product.forEach(function (item,) {
        if (item.category === e.target.value)
                productList += `<li class="productCard">
                    <h4 class="productType">新品</h4>
                    <img src= ${item.images}  alt="">
                    <a href="#" id="addCardBtn" data-id=${item.id}>加入購物車</a>
                    <h3>${item.title}</h3>
                    <del class="originPrice">NT$${item.origin_price}</del>
                    <p class="nowPrice">NT$${item.price}</p>
                </li>`;
        });
    productWrap.innerHTML = productList;
    }
});

sendOrderInfo.addEventListener("click", function(e){
    e.preventDefault();
    let infoObj = {
        data: {
            user: {
            name: orderInfo[0].value,
            tel: orderInfo[1].value,
            email: orderInfo[2].value,
            address: orderInfo[3].value,
            payment: orderInfo[4].value
            }
        }
    };
    axios.post(`${baseUrl}/api/livejs/v1/customer/${api_path}/orders`,infoObj)
    .then(function (response) {
        cartInit();
        alert("已傳送訂單");
        orderInfo.forEach(function (item) {
            item.value = "";
        });
    })
    .catch(function (response) {
        alert("錯誤");
    });
});
