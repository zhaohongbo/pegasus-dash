import React from 'react';
import { Echarts } from './echarts.js';
import { initShanghaiMap } from './map.js';
import { initLine } from './line.js';
import { initBar } from './bar.js';
import { initPie } from './pie.js';
import { initRadar } from './radar.js';
import { Row, Col } from 'antd';
import './index.css'

export default class Maps extends React.Component {

  render() {
    const height = '300px';
    return (
      <React.Fragment>
        <Row gutter={16}>
          <Col span={12}>
            <Echarts initChart={initLine} height={height} />
          </Col>
          <Col span={12}>
            <Echarts initChart={initBar} height={height} />
          </Col>
        </Row>
        <Row gutter={16} style={{ margin: '50px 0 0 0' }}>
          <Col span={12}>
            <Echarts initChart={initPie} height={height} />
          </Col>
          <Col span={12}>
            <Echarts initChart={initRadar} height={height} />
          </Col>
        </Row>
        <Row style={{ margin: '50px 0 0 0' }}>
          <Col span={24}>
            <Echarts initChart={initShanghaiMap} height='500px' />
          </Col>
        </Row>
      </React.Fragment >
    );
  }
}