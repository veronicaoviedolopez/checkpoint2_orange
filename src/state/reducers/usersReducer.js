import {
    _LoaddingU, _SuccessU, _ErrorU, 
    ShowAddEditUser_Dialog, AddedEditedUser, 
    ShowDeleteUser_Dialog, DeletedUser,
    Set_User
} from '../actions/usersAction'

const initialState = {
    usersList : [],
    loading: false,
    errorMessage:"",
    userId: "",
    showingModal: false,
    showingDeleteModal: false,
    user_Nombre :"",
    user:{
        _id:"0",
        nombre: "vero",
        apellidos: {
          paterno:"oviedo",
          materno:"lupez",
        },
        edad:20,
    },
}

export default (state = initialState, action )=>{
    switch (action.type){
        case _LoaddingU: 
            return {
                ...state,
                loading: true
            }
        case _SuccessU: 
        return {
            ...state,
            loading:false,
            usersList: action.users
        }
        case _ErrorU: 
        return{
            ...state,
            loading:false,
            errorMessage:action.error
        }
        case ShowAddEditUser_Dialog:
            return{
                ...state,
                showingModal: !state.showingModal,
            }
        case AddedEditedUser:
        return{
            ...state,
            loading: false,
            showingModal: false,
        }
        case ShowDeleteUser_Dialog:
        return{
            ...state,
            showingDeleteModal: !state.showingDeleteModal,
        }
        case DeletedUser:
        return{
            ...state,
            loading: false,
            showingDeleteModal: false,
        }
        case Set_User:
        return{
            ...state,
            user : action.user,
        }
        default:
            return state
    }
}