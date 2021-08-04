//立即函數
//柱狀圖1
(function () {
  //1.實例化對象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  //2.指定配置項和數據
  var option = {
    color: "#2f89cf",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      //修改圖表大小
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["旅遊", "教育", "遊戲", "醫療", "電商", "社交", "金融"],
        axisTick: {
          alignWithLabel: true,
        },
        //x軸刻度樣式
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12,
        },
        axisTick: {
          show: false,
        },
        //x軸線條樣式
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)",
            width: 2,
            type: "solid",
          },
        },
      },
    ],

    yAxis: [
      {
        type: "value",
        //y軸刻度樣式
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12,
        },
        //y軸線條樣式
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)",
            width: 2,
            type: "solid",
          },
        },
        //y軸分隔線樣式
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)",
            width: 2,
            type: "solid",
          },
        },
      },
    ],
    series: [
      {
        name: "人數",
        type: "bar",
        barWidth: "35%",
        data: [10, 52, 200, 334, 390, 330, 220], //實際開發用ajax請求後端數據
        itemStyle: {
          barBorderRadius: 3,
        },
      },
    ],
  };
  //3.把配置項給實例對象
  myChart.setOption(option);
  //4.圖表自適應
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//柱狀圖2
(function () {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  var option = {
    grid: {
      top: "5%",
      left: "22%",
      right: "15%",
      bottom: "5%",
      //   containLabel: true,
    },
    xAxis: {
      show: false, //不顯示x軸標籤
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        axisLine: {
          show: false, //不顯示y軸標籤
        },
        axisTick: {
          show: false, //不顯示y軸刻度
        },
        axisLabel: {
          color: "#fff",
        },
      },
      {
        type: "category",
        inverse: true,
        data: ["702", "350", "610", "793", "664"],
        axisLine: {
          show: false, //不顯示y軸標籤
        },
        axisTick: {
          show: false, //不顯示y軸刻度
        },
        axisLabel: {
          color: "#fff",
        },
      },
    ],

    series: [
      {
        name: "條",
        type: "bar",
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0, //  框壓條step1
        itemStyle: {
          barBorderRadius: 20,
          color: function (params) {
            // console.log(params);
            return myColor[params.dataIndex];
          },
        },
        barCategoryGap: 50, //bar間距離
        barWidth: 13, //bar高度
        label: {
          //bar上的文字
          show: true,
          position: "inside",
          formatter: "{c}%", //{c}自動解析為數據 前幾行的data:[]
          color: "#fff",
          fontSize: "10px",
        },
      },
      {
        name: "框",
        type: "bar",
        data: [100, 100, 100, 100, 100],
        yAxisIndex: 1, //框壓條step2
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 20,
        },
        barCategoryGap: 50, //bar間距離
        barWidth: 22, //bar高度
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//折線圖1
(function () {
  var yearData = [
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      ],
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
      ],
    },
  ];

  var myChart = echarts.init(document.querySelector(".line .chart"));
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["訂閱人數", "觀看數量"],
      textStyle: {
        color: "#4c9bfd",
      },
      right: "2%",
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "rgba(255, 255, 255, .1)",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12px",
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, .1)",
          width: 1,
          type: "solid",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, .1)",
        },
      },
    },

    yAxis: {
      type: "value",
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12px",
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, .1)",
        },
      },
    },

    series: [
      {
        name: "訂閱人數",
        type: "line",
        smooth: true,
        data: yearData[0].data[0],
      },
      {
        name: "觀看數量",
        type: "line",
        smooth: true,
        data: yearData[0].data[1],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  //切換年份
  $(".line h2").on("click", "a", function () {
    //點擊a後根據當前a的index找到對應yearData
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    //重新渲染圖表
    myChart.setOption(option);
  });
})();

