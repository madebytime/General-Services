export const loggedIn = (userId,token,name,image) =>{
    return  async dispatch =>{
        dispatch({
            type:"LOGGED_IN",
            userId:userId,
            token:token,
            name:name,
            image:image
        })
    }
}