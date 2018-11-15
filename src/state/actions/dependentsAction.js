import axios from 'axios';

export const FetchDependents_Loadding = "FECTH_DEPENDENTS_LOADDING";
export const FetchDependents_Success ="FETCH_DEPENDENTS_SUCCESS";
export const FetchDependents_Error = "FETCH_DEPENDENTS_ERROR";
export const AddDependents_Dialog = "ADD_DEPENDENTS_DIALOG";
export const ShowDependents_Dialog = "SHOW_DEPENDENTS_DIALOG";
export const DeleteDependent_Dialog = "DELETE_DEPENDENT_DIALOG";

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

const ShowModal = () =>({
    type: ShowDependents_Dialog
})



const AddDependents = (nombre_completo,dependencia, edad, _usuario) =>{
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
            dispatch(AddDependentsSuccess());
        }
        catch(error){
            dispatch(FetchDependentsError(error));
        }
    }
}

const AddDependentsSuccess = () => ({
    type: AddDependents_Dialog
})


const DeleteDependent =(_id, _usuario )=>{
    return async(dispatch) =>{
        dispatch(FetchDependentsLoadding());
        try{
            await axios.delete(`https://g4-ch2.herokuapp.com/api/dependientes/orange/${_id}`);
            dispatch(FetchDependents(_usuario));
            dispatch(AddDependentsSuccess());
        }
        catch(error){
            dispatch(FetchDependentsError(error));
        }

    }
}


export {
    FetchDependents as fetchDependents, 
    AddDependents as addDependents, 
    ShowModal as showModal,
    DeleteDependent as deleteDepentent,
    };