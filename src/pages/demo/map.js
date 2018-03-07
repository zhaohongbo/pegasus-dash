export var option = {
  title: {
    text: "上海",
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  geo: {
    map: "shanghai",
    roam: true,
    itemStyle: {
      normal: {
        borderColor: '#0f1416',
        areaColor: '#18adec',
        label: {
          show: true
        }
      },
      emphasis: {
        areaColor: '#389BB7',
        borderWidth: 0
      }
    },
    label: {
      show: true
    }
  },
  series: [
    {
      name: 'pm2.5',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: function (val) {
          return val[2] / 10;
      },
      data: [
        {name: 'data', value: [121.5, 31.2, 122]}
      ],
      label: {
          normal: {
              formatter: '{b}',
              position: 'right',
              show: false
          },
          emphasis: {
              show: true
          }
      },
      itemStyle: {
          normal: {
              color: '#ddb126'
          }
      }
  }
  ]
}