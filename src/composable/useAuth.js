import { useStore } from 'vuex'

const useAuth = () => {
    
    const store = useStore()

    const loginUser = async( user ) => {
        const resp = await store.dispatch('signInUser', user )
        return resp
    }

    const checkAuthStatus = async() => {
        const resp = await store.dispatch('checkAuthentication')
        return resp
    }
    
    const logout = () => {
        store.commit('logout')
    }
    
    return {
        checkAuthStatus,
        loginUser,
        logout
    }
}

export default useAuth;