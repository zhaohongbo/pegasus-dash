import 'echarts/lib/chart/pie';

function createOption(data) {
  let option = {
    backgroundColor: '#ffffff',
    title: {
      text: '测试',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
      data: ['1', '2', '3'],
      selected: { '1': true, '2': true, '3': true },
    },
    series: [
      {
        name: '测试',
        type: 'pie',
        radius: '55%',
        center: ['40%', '50%'],
        data: [
          { name: '1', value: 0.3 },
          { name: '2', value: 0.3 },
          { name: '3', value: 0.4 },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  return option;
}

export function initPie(myChart) {
  myChart.setOption(createOption(null));
}