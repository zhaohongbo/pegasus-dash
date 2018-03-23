import React from 'react';
import echarts from 'echarts/lib/echarts';
import './echarts.css'

export class Echarts extends React.Component {

  componentDidMount() {
    this.initEcharts(this.chartDom);
    window.addEventListener('resize', () => this.resize());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.resize());
  }

  componentDidUpdate() {
    this.resize();
  }

  resize = () => {
    if (this.echartsInstance !== null) {
      this.echartsInstance.resize();
    }
  }

  initEchartsDom = (chartDom) => {
    if (chartDom === null) {
      this.echartsInstance.dispose();
      this.echartsInstance = null;
      return;
    }
    this.chartDom = chartDom;
  }

  initEcharts = (chartDom) => {
    this.echartsInstance = echarts.init(chartDom);
    this.props.initChart(this.echartsInstance);
  }

  render() {
    let chartHeight = this.props.height ? this.props.height : '200px';
    return (
      <div className="charts" style={{ height: chartHeight}}
        ref={this.initEchartsDom} />
    );
  }
}