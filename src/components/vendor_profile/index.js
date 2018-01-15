import React, {Component} from 'react'
import VendorOffers from '../../containers/vendorOffersContainer'
import VendorProducts from '../../containers/vendorProfileContainer'
import { Layout, Menu, Icon } from 'antd';
const { Content, Sider } = Layout;


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
      <div>
        <h2 className="secondary-header"> My Profile </h2>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            breakpoint="sm"
            collapsedWidth="80"
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
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
                (this.state.page === 'products') ?
                <VendorProducts /> : <VendorOffers />
              }
            </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
