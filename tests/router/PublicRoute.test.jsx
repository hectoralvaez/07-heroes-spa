const { render, screen } = require("@testing-library/react");
const { PublicRoute } = require("../../src/router/PublicRoute");
const { AuthContext } = require("../../src/auth");

describe('Pruebas en <PublicRoute />', () => { 
    test('Debe mostar el children si no está logado', () => { 

        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={ contextValue}>
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Ruta Pública")).toBeTruthy();
     })
 });