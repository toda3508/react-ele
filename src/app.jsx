import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';  
import Goods from './goods.jsx'; 
import Ratings from './ratings.jsx'; 
import Shops from './shops.jsx'; 
import './css/routerLinks.scss'
import './css/iconfont.css'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
  
class App extends React.Component {
  
    componentDidMount(){


        document.body.addEventListener('touchmove',(e)=>{
          // e = event || window.event  
          // e.preventDefault();
        
        })
      
    }
    render() {
      
      return (
        <div>
         <Header/>
         <Router>
         <div>
           <ul className="routerLinks">
             <li><Link to="/">商品</Link></li>
             <li><Link to="/ratings">评论</Link></li>
             <li><Link to="/shops">商家</Link></li>
           </ul>
           <Route exact path="/"  component={Goods}/>
           <Route path="/ratings/" component={Ratings}/>
           <Route path="/shops" component={Shops}/>
         </div>
       </Router>
      
        </div>
      );
    }
  }

  export default App;


