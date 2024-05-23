const { render, screen } = require("@testing-library/react");
const { PublicRoute } = require("../../src/router/PublicRoute");
const { AuthContext } = require("../../src/auth");
const { MemoryRouter, Routes, Route } = require("react-router-dom");

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
     });
    test('Debe navegar si está logado', () => { 

        const contextValue = {
            logged: true,
            user : {
                name: 'Héctor',
                id: '12345',
            }
        }
        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={<h1>Página Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText("Página Marvel")).toBeTruthy();
     });

 });