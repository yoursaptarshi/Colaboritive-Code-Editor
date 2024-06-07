import axios from 'axios'
const backendURL = 'http://127.0.0.1:5000'

export const codeSave = ({Title,Language,Code})=>async(dispatch)=>{
    try {
        dispatch({type:'Code_Save_Request'});
        const{data} = await axios.post(`${backendURL}/api/v1/save-code`,{Title,Language,Code})

        dispatch({
            type:'Code_Save_Success',
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type: 'Code_Save_Failure',
            payload: error.response.data.errorMessage,
          });
    }
}

export const clearErrors = ()=>async(dispatch)=>{
    dispatch({type:'CLEAR_ERRORS'});
  }