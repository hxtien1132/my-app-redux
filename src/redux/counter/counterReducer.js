const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const INCREMENTVALUE = 'decrementvalue'
const initialState ={ //initialState => state
    count:0,
}
export const increment = () =>({ 
    type:INCREMENT,
});
export const decrement = () =>({ 
    type:DECREMENT,
});
export const incrementvalue = (value)=>({
    type:  INCREMENTVALUE,
    payload: value
})
function counterReducer(state=initialState,action){ 
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1,
            }
        case DECREMENT :
            return{
                ...state,
                count: state.count - 1
            }
        case INCREMENTVALUE :
            return{
                ...state,
               count : state.count + action.payload
            }
        default:
            return state;
    }
}
export default counterReducer;