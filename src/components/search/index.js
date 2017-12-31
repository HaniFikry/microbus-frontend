import { AutoComplete } from 'antd';
import React, {Component} from 'react'
import 'antd/dist/antd.css';
import Axios from 'axios'
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
    Axios.get(`http://localhost:3000/search?query=${value}`).then((response) => {
        this.setState({dataSource: response.data})
    })
    .catch(function (error) {
        console.log(error);
    });

  }



  onSelect = (id) => {
    this.setState({id: id});
  }



  render() {
    const { dataSource, input  } = this.state;
    const {addWishListItem, createItem} = this.props;
    if (dataSource.length === 0 && input !== ''){
    return (
      <div>
      <AutoComplete
        dataSource={ this.state.dataSource.map(opt => (
              <Option key={opt.id}>
                {opt.name}
              </Option>
            ))
            .concat([
  <Option disabled key="all">
    <a
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      Add new item now
    </a>
  </Option>,
]
)
}
        style={{ width: 200 }}
        onSelect={this.onSelect}
        allowClear= {true}
        onSearch={this.handleSearch}
        placeholder="input here"
      />
      <button onClick={() => createItem(this.state.input)}> ADD ITEM TO WISHLIST</button>
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
        onSearch={this.handleSearch}
        placeholder="input here"
      />
      <button onClick={() => addWishListItem(this.state.id)}>ADD ITEM TO WISHLIST</button>
    </div>
    );
}
  }
}
