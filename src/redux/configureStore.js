import  {createStore,combineReducers} from "redux"
import counterReducer from "./counter"
const reducer = combineReducers({ //lien ket vs useselector
    //key:value
    counter:counterReducer,
});
const store = createStore(reducer)
export default store