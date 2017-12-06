import React, {Component} from 'react'; //按需引入component
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
      totalNum: state.totalNum,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add:(data)=>{
            dispatch({type:"add",data});
        },
        subtrac:(data)=>{
            dispatch({type:"subtrac",data});
        },
        bgState:(data)=>{
            dispatch({type:"bgState"});
        }
        
    }
 };

class Add extends React.Component {
    constructor (props) {   
        super(props); 
        this.state ={
            numbers:0,
        }
    }
    // 点击增加
    addition(price) {
        this.setState({
            numbers:this.state.numbers+1
        },()=>{
            this.props.add(price)
           
          
        })
  
    }
    // 点击减少
    subtraction(price) {
        if(this.state.numbers > 0){
            this.setState({
                numbers:this.state.numbers-1
            },()=>{
                this.props.subtrac(price)
            })
        }
        

    }
    render() {
        return (
            <div>
                <i className="iconfont icon-remove_circle_outline" onClick={(e) => this.subtraction(this.props.price)}></i>
                <span>{this.state.numbers}</span>
                <i className="iconfont icon-add_circle add" onClick={(e) => this.addition(this.props.price)}></i>
            </div>
        );
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Add);
