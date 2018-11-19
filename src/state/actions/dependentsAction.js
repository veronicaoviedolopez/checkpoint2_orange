import axios from 'axios';

export const _Loadding =    "_LOADDING";
export const _Success =     "_SUCCESS";
export const _Error =       "_ERROR";

export const ShowAddEditDependents_Dialog = "SHOW_ADD_EDIT_DEPENDENT_DIALOG";
export const AddedEditedDependent = "ADDED_EDITED_DEPENDENT";

export const ShowDeleteDependent_Dialog = "SHOW_DELETE_DEPENDENT_DIALOG";
export const DeletedDependent = "DELETED_DEPENDENT"

export const Set_Dependent = "SET_DEPENDENT";

// SHOW ALL DEPENDENTS BY USERID
const FetchDependents = (props) => {
    return async (dispatch) => {
        dispatch(rLoadding());
        try{
            const response = await axios.get(`https://g4-ch2.herokuapp.com/api/dependientes_usuario/orange/${props}`);
            dispatch(rSuccess(response.data, props));
        }
        catch(error){
            dispatch(rError(error));
        }
    }
}

const rLoadding =() =>({
    type: _Loadding,
})

const rSuccess = (dependents, userId) => ({
    type: _Success,
    dependents,
    userId,
})

const rError = (error) =>({
    type: _Error,
    error,
})



// ADD A DEPENDENT
const ShowAddEditModal = () =>({
    type: ShowAddEditDependents_Dialog
})

const AddDependent = (x) =>{
    return async (dispatch) => {
        dispatch(rLoadding());
        try{
            await axios.post(
                'https://g4-ch2.herokuapp.com/api/dependientes/orange/',
                x
            );
            dispatch(FetchDependents(x._usuario));
            dispatch(AddEditDependentSuccess());
        }
        catch(error){
            dispatch(rError(error));
        }
    }
}

const AddEditDependentSuccess = () => ({
    type: AddedEditedDependent
})


//DELETE A DEPENDENT
const ShowDeleteModal = (dependentId, dependentName) =>({
    type: ShowDeleteDependent_Dialog,
    dependentId, 
    dependentName,
})
const DeleteDependent =(_id, _usuario)=>{
    return async(dispatch) =>{
        dispatch(rLoadding());
        try{
            await axios.delete(`https://g4-ch2.herokuapp.com/api/dependientes/orange/${_id}`);
            dispatch(FetchDependents(_usuario));
            dispatch(DeletedDependentSuccess());
        }
        catch(error){
            dispatch(rError(error));
        }

    }
}
const DeletedDependentSuccess =() =>({
    type:DeletedDependent
})


//UPDATE DEPENDENT
const SetDependent = (dependent)=>({
    type: Set_Dependent,
    dependent
})

const UpdateDependent = (dependent) =>{
    console.log("Action UpdateDependent()", dependent);
    return async (dispatch) => {
        dispatch(rLoadding());
        try{
            await axios.post(
                `https://g4-ch2.herokuapp.com/api/dependientes/orange/${dependent._id}`,
                dependent  
            );
            dispatch(FetchDependents(dependent._usuario));
            dispatch(AddEditDependentSuccess());
        }
        catch(error){
            dispatch(rError(error));
        }
    }
}



export {
    FetchDependents as fetchDependents, 
    AddDependent as addDependent, 
    ShowAddEditModal as showAddEditModal,
    DeleteDependent as deleteDependent,
    ShowDeleteModal as showDeleteModal,
    SetDependent as setDependent,
    UpdateDependent as updateDependent
    };