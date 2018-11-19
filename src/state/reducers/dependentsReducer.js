import {
    FetchDependents_Loadding, FetchDependents_Success, FetchDependents_Error, 
    ShowAddDependents_Dialog, AddedDependent, 
    ShowDeleteDependent_Dialog, DeletedDependent,
    Set_Dependent, UpdatedDependent
} from '../actions/dependentsAction'

const initialState = {
    dependentsList : [],
    loading: false,
    errorMessage:"",
    userId: "",
    showingModal: false,
    showingDeleteModal: false,
    dependentName :"",
    dependent:{
        _id:0,
        nombre_completo: "",
        dependencia: "",
        edad:10,
        _usuario: "",
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
        case ShowAddDependents_Dialog:
            return{
                ...state,
                showingModal: !state.showingModal,
            }
        case AddedDependent:
        return{
            ...state,
            loading: false,
            showingModal: false,
        }
        case ShowDeleteDependent_Dialog:
        return{
            ...state,
            showingDeleteModal: !state.showingDeleteModal,
            dependentId: action.dependentId, 
            dependentName: action.dependentName,
        }
        case DeletedDependent:
        return{
            ...state,
            loading: false,
            showingDeleteModal: false,
        }
        case Set_Dependent:
        return{
            ...state,
            dependent : action.dependent,
        }
        case UpdatedDependent:
        return{
            ...state,
            loading:false,
            showingModal: false,
        }
        default:
            return state
    }
}

export default DependentsReducer ;