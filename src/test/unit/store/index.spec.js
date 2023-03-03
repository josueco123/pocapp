import { createStore } from 'vuex'
import { mainState } from '../mock-data/main-state'
import mainStore from '../../../store'
import { describe, expect, test } from 'vitest'

const createVuexStore = ( initialState ) => 
    createStore({
            state: { user:null, isLogged: false, token: null, favorites: [] }
    })

describe('Vuex - store', () => {
    
    test('intial state data', () => {
            
        const store = createVuexStore(  )
        const { isLogged, user, token, favorites } = store.state
        
        expect( isLogged ).toBeFalsy()
        expect( user ).toBe(null)
        expect( token ).toBe(null)
        expect( favorites.length ).toBe(0)

    })

        test('mutation: loginUser', () => {
        
            const store = mainStore
            const user = {
                email:'test@mail.com',
                password: 'die9934s'
            };
            const isLogged = true
            const token = 'KrHd7884Tf'
            
            store.commit('loginUser', { user, isLogged, token } )
            expect( store.state.user ).toEqual( mainState.user )
            expect( store.state.token ).toEqual( mainState.token )

            expect( store.state.isLogged ).toBeTruthy()
        })

        test('mutation: logout', () => {
        
            const store = mainStore
            
            store.commit('logout' )
            expect( store.state.isLogged ).toBeFalsy()
            expect( store.state.user ).toBe(null)
            expect( store.state.token ).toBe(null)
        })

        test('mutation: addMovie', () => {
        
            const store = mainStore
            const movie = {
                name:'test'
            }
            store.commit('addMovie', { movie } )
            store.commit('addMovie', { movie } )
            expect( store.state.favorites.length ).toBe(2)
        })

        test('actions: checkAuthentication', async() => {

            const store = mainStore
            const response = await store.dispatch('checkAuthentication' )
            expect( response.ok ).toBeFalsy()
            expect( typeof response.message ).toBe('string')
        })
    })