/*
而它們最大的差異在於: filter() 產生的新陣列只會包含「符合回傳條件」的元素，map() 則是會包含「運算後」的所有元素。

舉例來說:

filter()
*/
let a = [1,2,3,4];
let newa = a.filter(function(item){
    return item > 1;
});
console.log(newa); 


/*
map()
*/
let a1 = [1,2,3,4];
lnewArr = arr.map(function(item) {
    return item*2;
    })
    

console.log(newa1); 

/*
問題一：
請透過 map() 將 arr 內的元素都乘以2，並指派給 newArr。

*/
let arr = [1, 4, 9, 16];
let newArr;
arr = arr*2;
console.log(arr);




/*
問題二：
以下為 customer 顧客資料，請透過 map()方法，修改程式碼並執行以下要求：
    1.取出各個陣列元素的 Name 形成一個新的陣列，並指派給 customerName
        如：["Jordan", "Jenny", "Kevin", "louis"]

    2.取出各個陣列元素的id形成一個新的陣列，並指派給 customerid
        如：[123,456,789,987]
*/

let customer = [
    {
        Name: 'Jordan',
        id: 123,
    },
    {
        Name: 'Jenny',
        id: 456,
    },
    {
        Name: 'Kevin',
        id: 789,
    },
    {
        Name: 'louis',
        id: 987,
    }
];

let customerName;
let customerId;

customerName = customer.map(function(item){
    return item.Name;
})

customerId = customer.map(function(item){
    return item.id;
})

console.log(customerName);
console.log(customerId);