import React, {Component} from 'react'
import ConsumerOffers from '../../containers/consumerOffersContainer'
import ConsumerWishlist from '../../containers/consumerWishlistContainer'
import MakmakStore from '../../components/store'
import { Layout, Menu, Icon } from 'antd';
import './style.css'
const { Content, Sider } = Layout;




export default class ProfileSider extends Component {
  state = {
    collapsed: false,
    page: 'wishlist'
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render() {
    return (
      <div>
      <h2 className="secondary-header"> My Profile </h2>
      <Layout style={{ minHeight: '88vh' }}>
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
              <div className="profile-tab" onClick={() => {this.setState({page: "wishlist"}); console.log(this.state)}}>
                <Icon type="pie-chart" />
                <span className="profile-tab">Wishlist</span>
              </div>
            </Menu.Item>
            <Menu.Item key="2" >
              <div className="profile-tab" onClick={() => this.setState({page: "offers"})}>
                <Icon type="desktop" />
                <span>My bought offers</span>
              </div>
            </Menu.Item>
            <Menu.Item key="3" >
              <div className="profile-tab" onClick={() => this.setState({page: "makmaks"})}>
                <Icon type="desktop" />
                <span>Charge Makmaks</span>
              </div>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>

            <div className="tab-content">
              {
              (this.state.page === 'wishlist') ?
              <ConsumerWishlist /> : (this.state.page === 'offers') ? <ConsumerOffers /> : <MakmakStore />
              }
            </div>



          </Content>
        </Layout>
      </Layout>
    </div>
    );
  }
}
