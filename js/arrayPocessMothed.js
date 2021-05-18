// 相同的陣列
const people = [
    {
        name: 'Casper',
        like: '鍋燒意麵',
        age: 18
    },
    {
        name: 'Wang',
        like: '炒麵',
        age: 24
    },
    {
        name: 'Bobo',
        like: '蘿蔔泥',
        age: 1
    },
    {
        name: '滷蛋',
        like: '蘿蔔泥',
        age: 3
    }
];

    let arr1 = people.filter((item) => {
        return item.age > 5
    })
        

    console.log(arr1);