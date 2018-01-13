import React, {Component} from 'react'
import VendorOffers from '../../containers/vendorOffersContainer'
import VendorProducts from '../../containers/vendorProfileContainer'
import './style.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


export default class ProfileSider extends Component {
  state = {
    collapsed: false,
    page: 'offers'
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render() {
    return (
<<<<<<< HEAD
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" >
              <div className="profile-tab" onClick={() => {this.setState({page: "products"}); console.log(this.state)}}>
                <Icon type="pie-chart" />
                <span className="profile-tab">Product list</span>
              </div>
            </Menu.Item>
            <Menu.Item key="2" >
              <div className="profile-tab" onClick={() => this.setState({page: "offers"})}>
                <Icon type="desktop" />
                <span>Current offers</span>
              </div>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
          {
            (this.state.page == 'products') ?
            <VendorProducts /> : <VendorOffers />
          }

          </Content>
=======
      <div>
        <h2 className="secondary-header"> My Profile </h2>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            width="300"
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" >
                <div className="profile-tab" onClick={() => {this.setState({page: "offers"}); console.log(this.state)}}>
                  <Icon type="pie-chart" />
                  <span className="profile-tab">Current Offers</span>
                </div>
              </Menu.Item>
              <Menu.Item key="2" >
                <div className="profile-tab" onClick={() => this.setState({page: "products"})}>
                  <Icon type="desktop" />
                  <span>Product list</span>
                </div>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '0 16px' }}>
            <div className="tab-content">
              {
                (this.state.page == 'products') ?
                <VendorProducts /> : <VendorOffers />
              }
            </div>
            </Content>
          </Layout>
>>>>>>> 74653e4d5de1a26610746478ad9d6dff3f52157e
        </Layout>
      </div>
    );
  }
}
