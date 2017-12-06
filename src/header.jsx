import React, { Component } from 'react'; //按需引入component
import axios from 'axios'
import './css/header.scss'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
      // headerData: state.headerData,
  };
};

const mapDispatchToProps = {
  
};

class Header extends Component {
  constructor (props) {   
    super(props); 
    this.state ={headerData:{}}
}

  componentWillMount(){
    axios.get('/api/getSeller')
    .then(res=>{ 
      this.setState({headerData:res.data.data})
    })
    .catch(error =>{
      console.log(error);
    });
  }
  render() {
    return (
      <div className="Header">
        <div className="bg"></div>
        <div className="cont">
          <img src={require('./img/seller_avatar_256px.jpg')} alt=""/>
          <div className="middle-list">
            <h3><i></i>{this.state.headerData.name}</h3>
            <p>{this.state.headerData.description}38分钟到达</p>
            <p><i></i>{this.state.headerData.description}38分钟到达
              <span>5个</span>
            </p>
            
          </div>
         
        </div>
        <p className="news"><i></i>{this.state.headerData.bulletin}</p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

