import React from 'react';
import { createWorkflow } from '../../../services/workflowService'
import { Form, DatePicker, Input, Spin, Button, message } from 'antd'
import './WorkflowCreateForm.css'

class WorkflowCreateFormPage extends React.Component {
  state = {
    loading: false
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState({ loading: true });
    createWorkflow(this.props.form.getFieldsValue())
      .catch(this.handleError);
  }

  handleError = (e) => {
    // this.setState({ loading: false });
    message.error(e.message);
  }

  createInput = (property) => {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    switch (property.type.name) {
      case 'date':
        return (
          <Form.Item {...formItemLayout} label={property.name} key={property.id}>
            {
              getFieldDecorator(property.id, {
                rules: [{ required: property.required, message: property.name + '不能为空' }],
                initialValue: property.value,
              })(<DatePicker disabled={!property.writable} className='form-input' />)
            }
          </Form.Item>
        );
      case 'string':
        return (
          <Form.Item {...formItemLayout} label={property.name} key={property.id}>
            {
              getFieldDecorator(property.id, {
                rules: [{ required: property.required, message: property.name + '不能为空' }],
                initialValue: property.value,
              })(<Input disabled={!property.writable} className='form-input' />)
            }
          </Form.Item>
        );
    }
  }

  render() {
    let formProperty = this.props.formProperty;
    return (
      <Form onSubmit={this.handleSubmit}>
        {
          formProperty.formProperties.map((property) =>
            this.createInput(property)
          )
        }
        <Spin spinning={this.state.loading}>
          <Button type="primary" htmlType="submit">提交</Button>
        </Spin>
      </Form>
    );
  }
}


export const WorkflowCreateForm = Form.create()(WorkflowCreateFormPage);