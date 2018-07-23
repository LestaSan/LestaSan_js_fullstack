import React, { Component } from 'react';
// 对react ui 阿里的antd 部份引用
import { Table, Pagination, Input, Row, Button, Modal, Form, message } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import './App.css'
const { Search } = Input;
const FormItem = Form.Item;
const { confirm } = Modal;

class App extends Component {
  columns = [
    {
      dataIndex: 'username',
      title: '用户',
    },
    {
      dataIndex: 'age',
      title: '年龄'
    },
    {
      dataIndex: 'address',
      title: '地址'
    },
    {
      dataIndex: 'action',
      title: '操作',
      width: 200,
      render: (Text, row) => {
        return (
          <div>
            <Button type="primary" onClick={() => { this.modal('edit', row)}}>编辑</Button>
            <Button type="danger" style={{marginLeft: 10}}
            onClick={() => this.remove(row)}>删除</Button>
          </div>
        )
      }
    }
  ]
  state = {
    visible: false,
    users: [{
      username: 'zk',
      age: 18,
      address: '杭州',
      id: 1
    }]
  }
  remove (row) {
    const that = this;
    confirm({
      title: '是否要删除该用户？',
      okText: '是',
      cancelText: '否',
      onOk () {
        const _users = that.state.users.filter(data => {
          return data.id !== row.id
        });
        that.setState({
          users: _users
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    // console.log(this.props.form); 
    // 注意底部Form.create()(App)的封装  
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    return (
      <div className="App">
        <Row>
          <Search style={{width: 300}}
          onChange={ this.serachUser.bind(this) }/>
          <Button type="primary" style={{marginLeft: 20}} 
          onClick={() => this.modal('add')}>添加用户</Button>
        </Row>
        <Row style={{paddingTop: 20}}>
          <Table dataSource={this.state.users} columns={this.columns} 
          rowKey={row => row.id}
          bordered
          pagination={false}></Table>
        </Row>
        <Modal title="添加用户" 
        visible={this.state.visible}
        onCancel={() => this.setState({ visible: false })}
        onOk={() => this.handleOk()}>
          <Form>
            <FormItem label="用户" {...formItemLayout}>
              {
                getFieldDecorator('username', {
                  rules: [
                    { 
                      required: true, 
                      message: 'Please input your username!'
                    }
                  ]
                })(<Input placeholder="UserName"></Input>)
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
            {
              getFieldDecorator('age', {
                rules: [
                  {
                    required: true,
                    message: 'Please Input your age!'
                  }
                ]
              })(<Input placeholder="age"/>)
            }
            </FormItem>
            <FormItem label="地址" {...formItemLayout}>
            {
              getFieldDecorator('address', {
                rules: [
                  {
                    required: true,
                    message: 'Please Input your address!'
                  }
                ]
              })(<Input placeholder="address"/>)
            }
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
  serachUser (event) {
    axios.get('http://localhost:3006/users')
      .then(data => {
        console.log(data)
      })
  }
  modal (type, row) {
    // console.log(type)
    this.setState({
      visible: true
    }, () => {
      this.props.form.resetFields();
      if (type === 'add') return;
      this.props.form.setFieldsValue({
        username: row.username,
        age: row.age,
        address: row.address
      })
    })
  }
  handleOk () {
    // 变成异步了 先进行表单验证
    // console.log('ok')
    // this.setState({
    //   visible: false
    // })

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
        this.setState({
          visible: false
        })
        let data = {
          username: values.username,
          age: values.age,
          address: values.address
        }
        console.log(data);
        axios.post('http://127.0.0.1:3006/user', data)
          .then(msg => {
            console.log(msg);
            this.setState({
              visible: false,
            });
            message.success('添加成功');
          })
      }
    })
  }
}

export default  Form.create()(App);
