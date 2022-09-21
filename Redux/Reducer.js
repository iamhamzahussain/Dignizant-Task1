export const reducer=(state={product:[]},action)=>{
    if(action.type==="PRODUCTS"){
        console.log("reducer is called",action)
        return{
        ...state,
        product:action.data,
        }}
        return state
}