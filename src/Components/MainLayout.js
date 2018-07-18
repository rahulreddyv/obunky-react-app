import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import SimpleContent from './Content/Content';
import './MainLayout.css';

const { Header, Sider, Content } = Layout;

export default class MainLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.toggle}
        >
          <div className='logo'
            style={{
              height: '32px',
              background: 'rgba(255,255,255,.2)',
              margin: '16px',
            }}
          />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>Nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>Nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#000', padding: 0 }}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{
                lineHeight: '64px'
              }}
            >
              <Menu.Item key="1">Nav 1</Menu.Item>
              <Menu.Item key="2">Nav 2</Menu.Item>
              <Menu.Item key="3">Nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
            <SimpleContent />
          </Content>
        </Layout>
      </Layout>
    );
  }
}