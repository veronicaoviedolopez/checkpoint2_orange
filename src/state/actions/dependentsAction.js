import axios from 'axios';

export const FetchDependents_Loadding = "FECTH_DEPENDENTS_LOADDING";
export const FetchDependents_Success ="FETCH_DEPENDENTS_SUCCESS";
export const FetchDependents_Error = "FETCH_DEPENDENTS_ERROR";

export const ShowAddDependents_Dialog = "SHOW_ADD_DEPENDENT_DIALOG";
export const AddedDependent = "ADDED_DEPENDENT";


export const ShowDeleteDependent_Dialog = "SHOW_DELETE_DEPENDENT_DIALOG";
export const DeletedDependent = "DELETED_DEPENDENT"


export const Set_Dependent = "SET_DEPENDENT";

export const UpdatedDependent = "UPDATED_DEPENDENT";


// SHOW ALL DEPENDENTS BY USERID
const FetchDependents = (props) => {
    return async (dispatch) => {
        dispatch(FetchDependentsLoadding());
        try{
            const response = await axios.get(`https://g4-ch2.herokuapp.com/api/dependientes_usuario/orange/${props}`);
            dispatch(FetchDependentsSuccess(response.data, props));
        }
        catch(error){
            dispatch(FetchDependentsError(error));
        }
    }
}

const FetchDependentsLoadding =() =>({
    type: FetchDependents_Loadding,
})

const FetchDependentsSuccess = (dependents, userId) => ({
    type: FetchDependents_Success,
    dependents,
    userId,
})

const FetchDependentsError = (error) =>({
    type: FetchDependents_Error,
    error,
})



// ADD A DEPENDENT
const ShowAddModal = () =>({
    type: ShowAddDependents_Dialog
})

const AddDependent = (nombre_completo,dependencia, edad, _usuario) =>{
    return async (dispatch) => {
        dispatch(FetchDependentsLoadding());
        try{
            await axios.post('https://g4-ch2.herokuapp.com/api/dependientes/orange/',
                {
                    nombre_completo,
                    dependencia, 
                    edad,
                    _usuario,
                }
            );
            dispatch(FetchDependents(_usuario));
            dispatch(AddDependentSuccess());
        }
        catch(error){
            dispatch(FetchDependentsError(error));
        }
    }
}

const AddDependentSuccess = () => ({
    type: AddedDependent
})


//DELETE A DEPENDENT
const ShowDeleteModal = (dependentId, dependentName) =>({
    type: ShowDeleteDependent_Dialog,
    dependentId, 
    dependentName,
})
const DeleteDependent =(_id, _usuario)=>{
    return async(dispatch) =>{
        dispatch(FetchDependentsLoadding());
        try{
            await axios.delete(`https://g4-ch2.herokuapp.com/api/dependientes/orange/${_id}`);
            dispatch(FetchDependents(_usuario));
            dispatch(DeletedDependentSuccess());
        }
        catch(error){
            dispatch(FetchDependentsError(error));
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

const UpdateDependentSuccess = (dependent)=>({
    type: UpdatedDependent,
    dependent
})

const UpdateDependent = (dependent) =>{
    console.log("Action UpdateDependent()", dependent);
    return async (dispatch) => {
        dispatch(FetchDependentsLoadding());
        try{
            await axios.post(
                `https://g4-ch2.herokuapp.com/api/dependientes/orange/${dependent._id}`,
                dependent  
            );
            dispatch(FetchDependents(dependent._usuario));
            dispatch(UpdateDependentSuccess());
        }
        catch(error){
            dispatch(FetchDependentsError(error));
        }
    }
}



export {
    FetchDependents as fetchDependents, 
    AddDependent as addDependent, 
    ShowAddModal as showAddModal,
    DeleteDependent as deleteDependent,
    ShowDeleteModal as showDeleteModal,
    SetDependent as setDependent,
    UpdateDependent as updateDependent
    };