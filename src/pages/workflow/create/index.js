import React from 'react';
import { queryWorkflowDefinitionList, queryWorkflowDefinition, createWorkflow } from '../../../services/workflowService'
import { DefinitionList } from './DefinitionList'
import { WorkflowCreateForm } from './WorkflowCreateForm'
import { message, Spin, Row, Col } from 'antd';
import './index.css'

export default class WorkflowCreate extends React.Component {
  state = {
    loading: true,
    formProperty: null,
    workflowDefinitionList: []
  }

  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  componentDidMount() {
    queryWorkflowDefinitionList()
      .then(this.handleListResponse)
      .catch(this.handleError);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState({ loading: true });
    createWorkflow(this.props.form.getFieldsValue())
      .catch(this.handleError);
  }

  handleError = (e) => {
    this.setState({ loading: false });
    message.error(e.message);
  }

  handleListResponse = (response) => {
    this.setState({
      loading: false,
      workflowDefinitionList: response.workflowDefinitionList,
      formProperty: response.firstWorkflowFormProperty,
    });
  }

  render() {

    return (
      <div className='basic-body'>
        <div style={{ position: 'relative' }}>
          {
            !this.state.loading ? (
              <React.Fragment>
                <Row style={{ margin: '5%' }}>
                  <Col sm={{ span: 8, offset: 8 }} xs={{ span: 12, offset: 6 }} >
                    <DefinitionList workflowDefinitionList={this.state.workflowDefinitionList} handleChange={this.handleChange} />
                  </Col>
                </Row>
                <Row style={{ margin: '5%' }}>
                  <Col sm={{ span: 14 }} xs={{ span: 14, offset: 4 }}>
                    <WorkflowCreateForm formProperty={this.state.formProperty} />
                  </Col>
                </Row>
              </React.Fragment>
            ) : <Spin size="large" />
          }
        </div>
      </div>
    );
  }
}