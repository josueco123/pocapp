
export const loginUser = ( state, { user,isLogged, token }) => {

    if ( token ) {
        sessionStorage.setItem( 'token', token )
        state.token = token
    }

    state.isLogged = isLogged
    state.user   = user
}

export const logout = (state) => {
    
    state.user = null
    state.token = null
    state.isLogged = false

    sessionStorage.removeItem('token')
}