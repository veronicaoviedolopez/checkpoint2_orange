import {
    _Loadding, _Success, _Error, 
    ShowAddEditDependents_Dialog, AddedEditedDependent, 
    ShowDeleteDependent_Dialog, DeletedDependent,
    Set_Dependent
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
        edad:0,
        _usuario: "",
    },
}

const DependentsReducer = (state = initialState, action )=>{
    switch (action.type){
        case _Loadding: 
            return {
                ...state,
                loading: true
            }
        case _Success: 
        return {
            ...state,
            loading:false,
            dependentsList: action.dependents,
            userId: action.userId
        }
        case _Error: 
        return{
            ...state,
            loading:false,
            errorMessage:action.error
        }
        case ShowAddEditDependents_Dialog:
            return{
                ...state,
                showingModal: !state.showingModal,
            }
        case AddedEditedDependent:
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
        default:
            return state
    }
}

export default DependentsReducer ;