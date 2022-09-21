import {createStore,combineReducers} from "redux"
import {reducer} from "./Reducer"

export const ConfigStore=()=>{
    const myStore= createStore(
        combineReducers({
            reducer
        })
    )
    return myStore
    
}