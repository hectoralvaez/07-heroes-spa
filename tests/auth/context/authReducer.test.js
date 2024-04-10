import { authReducer, types } from "../../../src/auth";

describe('Pruebas en authReducer', () => { 
    test('Debe retornar el estado por defecto.', () => { 
        const state = authReducer({logged: false}, {});

        expect(state).toEqual({logged: false});

     });
     
    test('[LOGIN] Debe llamar el login, autenticar y establecer el "user".', () => { 
        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '123'
            }
        }

        const state = authReducer({logged: false}, action);

        expect(state).toEqual({
            logged: true,
            user: action.payload
        })
        
     });
    test('[LOGOUT] Debe borrar el nombre del usuario y pasaar el "logged" a false.', () => { 
        const state = {
            logged: true,
            user: {name: 'Juan', id: '123'}
        }
        
        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action);
        
        expect(newState).toEqual({ logged: false });

     });

 });