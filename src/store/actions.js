
export const signInUser = async ({ commit }, user) => {

    try {

        const bank = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let token = "";
        for (let i = 0; i < 10; i++) {
            token += bank.charAt(Math.floor(Math.random() * bank.length));
        }

        const isLogged = true;

        commit('loginUser', { user, isLogged, token })

        return { ok: true }

    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }

}

export const checkAuthentication = async ({ commit }) => {

    const token = sessionStorage.getItem('token')

    if (!token) {
        //commit('logout')
        return { ok: false, message: 'no token' }
    } else {
        return { ok: true, message: 'you are logged' }
    }


}