import React from 'react';
import echarts from 'echarts/lib/echarts';
import { option } from './map.js';
import  'echarts/lib/chart/map';
import  'echarts/lib/chart/scatter';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/title';
import './index.css'
import shanghaiMap from '../../data/shanghai.json'; 

export default class Demo extends React.Component {
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('charts'));
    echarts.registerMap("shanghai", shanghaiMap);
    myChart.setOption(option);
  }

  render() {
    return (
      <div id="charts"/>
    );
  }
}