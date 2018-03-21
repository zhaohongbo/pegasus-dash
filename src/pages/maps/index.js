import React from 'react';
import echarts from 'echarts/lib/echarts';
import { createOption } from './map.js';
import 'echarts/lib/chart/map';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/title';
import './index.css'
import shanghaiMap from '../../data/shanghai.json';
import { queryLocation } from '../../services/locationService'

export default class Maps extends React.Component {
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('charts'));
    echarts.registerMap("shanghai", shanghaiMap);
    let data = [
      { name: 'data', value: [121.5, 30.2, 122] }
    ];
    myChart.setOption(createOption(data));
    queryLocation().then((response) => {
      let locData = response.map((loc) => {
        return { name: loc.name, value: [loc.longitude, loc.latitude, loc.value] };
      });
      myChart.setOption(createOption(locData));
    });
  }

  render() {
    return (
      <div id="charts" />
    );
  }
}