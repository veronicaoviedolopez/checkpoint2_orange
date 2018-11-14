import {FetchDependents_Loadding, FetchDependents_Success, FetchDependents_Error, ShowDependents_Dialog, AddDependents_Dialog } from '../actions/dependentsAction'

const initialState = {
    dependentsList : [],
    loading: false,
    errorMessage:"",
    userId: "",
    showingModal: false,
    newDependent:{
        nombre_completo: "",
        dependencia: "",
        edad:0,
        _usuario: "5bda5ef5307f170015f93e56",
    },
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
            dependentsList: action.dependents,
            userId: action.userId
        }
        case FetchDependents_Error: 
        return{
            ...state,
            loading:false,
            errorMessage:action.error
        }
        case ShowDependents_Dialog:
            return{
                ...state,
                showingModal: !state.showingModal,
            }
        case AddDependents_Dialog:
        return{
            ...state,
            loading: false,
            showingModal: false,
        }
        default:
            return state
    }
}

export default DependentsReducer ;