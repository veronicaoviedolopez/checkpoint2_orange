import {FetchDependents_Loadding, FetchDependents_Success, FetchDependents_Error } from '../actions/dependentsAction'


const initialState = {
    dependentsList : [],
    loading: false,
    errorMessage:"",
}

const DependentsReducer = (state = initialState, action )=>{
    switch (action.type){
        case FetchDependents_Loadding: 
            return {
                ...state,
                loading: true
            }
        case FetchDependents_Success: 
        return {
            ...state,
            loading:false,
            dependentsList: action.dependents
            
        }
        case FetchDependents_Error: 
        return{
            ...state,
            loading:false,
            errorMessage:action.error
        }
        default:
            return state
    }
}

export default DependentsReducer ;