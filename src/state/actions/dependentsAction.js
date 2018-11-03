import axios from 'axios';

export const FetchDependents_Loadding = "FECTH_DEPENDENTS_LOADDING";
export const FetchDependents_Success ="FETCH_DEPENDENTS_SUCCESS";
export const FetchDependents_Error = "FETCH_DEPENDENTS_ERROR";

const FetchDependents = () => {
    return async (dispatch) => {
        dispatch(FetchDependentsLoadding());
        try{
            const response = await axios.get("https://g4-ch2.herokuapp.com/api/dependientes/orange");
            dispatch(FetchDependentsSuccess(response.data));
        }
        catch(error){
            dispatch(FetchDependentsError(error));
        }
    }
}

const FetchDependentsLoadding =() =>({
    type: FetchDependents_Loadding,
})

const FetchDependentsSuccess = (dependents) => ({
    type: FetchDependents_Success,
    dependents,
})

const FetchDependentsError = (error) =>({
    type: FetchDependents_Error,
    error,
})

export {FetchDependents as fetchDependents};