import { createStore } from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

export default createStore({
    state: {
        isLogged: false,
        user: null,
        token: null,
        favorites: []
    },
    actions,
    getters,
    mutations
    
  })