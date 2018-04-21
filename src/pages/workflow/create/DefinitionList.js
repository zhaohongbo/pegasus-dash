import React from 'react';
import { Select, Row, Col } from 'antd';
import './DefinitionList.css'

export class DefinitionList extends React.Component {

  render() {
    let workflowDefinitionList = this.props.workflowDefinitionList;
    let defaultValue = workflowDefinitionList.length > 0 ? workflowDefinitionList[0].id : null;
    console.log("default " + defaultValue);
    return (
      <Row type="flex" align="middle">
        <Col sm={8}>
          <label>请选择：</label>
        </Col>
        <Col sm={16}>
          <Select defaultValue={defaultValue} onChange={this.props.handleChange} className='workflow-select'>
            {
              workflowDefinitionList.length > 0 ? workflowDefinitionList.map(({ id, name }) =>
                <Select.Option
                  key={id.toString()}
                  value={id.toString()}>
                  {name}
                </Select.Option>) : null
            }
          </Select>
        </Col>
      </Row>
    );
  }
}