let ProductInfo = {
    Price: 1000,  // 購買價格
    coupons:[
    {
        due_date: "2021-10-15",
        id: 123,
        is_enabled: 0,
        percent: 0.7,
        title: "特惠七折",
    },
    {
        due_date: "2021-08-08",
        id: 456,
        is_enabled: 1,
        percent: 0.5,    // 折扣比例
        title: "特惠五折",
    }
    ]
}

/* 請取得 coupons 陣列中 id 為 456 的 percent，並賦值給 discountPercent */ 
let discountPercent = ProductInfo.coupons[1].percent;
    console.log(discountPercent);
    // console.log(ProductInfo.coupons[1].id);
/* 請取得 coupons 陣列中 id 為 456 的 title，並賦值給 title */
let title = ProductInfo.coupons[1].id;
    console.log(title);
/* 請取得 coupons 陣列中 id 為 456 的 is_enabled，並填入以下 if 判斷式中; 
如果判斷為 true，則對「購買價格」進行折扣*/
    console.log(ProductInfo.coupons[1].is_enabled);
if(ProductInfo.coupons[1].is_enabled){
    /* 程式碼撰寫處，對「購買價格」進行折扣*/
    ProductInfo.Price *= ProductInfo.coupons[1].percent;    console.log(`優惠券已啟用，${title}`);
}else {
    console.log("優惠券未啟用");
}

console.log(`購買價格 ${ProductInfo.Price}`);
