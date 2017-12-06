import React, { Component } from 'react'; //按需引入component
import { connect } from 'react-redux';
import './css/footer.scss'
const mapStateToProps = (state) => {
  return {
      totalNum: state.totalNum,
      allMuch: state.allMuch,
      bgState: state.beginState,
  };
};

class Footer extends Component {
  
  
  render() {
    
    return (
      <div className="Footer" >
        <div className="left-f">
            <i className="iconfont icon-shopping_cart">
              <span>{this.props.totalNum}</span>
            </i>
            <span>￥{this.props.allMuch}</span>
        </div>
        <div className="middle-f">
          <p>另需4元配送费</p>
        </div>
        <div className="right-f">
          {this.props.bgState}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Footer);