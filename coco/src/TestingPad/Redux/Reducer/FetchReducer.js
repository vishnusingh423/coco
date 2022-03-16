const FetchReducer =(state=[] , action)=>{
    if(action.type === 'FETCH_DATA'){
        return action.payload;
    }
    return state;
}
export default FetchReducer;