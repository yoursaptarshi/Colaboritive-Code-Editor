import axios from 'axios'
const backendURL = 'http://localhost:5000'
export const userLogin = ({UserName,Password})=>async(dispatch)=>{
    try {
        dispatch({type:'Login_Request'});

        const { data } = await axios.post(
            `${backendURL}/api/v1/login`,
            { UserName, Password },
            {
              withCredentials: true, 
            }
          );
        
        dispatch({
            type:'Login_Success',
            payload:data
        })

    } catch (error) {
        dispatch({
            type: 'Login_Failure',
            payload: error.response.data.errorMessage,
          });
    }
}

export const userRegister = ({Name,UserName,Password}) => async(dispatch)=>{
    try {
        dispatch({type:'Register_Request'})

        const {data} = await axios.post(`${backendURL}/api/v1/register`,{Name,UserName,Password},
            {
              withCredentials: true, 
            })

        dispatch({
            type:'Register_Success',
            payload:data
        })
    } catch (error) {
        dispatch({
            type:'Register_Failure',
            payload:error.response.data.errorMessage
        })
    }
}

export const userProfile = ()=> async(dispatch)=>{
    try {
        dispatch({type:'User_Fetch_Failure'})

        const {data} = await axios.get(`${backendURL}/api/v1/me`,
            {
              withCredentials: true, 
            })
            dispatch({
                type:'User_Fetch_Success',
                payload:data
            })
    } catch (error) {
        dispatch({
            type:'User_Fetch_Failure',
            payload:error.response.data.errorMessage
        })
    }
}

export const clearErrors = ()=>async(dispatch)=>{
    dispatch({type:'CLEAR_ERRORS'});
  }