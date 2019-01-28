export const loginUser = (params) => {
    return dispatch => {
        dispatch({type:'FETCH_START'})
        fetch('https://pure-depths-19690.herokuapp.com/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type'  : 'application/json',
                'Accept'        :'json'
            },
            body: JSON.stringify(params)
        }).then(res=>res.json()).then(response=>{
            // SET TOKEN AND USER INFO TO BROWSER STORE FOR CREATE SESSION IN FRON END
            localStorage.setItem('user',JSON.stringify(response));
            //  DISPATCH ACTION AFTER API RESPONSE TO SET DATA IN TO STORE
            dispatch({
                type:'LOGIN_RESPONSE_SUCCESS',
                payload:response
            })
        }).catch(error=>{
            dispatch({
                type:'LOGIN_ERROR',
                payload:error
            })
            console.warn(error)
        })
    }
}
