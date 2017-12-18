import React, { Component } from 'react'; //按需引入component

import './css/ratings.scss'
class Ragings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:0,   
    }
  }
  componentDidMount(){
    console.log(this.props.location.state)
  }
  test(){
    this.setState({name:100})
   
  }
  render() {
   
    
    return (
      <div className="Goods" onClick={(e) => this.test()}>
        我是Ragings组件
      </div>
    );
  }
}

export default Ragings;