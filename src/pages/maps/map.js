import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/map';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/title';
import shanghaiMap from '../../data/shanghai.json';
import { queryLocation } from '../../services/locationService'

function createOption(data) {
  let option = {
    backgroundColor: '#ffffff',
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
      zoom: 8,
      center: [121.5, 31.2],
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
        data: data,
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
            color: 'rgb(90,3,3)'
          }
        }
      }
    ]
  };
  return option;
}

export function initShanghaiMap(myChart) {
  echarts.registerMap("shanghai", shanghaiMap);
  myChart.setOption(createOption(null));
  queryLocation().then((response) => {
    let locData = response.map((loc) => {
      return { name: loc.name, value: [loc.longitude, loc.latitude, loc.value] };
    });
    myChart.setOption(createOption(locData));
  });
}