//折線圖2
(function () {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  var option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["播放量", "按讚數"],
      textStyle: {
        color: "#4c9bfd",
        fontSize: "12px",
      },
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "26",
          "28",
          "29",
          "30",
        ],
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "rgba(255,255,255,.6)",
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)",
            width: 1,
            type: "solid",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "rgba(255,255,255,.6)",
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, .1)",
          },
        },
      },
    ],
    series: [
      {
        name: "播放量",
        type: "line",
        smooth: true,
        //單獨修改折線樣式
        lineStyle: {
          color: "#0184d5",
          width: "2",
        },
        //漸變顏色
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)", // 起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)", // 结束颜色
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
        },
        symbol: "circle",
        symbolSize: 8,
        //設置圓點樣式
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12,
        },
        //一開始不顯示圓點
        showSymbol: false,
        data: [
          30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30,
          60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40,
        ],
      },
      {
        name: "按讚數",
        type: "line",
        smooth: true,
        //單獨修改折線樣式
        lineStyle: {
          color: "#00d887",
          width: "2",
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)",
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
          },
        },
        symbol: "circle",
        symbolSize: 8,
        //設置圓點樣式
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12,
        },
        //一開始不顯示圓點
        showSymbol: false,

        data: [
          130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130,
          20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20,
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//圓餅圖1
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    //餅圖顏色
    color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "5%",
      //標籤寬高
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.6)",
        fontSize: "11",
      },
    },
    series: [
      {
        name: "年齡分佈",
        type: "pie",
        //餅圖位置
        center: ["50%", "42%"],
        //[內圓半徑,外圓半徑]
        radius: ["40%", "60%"],
        avoidLabelOverlap: false,
        //圖形上的文字
        label: {
          show: false,
          position: "center",
        },
        //相連文字和圖形的線
        labelLine: {
          show: false,
        },
        data: [
          { value: 1, name: "0歲以下" },
          { value: 4, name: "20-29歲" },
          { value: 2, name: "30-39歲" },
          { value: 2, name: "40-49歲" },
          { value: 1, name: "50歲以上" },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//圓餅圖2
(function () {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      left: "center",
      top: "bottom",
      data: [
        "rose1",
        "rose2",
        "rose3",
        "rose4",
        "rose5",
        "rose6",
        "rose7",
        "rose8",
      ],
    },
    series: [
      {
        name: "地區分佈",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        itemStyle: {
          borderRadius: 3,
        },
        label: {
          fontSize: "10",
          color: "rgba(255,255,255,.6)",
        },
        //接圖片和文字的線
        labelLine: {
          //斜線
          length: "6",
          //短橫線
          length2: "8",
        },

        data: [
          { value: 20, name: "台北" },
          { value: 26, name: "新北" },
          { value: 24, name: "基隆" },
          { value: 25, name: "桃園" },
          { value: 20, name: "新竹" },
          { value: 25, name: "苗栗" },
          { value: 30, name: "台中" },
          { value: 42, name: "彰化" },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//中心地圖
(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var geoCoordMap = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028],
  };

  var BJData = [
    [{ name: "北京" }, { name: "上海", value: 95 }],
    [{ name: "北京" }, { name: "广州", value: 90 }],
    [{ name: "北京" }, { name: "大连", value: 80 }],
    [{ name: "北京" }, { name: "南宁", value: 70 }],
    [{ name: "北京" }, { name: "南昌", value: 60 }],
    [{ name: "北京" }, { name: "拉萨", value: 50 }],
    [{ name: "北京" }, { name: "长春", value: 40 }],
    [{ name: "北京" }, { name: "包头", value: 30 }],
    [{ name: "北京" }, { name: "重庆", value: 20 }],
    [{ name: "北京" }, { name: "常州", value: 10 }],
  ];

  var SHData = [
    [{ name: "上海" }, { name: "包头", value: 95 }],
    [{ name: "上海" }, { name: "昆明", value: 90 }],
    [{ name: "上海" }, { name: "广州", value: 80 }],
    [{ name: "上海" }, { name: "郑州", value: 70 }],
    [{ name: "上海" }, { name: "长春", value: 60 }],
    [{ name: "上海" }, { name: "重庆", value: 50 }],
    [{ name: "上海" }, { name: "长沙", value: 40 }],
    [{ name: "上海" }, { name: "北京", value: 30 }],
    [{ name: "上海" }, { name: "丹东", value: 20 }],
    [{ name: "上海" }, { name: "大连", value: 10 }],
  ];

  var GZData = [
    [{ name: "广州" }, { name: "福州", value: 95 }],
    [{ name: "广州" }, { name: "太原", value: 90 }],
    [{ name: "广州" }, { name: "长春", value: 80 }],
    [{ name: "广州" }, { name: "重庆", value: 70 }],
    [{ name: "广州" }, { name: "西安", value: 60 }],
    [{ name: "广州" }, { name: "成都", value: 50 }],
    [{ name: "广州" }, { name: "常州", value: 40 }],
    [{ name: "广州" }, { name: "北京", value: 30 }],
    [{ name: "广州" }, { name: "北海", value: 20 }],
    [{ name: "广州" }, { name: "海口", value: 10 }],
  ];

  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";

  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push([
          {
            coord: fromCoord,
          },
          {
            coord: toCoord,
          },
        ]);
      }
    }
    return res;
  };

  var color = ["#a6c84c", "#ffa022", "#46bee9"];
  var series = [];
  [
    ["北京", BJData],
    ["上海", SHData],
    ["广州", GZData],
  ].forEach(function (item, i) {
    series.push(
      {
        name: item[0] + " Top10",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "#fff",
          symbolSize: 3,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0] + " Top10",
        type: "lines",
        zlevel: 2,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.4,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0] + " Top10",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke",
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}",
          },
        },
        symbolSize: function (val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
          };
        }),
      }
    );
  });

  var option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      bottom: 0,
      right: 0,
      data: ["北京 Top10", "上海 Top10", "广州 Top10"],
      textStyle: {
        color: "#fff",
        fontSize: "10",
      },
      selectedMode: "single",
    },
    geo: {
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#fff",
        },
      },
      zoom: 1.1,
      roam: true,
      itemStyle: {
        normal: {
          areaColor: "rgba(20,41,87,0.5)",
          borderColor: "#0692a4",
        },
        emphasis: {
          areaColor: "#0b1c2d",
        },
      },
    },
    series: series,
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
