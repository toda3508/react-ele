
//reducer
const initState = {
    totalNum: 0, //点餐总数量
    allMuch: 0, //总价钱
    beginState:'￥20元起送',   //起步价状态

}
export function reducer(state=initState, action){
   switch (action.type){
            //增加总数量
       case 'add':
            return {
                totalNum:state.totalNum+1,
                allMuch:state.allMuch+=action.data,
                
            }
                
            //减少总数量
       case 'subtrac':
            if(state.totalNum<= 0) {
                return {totalNum:0}
            }else{
                return {
                    totalNum:state.totalNum-1,allMuch:state.allMuch-=action.data
                }
            }
 
       default:
            return state
   }
}




