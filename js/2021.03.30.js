let chart = c3.generate({
    bindto: '.chart',
    data:{
        x: '日期',
        columns: [
            ['日期', '2021-1-15', '2021-1-16', '2021-1-17', '2021-1-18', '2021-1-19', '2021-1-20'],
            ['大翰成績', 60, 50, 80, 90, 67, 80],
            ['小寶成績', 90, 70, 50, 68, 80, 90]
        ]
    },
    axis: { // 座標軸
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        }
    }
});

let dountChart = c3.generate({
    bindto: '.donutChart',
    data:{
        columns:[
            ['鬼屋', 10],
            ['女僕咖啡廳', 20],
            ['童話世界', 5]
        ],
        type: "donut",
        colors: {
            "鬼屋": "#E68618",
            "女僕咖啡廳": "#F280CA",
            "童話世界": "#26BFC7"
        }
    },
        donut: {
            title: "園遊會主題票選"
        }
});