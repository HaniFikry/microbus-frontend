import { AutoComplete } from 'antd';
import React, {Component} from 'react';
import {searchApi} from '../../apiConfig';
import 'antd/dist/antd.css';
import Axios from 'axios';
import './style.css';

const Option = AutoComplete.Option;


export default class Complete extends Component {
  constructor(){
    super()
    this.state = {
      dataSource: [],
      input : '',
      id: ''
    }
  }

  handleSearch = (value) => {
    this.setState({input: value});
    Axios.get(searchApi(value)).then((response) => {
        this.setState({dataSource: response.data})
    }).catch(function (error) {
        console.log(error);
    });
  }

  onSelect = (value, option) => {
    this.setState({id: value});
    this.setState({input: option.props.children});
  }

  render() {
    const { dataSource, input  } = this.state;
    const {addWishListItem, createItem, addProduct, createProduct} = this.props;
    if (dataSource.length === 0 && input !== ''){
      return (
        <div className="search_box">
          <AutoComplete
            dataSource={ this.state.dataSource.map(opt => (
                  <Option key={opt.id}>
                    {opt.name}
                  </Option>
                ))
            }
            style={{ width: 200 }}
            onSelect={this.onSelect}
            allowClear= {true}
            value={this.state.input}
            onSearch={this.handleSearch}
            placeholder="input here"
          />
          {
            this.props.vendor ?
            // <button onClick={() => {createItem(this.state.input); this.setState({input : ''})}}> {this.props.button_name}</button> :
            <button onClick={() => { createProduct(this.state.input); this.setState({input : ''})}}> {this.props.button_name}</button>
          :
            <button onClick={() => { createItem(this.state.input); this.setState({input : ''})}}> {this.props.button_name}</button>
          }
        </div>
      );
    } else {
      return (
        <div>
          <AutoComplete
            dataSource={ this.state.dataSource.map(opt => (
              <Option key={opt.id}>
                {opt.name}
              </Option>
            ))}
            style={{ width: 200 }}
            onSelect={this.onSelect}
            value={this.state.input}
            onSearch={this.handleSearch}
            placeholder="input here"
          />
        {
          this.props.vendor ?
          <button onClick={() =>  { addProduct(this.state.id); this.setState({input : ''})}}> {this.props.button_name}</button> :
          <button onClick={() => {addWishListItem(this.state.id); this.setState({input : ''})}}>{this.props.button_name}</button>
        }
      </div>
      );
    }
  }
}
