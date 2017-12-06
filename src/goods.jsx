import React, {Component} from 'react'; 
import axios from 'axios';
import Goodlist from './goodList.jsx';
import BScroll from 'better-scroll';
import Footer from './footer.jsx'; 
import './css/goods.scss';
class Goods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navData: [],    //商品数据
      flag:0,   //类名标记
      listHieght:[],   //记录div商品的高度scroll点
      isclick:false,  //点击标记
      len:0    //商品总条数
    }
  }
   // 左侧点击事件
   lefTouch(index){
     let _this = this;
    this.setState({flag:index});
    this.state.isclick = true;
    // 点击左侧菜单右侧滚动到对应的标题
    this.foodsScroll.scrollToElement(this.refs.foodsWrapper.getElementsByClassName('food-list-hook')[index], 300);
   
  }
  componentWillMount() {
    // 获取商品数据
    axios
      .get('/api/getGoods')
      .then(res => {
        this.setState({navData: res.data.data})

        for(var i =0; i<this.state.navData.length; i++){
          this.setState({
            len:this.state.len+=this.state.navData[i].foods.length
          })
          
          
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount(){
    let _this =this;
   


   setTimeout(()=>{
    //  添加每一个div的高度到数组中
    let foodList = this.refs.foodsWrapper.getElementsByClassName('food-list-hook')
    let height = 0;
    
    _this.state.listHieght.push(height)
    for (let i = 0; i < foodList.length; i++) {
      let item = foodList[i]
      height += item.clientHeight
      _this.state.listHieght.push(height)
    }
    
    // 调用滚动
    _this.menuScroll = new BScroll(this.refs.menu, {
      click:true,
    }) 

    _this.foodsScroll = new BScroll(this.refs.foodsWrapper, {
      click: true,
      probeType: 3
    })

    // 滚动右边联动左边
    _this.foodsScroll.on('scroll', (pos) => {
      // 判断是否是点击事件进入
      if(this.state.isclick){
        return;
      }
      let scrollY = Math.abs(pos.y);
      for(var i = 0; i< this.state.listHieght.length; i++){
        if(scrollY <=this.state.listHieght[i+1] && scrollY>this.state.listHieght[i]){
          this.setState({flag:i})
        }
      }
  
    
     });
   
   },300)
  
  }
  // 改变isclick标记
  cancelCli(){
    this.state.isclick = false;
  }
 
  render() {
    return (
      <div>
      <div className="Goods clearfix" >
        <div className="leftNav" ref="menu">
          <ul>
            {
              this.state.navData.map((v, i)=>{
                return (
                  <li className={this.state.flag == i ? 'current' : ''} onClick={(e) => this.lefTouch(i,event)} key={i}>{v.name}</li>
                )
              })
            }
          </ul>
        </div>
        <div className="rightList" ref="foodsWrapper" onTouchStart={(e) => this.cancelCli()}>
          <div>
            {
              this.state.navData.map((v,i)=>{
                return(
                  <div key={i} className="food-list-hook">{v.name}
                    <Goodlist datas={v.foods} len={this.state.len} index={i}/>
                </div>
                )
              })
            }
          </div>
        </div>
       
      </div>
      <Footer/>
      </div>
    );
  }
  
}

export default Goods;