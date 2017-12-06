import React, { Component } from 'react'; //按需引入component

import './css/ratings.scss'
class Ragings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:0,   
    }
  }
  test(){
    this.setState({name:100})
   
  }
  render() {
    console.log(this.props)
    return (
      <div className="Goods" onClick={(e) => this.test()}>
        我是Ragings组件
      </div>
    );
  }
}

export default Ragings;