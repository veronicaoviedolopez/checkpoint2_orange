import axios from 'axios';

export const _LoaddingU =    "_LOADDINGU";
export const _SuccessU =     "_SUCCESSU";
export const _ErrorU =       "_ERRORU";

export const ShowAddEditUser_Dialog = "SHOW_ADD_EDIT_USER_DIALOG";
export const ShowDeleteUser_Dialog = "SHOW_DELETE_USER_DIALOG";

export const AddedEditedUser = "ADDED_EDITED_USER";
export const DeletedUser = "DELETED_USER"
export const Set_User = "SET_USER";

// SHOW ALL DEPENDENTS BY USERID
const FetchUsers = () => {
    return async (dispatch) => {
        dispatch(rLoadding());
        try{
            const response = await axios.get("https://g4-ch2.herokuapp.com/api/usuarios/orange/");
            dispatch(rSuccess(response.data));
        }
        catch(error){
            dispatch(rError(error));
        }
    }
}

const rLoadding =() =>({
    type: _LoaddingU,
})

const rSuccess = (users) => ({
    type: _SuccessU,
    users
})

const rError = (error) =>({
    type: _ErrorU,
    error,
})



// ADD A DEPENDENT
const ShowAddEditModal = () =>({
    type: ShowAddEditUser_Dialog
})

const AddUser = (x) =>{
    return async (dispatch) => {
        dispatch(rLoadding());
        try{
            await axios.post(
                'https://g4-ch2.herokuapp.com/api/usuarios/orange/',
                x
            );
            dispatch(FetchUsers());
            dispatch(AddEditUserSuccess());
        }
        catch(error){
            dispatch(rError(error));
        }
    }
}

const AddEditUserSuccess = () => ({
    type: AddedEditedUser
})


//DELETE A DEPENDENT
const ShowDeleteModal = () =>({
    type: ShowDeleteUser_Dialog,
})

const DeleteUser =(user)=>{
    return async(dispatch) =>{
        dispatch(rLoadding());
        try{
            await axios.delete(`https://g4-ch2.herokuapp.com/api/usuarios/orange/${user._id}`);
            dispatch(FetchUsers());
            dispatch(DeletedUserSuccess());
        }
        catch(error){
            dispatch(rError(error));
        }

    }
}
const DeletedUserSuccess =() =>({
    type:DeletedUser
})


//UPDATE DEPENDENT
const SetUser = (user)=>({
    type: Set_User,
    user
})

const UpdateUser = (user) =>{
    return async (dispatch) => {
        dispatch(rLoadding());
        try{
            await axios.post(
                `https://g4-ch2.herokuapp.com/api/usuarios/orange/${user._id}`,
                user  
            );
            dispatch(FetchUsers());
            dispatch(AddEditUserSuccess());
        }
        catch(error){
            dispatch(rError(error));
        }
    }
}



export {
    FetchUsers as fetchUsers, 
    AddUser as addUser, 
    ShowAddEditModal as showAddEditModal,
    DeleteUser as deleteUser,
    ShowDeleteModal as showDeleteModal,
    SetUser as setUser,
    UpdateUser as updateUser
    };