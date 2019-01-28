import { combineReducers } from 'redux';
const initialState = {count:0,loadingStatus:false}

const counter = (state = initialState, action) => {
    
    switch (action.type) {
        case 'BUTTON_CLICKED':
            return{
                ...state,
                count:state.count+1
            }
        
        case 'FETCH_START':
            return{
                ...state,
                loadingStatus:true
            }
        case 'LOGIN_RESPONSE_SUCCESS':
            return{
                ...state,
                user:action.payload,
                loadingStatus:false
            }
        
        case 'LOGIN_ERROR':
            return{
                ...state,
                loadingStatus:true,
                error:action.payload
            }
        default:
            return state
    }
}


export default combineReducers({
    counter
}) 