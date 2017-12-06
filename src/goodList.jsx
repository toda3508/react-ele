import React, {Component} from 'react'; //按需引入component
import Add from './add.jsx'; 
// import { connect } from 'react-redux';

// const mapStateToProps = (state) => {
//   return {
//       totalNum: state.totalNum,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         add:(data)=>{
//             dispatch({type:"add",data});
//         },
//         subtrac:(data)=>{
//             dispatch({type:"subtrac",data});
//         }
//     }
//  };

class Goodlist extends Component {
   
   

    render() {
        return (
            <div className="Goodlist" ref="shopswrap">
            <ul >
            {
                this.props.datas.map((v,i)=>{
                    return(
                
                    <li key={i}>
                        <div className="leftpic">
                            <img
                                src={v.image}
                                alt=""/>
                        </div>
                        <div className="middleCon">
                            <p>{v.name}</p>
                            <p>{v.description}</p>
                            <p>月销量<i>{v.sellCount}</i>好评率<i>{v.rating}</i>%</p>
                            <p>￥{v.price}</p>
                        </div>
                        <div className="rightAdd">
                          <Add price={v.price}/>
                        </div>
                    </li>
                
                    )
                })
            }
            </ul>
                
            </div>
        );
    }
}

  
  export default Goodlist;
