import {SET_USER_DATA} from './action';


const intialState = {
    items:[]
}
   
function userReducer ( state = intialState , action){
    switch(action.type){
        case SET_USER_DATA :
            return {...state ,items :[...state.items,action.payload] }
        default :
             return {...state};
    }
}
export default userReducer;