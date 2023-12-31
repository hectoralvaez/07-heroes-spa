### URLS DEL PROYECTO:  

#### Heroes SPA:  
GitHub: https://github.com/hectoralvaez/07-heroes-spa  

#### Custom Hooks:  
GitHub: https://github.com/hectoralvaez/custom-hooks  

#### Festival del gif:  
Netlify: https://festivaldegifs.netlify.app  
GitHub: https://github.com/hectoralvaez/festival-de-gifs  
GitHub Pages: https://hectoralvaez.github.io/festival-de-gifs/  

React, Vite, GitHub, Jest, React Testing Library, Netlify, GitHub Pages, Postman

---

# ARRANCAR UN PROYECTO:  
## YARN + VITE:  
En la Terminal, nos vamos a la carpeta donde vamos a instalar el proyecto (en este caso dentro de `www/react`):  
`yarn create vite`

1. Nos pide el nombre del proyecto:  
`07-heroes-spa`
2. Seleccionamos el framework "React"  
3. Seleccionamos la variante "JavaScript"  

En la Terminal, en la carpeta donde ya se ha instalado el proyecto ejecutamos:  
`yarn`

Para ejecutar la aplicación:
`yarn dev`

## ARRANCAR GIT  

En terminal:  
`git init`

En github.com:

Creamos el nuevo repositorio con el nombre que deseamos.

En Visual Studio Code, hacemos un commit con todo el contenido que tenemos para que se pueda publicar la rama (o desde el terminal, hacemos un `git add .` y un `git commit -m "Primer commmit"`)

Una vez activa la rama, volvemos al terminal del proyecto y ejecutamos estas tres lineas (se puden lanzar de golpe):

```
git remote add origin https://github.com/hectoralvaez/07-heroes-spa.git
git branch -M main
git push -u origin main
```

---

### LINKS DE INTERÉS:  
- [React: Documentación y recursos relacionados](https://es.reactjs.org/docs/getting-started.html)  
- [React: Aprende React](https://es.react.dev/learn): Documentación de React. Introducción al 80% de los conceptos de React de uso diario
- [React: Presentando Hooks](https://es.reactjs.org/docs/hooks-intro.html#motivation): Los _Hooks_ son una nueva incorporación en React 16.8. Te permiten usar estado y otras características de React sin escribir una clase.
- [React: Referencia de la API de los Hooks](https://es.reactjs.org/docs/hooks-reference.html)
- [React: Hooks "Motivación"](https://es.reactjs.org/docs/hooks-intro.html#motivation)

- [GitHub](https://github.com/): Plataforma de alojamiento de código para el control de versiones y la colaboración.
- [Netlify](https://www.netlify.com/): Desplegar desplegar aplicaciones sin BackEnd.
- [Jest](https://jestjs.io/): Para hacer tests en Babel, TypeScript, Node, React, Angular, Vue y más. (combinada con [React Testing Library](https://testing-library.com/docs/))
- [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro/): Librería para hacer tests en React (combinada con [Jest](https://jestjs.io/)).  
En las instalaciones CRA ya viene instalada, con Vite hay que hacer la instalación a parte.  
En terminal: `yarn add --dev @testing-library/react @types/jest jest-environment-jsdom`
- [Vite](https://vitejs.dev/): La alternativa a [Create React App (CRA)](https://create-react-app.dev/), es más ligero
- [Use Vite for React Apps instead of CRA](https://dev.to/nilanth/use-vite-for-react-apps-instead-of-cra-3pkg)
- [React Hook Form](https://react-hook-form.com/): Librería que te ayuda a validar formularios en React. Es una librería mínima sin otras dependencias, a la vez que es eficiente y fácil de usar, lo que requiere que los desarrolladores escriban menos líneas de código que otras librerías de formularios.
- ['React Router'](https://reactrouter.com): Biblioteca de enrutamiento con la que puedes definir diferentes rutas dentro de tu aplicación y asignar componentes específicos a cada ruta. Cuando el usuario navega a una ruta determinada, React Router se encarga de renderizar el componente correspondiente en el lugar adecuado de la interfaz de usuario. Es esencial para construir aplicaciones de una sola página (SPA) con múltiples rutas y vistas en React, ya que facilita el enrutamiento y la navegación entre componentes de manera eficiente y estructurada.

- ['React Router (useNavigate)'](https://reactrouter.com/en/main/hooks/use-navigate): Este hook nos devuelve la función 'navigate', que nos permite hacer redirecciones programáticas. Con esta función, podemos hacer lo mismo que con el componente navigate. Es decir, redirigir una URL al resultado de otra ruta.

  La diferencia entre el hook useNavigate y el componente navigate en React Router es que, con el uso del hook, podemos utilizar una función. Esto implica que podemos utilizarlo en cualquier parte del código. El problema de utilizar componentes en vez de funciones es que debemos renderizarlos. Ya que una función no necesita este proceso de render, podemos insertarla donde queramos.


- PETICIONES HTTP 
    - [Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) Viene en JavaScript
    - [Axios](https://axios-http.com) Fernando lo prefiere a Fetch
---

## TESTS
> NOTA:  
> Siempre falta tiempo para hacer tests, por lo tanto, se recomienda, como mínimo, hacer el test de la ruta crítica, es decir, la parte principal de la app. Si fuera una tienda, la ruta crítica es el proceso de compra (añadir productos al carito, el cesto de la compra, etc...)  


> ⚠️ NOTA IMPORANTE:  
> Si da error a la hora de lanzar los test:
> 1.  Probar a eliminar la carpeta `node_modules` y volver a ejecutar `yarn install`. 
> 2. Cambiar la extensión del archivo `babel.config.js` a `babel.config.cjs`  

> CONSEJO:  
> Parece muy evidente, pero no está de más recordar empezar a testear los componentes más sencillos.  
> Por definirlos de diferentes maneras: con menos dependencias, que reciben menos properties, los más atómicos, etc.  
> De manera que conforme se vanyan testeando los más complicados, los sencillos ya estén testeados.  

### [Más info de tests AAA (Patrón AAA)](https://geeks.ms/jorge/2018/08/25/unit-testing-y-el-patron-aaa/)  
1. Arrange (Organizar/Inicializa) => Inicializa los objetos y establece los valores de los datos que vamos a utilizar en el Test que lo contiene.
2. Act (Actuar) => Realiza la llamada al método a probar con los parámetros preparados para tal fin.
3. Assert (Confirmar/Comprobar) => Comprueba que el método de pruebas ejecutado se comporta tal y como teníamos previsto que lo hiciera.

## JEST:

### [Guia de instalación y configuracion de Jest + React Testing Library](https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177)
### En proyectos de React + Vite

### 1. Instalaciones en consola:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

### 2. Opcional: Si usamos Fetch API en el proyecto:

En nuestro caso estamos usando Fetch API en el hook `useFetch.js`

```javascript
const resp = await fetch(url);
```
Por lo tanto, se tendría que hacer la instalación via terminal con el siguiente comando: 
```
yarn add --dev whatwg-fetch
```

A pesar de estar usando una versión de node superior a la 18.0.0 (actualmente la 18.7.0), es necesaria la instalación.


### 3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

### 4. Crear la configuración de babel __babel.config.cjs__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

### 5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.cjs__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

### Para iniciar los tests:
```
yarn test
```

Una vez en la consola, pulsando 'W', tenemos estas opciones:
```
› Press c to clear filters.
› Press a to run all tests.
› Press f to run only failed tests.
› Press o to only run tests related to changed files.
› Press p to filter by a filename regex pattern.
› Press t to filter by a test name regex pattern.
› Press q to quit watch mode.
› Press Enter to trigger a test run.
```

### Para ejecutar los test de un solo component:

Pulsamos 'p' y a continuación el nombre del component a testear:
```
todoReducer
```


## Extra info Jest
[expect()](https://jestjs.io/docs/expect)
[mockFn.mockReturnValue(value)](https://jestjs.io/docs/mock-function-api#mockfnmockreturnvaluevalue)
[expect().toHaveBeenCalled()](https://jestjs.io/docs/expect#tohavebeencalled)
[beforeEach()](https://jestjs.io/docs/setup-teardown)
[jest.clearAllMocks()](https://jestjs.io/docs/jest-object#jestclearallmocks)

### REACT TESTING LIBRARY (RTL):  

`screen`  
El objeto `screen` de React Testing Library (RTL) proporciona métodos para consultar los elementos representados del DOM para hacer afirmaciones sobre su contenido de texto, atributos y más. [Queries](https://testing-library.com/docs/queries/about/)

---

## APIS USADAS
- [breakingbadapi](https://breakingbadapi.com)
---

## EXTRA INFO
### REACT:  
- Para evitar que, por ejemplo, aparezca duplicado el console.log de la llamada al `useEffect`, eliminar el `<React.StrictMode>` del `main.jsx`.

### GENERIC:  
- Las dev tools de Chrome solo funcionan en desarollo, cuando estamos en producción, no funcionan.
### VISUAL STUDIO CODE:  
- Para crear un Functional Component `rafc`.

### BUENAS PRÁCTICAS:
Cuando estamos trabajando un código, pero todavía no se ha terminado, para evitar pensar que está funcionando correctamente un `return`

```javascript
throw new Error ('action.type "ABC" todavía no se ha definido');
```


---

# 🚀 195. Lista de Heroes

Aquí vamos a empezar a aplicar componentes para elementos que se repiten.

En este ejemplo, haremos el listado de los heroes por "Publisher", que será la misma estructura tanto en la página `DcPage.jsx` como en la de `MarvelPage.jsx`




---

# 🚀 194. Navigate push / replace - useNavigate

En esta clase se inicia el control de la navegación y el historial, pera evitar que una vez des-logueado, no puedas volver a acceder a contenido exclusivo para usuarios logados.

`useNavigate` es un custom hook creado por el equipo de "React Router DOM"

Con `replace: true` evitamos que la persona vuelva al historial anterior, ya que lo está reemplazando el historial. Si ya estás deslogeado, ya no puedes volver al contenido de la página en la que necesitas estar logado para ver.

---

# 🚀 193. Creando un segundo Router

Creamos un segundo router para tener diferentes menús para diferentes contenidos, por ejemplo apartado de login tiene que ser diferente de la del resto de la web.

Como pasamos a tener dos rutas, una para `herores` y otra para `auth` crearemos una carpeta "routes" dentro de cada carpeta.

Quitamos la llamada al `<Navbar />` general para que solo aparezca en el `HeroesRoutes.jsx`, de manera que ahora en el router por defecto `AppRouter.jsx` solo vamos a distinguir entre login/heroes (resto de páginas):

```javascript
<Routes>
    <Route path="login" element={ <LoginPage /> } />

    <Route path="/*" element={ <HeroesRoutes /> } />
</Routes>
```

Una vez compruebe que el path no es "login", pasará a buscar el elemento `<HeroesRoutes />` y aquí sí hará la distinción entre rutas de heroes:

```javascript
<Routes>
    <Route path="marvel" element={ <MarvelPage /> } />
    <Route path="dc" element={ <DcPage /> } />

    <Route path="/*" element={ <Navigate to="marvel" /> } />
</Routes>
```



---

# 🚀 192. Colocar clase de la ruta activa

### 1. Colocar clase de la ruta activa

Ejemplo que pone Fernando:
```javascript
<NavLink
    className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }`}
    to="marvel">
    Marvel
</NavLink>
```

Realmente no hace falta el condicional ternario, por defecto ya te añade la class `active` si está en la ruta marcada.
```javascript
<NavLink
    className="nav-item nav-link" 
    to="marvel">
    Marvel
</NavLink>
```

### 2. Crear archivo barril por módulo
Tal y como hemos hecho con el módulo de "ui" preparamos los módulos de "heroes" y el de "auth"

---

# 🚀 191. Creando un primer Router
En este capítulo hacemos:
- Instalación de React Router 6 vía Yarn `yarn add react-router-dom@6`
- Importar `BrowserRouter` en `Main.jsx` 
```javascript
import { BrowserRouter } from 'react-router-dom'

...

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
```

- Crear directorio "router" donde pondremos todos los componentes con las rutas vinculadas.  
En nuestro caso de momento solo crearemos `AppRouter.jsx`, que es el nombre que se le suele dar al router principal de la aplicación. Aquí irán todas las rutas, pero podríamos tener otro component para la administración de otros tipos de rutas.
```javascript
<Routes>
    <Route path="marvel" element={ <MarvelPage /> } />
    <Route path="dc" element={ <DcPage /> } />
    
    <Route path="login" element={ <LoginPage /> } />

    <Route path="/*" element={ <Navigate to="marvel" /> } />
</Routes>
```


- Creamos las páginas dentro de la carpeta `heroes/pages` y en `auth/pages`




---

# 🚀 189. Inicio de proyecto - HeroesApp

En este capítulo:

1. Arrancamos el proyecto con YARN + VITE (quedará pendiente prepara la parte de Jest + React Testing Library)
2. (fuera del video) Inicializo repositorio en GITHUB
3. Limpieza y orden general
4. Se prepara estructura de carpetas para trabajar en dos módulos independientes representados en dos carpetas dentro de la carpeta `src`:
    - auth
    - heroes

El módulo de `auth` será independiente del de `heroes`.



# 🆕 INICIO SECCIÓN 14: HeroesApp - Single Page Application (SPA)

<br />

---

# 🏁 FIN SECCIÓN 13: Bonus: Repositorio de Custom Hooks




# 🧰 🪝 183. Repositorio con customHooks
https://github.com/hectoralvaez/custom-hooks

---

# 🧰 🪝 182. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Subir código a nuestro repositorio

- Tener un listado de customHooks y código que podemos reutilizar

- Una idea para mantener tu repositorio ordenado con ejemplos

No es una sección obligatoria, pero puede ayudarles a tener su código ordenado y fácil de utilizar en proyectos futuros.


# 🆕 INICIO SECCIÓN 13: Bonus: Repositorio de Custom Hooks

<br />

---

# 🏁 FIN SECCIÓN 12: Pruebas unitarias y de integración - Hooks

---
# 🚧 🪝 179. Pruebas generales en nuestro AppRouter

Para testear las rutas, es necesario llamar al componente a testear dentro del `<MemoryRouter>` que substituye a lo que se usa en el componente `<BrowserRouter>`

Para pasar el valor de la ruta al `<MemoryRouter>`:
```javascript
<MemoryRouter initialEntries={['/about']}>
    <MainApp />
</MemoryRouter>
```

---

# 🚧 🪝 178. Pruebas de funciones del context

## Importante:

1. Definir el mock para poder hacer la acción del botón

```javascript
const setUserMock = jest.fn();
```

2. El UserContext, tiene dos valores, el inicial `user` y el final `setUser`, quando se aplica la acción (en este caso, hacer click en el botón)

```javascript
<UserContext.Provider value={{ user: null, setUser: setUserMock }}>
```

---

# 🚧 🪝 177. Pruebas con useContext

No vamos a probar el `createContext`, ya que es una libreria de terceros (en este caso React) y damos por hecho que está testeada y funciona.

Lo que vamos a comprobar es que `useContext` funciona como nosotros queremos dentro de nuestra aplicación.


>GENERAL DE REACT PARA HACER REFERENCIA A UNA VARIABLE:
>
>Si definimos un usuario:
>```javascript
>const user = {
>    id: 1,
>    name: 'Fernando'
>}
>```
>
>Podemos referirnos a este usuario así:
>
>```javascript
><UserContext.Provider value={{ user: user }}>
>```
>
>o así: 
>```javascript
><UserContext.Provider value={{ user }}>
>```

SOLUCIÓN A LA TAREA:

Así funcionaría, ya que comprueba que tanto el nombre como el id son correctos:
```javascript
expect( preTag.innerHTML).toContain('"name": "Fernando"');
expect( preTag.innerHTML).toContain('"id": 1');
```
Pero es más limpio y elegante así:

```javascript
expect( preTag.innerHTML).toContain(user.id);
expect( preTag.innerHTML).toContain(user.name);
```

De esta manera el id da error, ya que se pasa como 'string'.

Se puede solucionar de dos maneras:

1 - Pasándolo a string con 'toString()':
```javascript
expect( preTag.innerHTML).toContain(user.id.toString());
```

2 - Con un "Template string":
```javascript
expect( preTag.innerHTML).toContain( `${user.id}`);
```

---

# 🚧 🪝 176. Pruebas en el TodoApp

Si solo hacemos el render sin pasar valores, sin hacer el mock del hook useTodos, no sabemos si los valores que estamos pasando son correctos o no, ya que, aunque no da error, devuelve todo vacío.

---

# 🚧 🪝 175. Pruebas en los eventos del TodoItem

Al testear que el todo está completado, para no tener que volver a definir un nuevo "todo", con el "done" a TRUE, en el mismo test forzamos el valor:
```javascript
todo.done = true;
```
Una vez empecemos a trabajar con fixtures podremos tener diferentes todos con características específicas y podremos hacer referéncia a cada uno de ellos sin necesidad de forzar este valor en cada test.

Es importante tener en cuenta que aquí no se está comprobando el funcionamiento del cambio de estado de cada item, eso ya se testeó en el reducer, aquí se está testeando el click de los elementos, NO el funcionamiento del todo, eso queda más arriba del TodoItem, se está analizando de la forma más atómica posible.

---

# 🚧 🪝 174. Pruebas en el componente TodoItem

Definimos el 'todo':
```javascript
const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false
}
```

> Próximamente se explicará cómo definir una sola vez un objeto (en este caso "todo") que podamos reutilizar en todos los tests del proyecto. 
> Es lo que se conoce como "fixtures", data ficticia que se importa en cada prueba.

y las funciones (con el nombre de la función original + "Mock" para indicar que es una función de test):
```javascript
const onDeleteTodoMock = jest.fn();
const onToggleTodoMock = jest.fn();
```

antes de los tests, ya que se van a reutilizar en cada uno de los test.

Precisamente por la reutilización de estas funciones, es necesario que hagamos el `clearAllMocks` después de cada ejecución para resetear las funciones:
```javascript
beforeEach( () => jest.clearAllMocks() );
```

En la aserción para confirmar que la class del span és correcta, creo que es mejor dejar el espacio para asegurarse de que NO se borra el espacio que hay detrás de la class, ya que si se quita, se juntan las clases y se pierden las dos clases.
```javascript
expect(spanElement.className).toBe("align-self-center ")
```
---

# 🚧 🪝 173. Resolución de la tarea

## "Debe eliminar un Todo"
### ERROR EN ACTION:
En realidad el payload SOLO devuelve el id:

```javascript
// 05-hook-app/src/hooks/useTodos.js

const handleDeleteTodo = ( id ) => {
    dispatch({
        type: '[TODO] Delete Todo',
        payload: id
    });
}
```

En el caso anterior, cuando hacíamos el test "Debe agregar un Todo" sí teníamos en el 'payload' todo el objeto 'todo':
```javascript
// 05-hook-app/src/hooks/useTodos.js

const handleNewTodo = ( todo ) => {
    const action = {
        type: '[TODO] Add Todo',
        payload: todo
    }
    dispatch( action );
}
```


Por lo tanto, cuando probamos el "Debe eliminar un Todo", en lugar de plantear el action así:

```javascript
const action = {
    type: "[TODO] Delete Todo",
    payload: {
        id: 1,
    },
};
```

Hay que plantearlo de la siguente manera:
```javascript
const action = {
    type: "[TODO] Delete Todo",
    payload:1,
};
```

## "Debe realizar el toggle del Todo"
### ERROR EN ACTION:

(el mismo caso que en el anterior, solo se usa el ID, no el objeto entero)

### ERROR EN EXPECT:
Faltaba hacer referencia al elemento concreto del newState, al primer elemento del array:

En lugar de:
```javascript
expect(newState.done).toBe(true);
```
Es:
```javascript
expect(newState[0].done).toBe(true);
```

Es lo mismo que hacer:
```javascript
expect(newState[0].done).toBeTruthy;
```

#### EXTRA:
Para confirmar que el toggle funciona (no sería necesario, pero no está de más), a partir del 'newSate' que hemos generado en la prueba, volvemos a realizar el toggle para que quede de nuevo en false:

```javascript
const newState = todoReducer(initialState, action);
expect(newState[0].done).toBe(true);

const newState2 = todoReducer(newState, action);
expect(newState2[0].done).toBe(false);
```

Es importante crear un nuevo state "newState2" y que se le aplique la acción a "newState" (el que hemos generado anteriormente) para comprobar en "newState2" que vuelve a ser FALSE.


---


# 🚧 🪝 172. Pruebas sobre el Reducer

Probrar el 'Reducer' es importante ya que es quin cambia el estado.

Es muy sencillo de testear ya que, al ser una función pura, lo unico que hace es:
- Recibir un estado inicial > Enviarle una acción > Confirmar que el nuevo estado es el correcto.

> NOTA:
> Como el reducer por defecto no hacía un 'return' el test daba error ya que esperaba el contenido con el que hemos definido el initial state, pero recibía "undefined"

> ```
> Expected: [{"description": "Demo Todo", "done": false, "id": 1}]
> Received: undefined
> ```

Al pasar la función con el objeto del action vacío, no entra en el switch del `action.type` y devuelve el default, es decir, el `initialState`.

---


# 🚧 🪝 171. Evaluar respuesta del useFetch

No se va a evaluar el funcionamiento de `useFetch`, ya se hizo en la sección pasada.

Lo que se va a evaluar son los resultados del `useFetch`.

En este caso `useFetch` está devolviendo la 'data', 'isLoading' y 'hasError' (05-hook-app/src/hooks/useFetch.js) 

```javascript
return {
    data:       state.data,
    isLoading:  state.isLoading,
    hasError:   state.hasError,
};
```

Haremos un "mock" completo del `useFetch` y simularemos los valores de retorno.

>NOTA:
>Para la importación del `useFetch` se recomiendo apuntar directamente a `useFetch` dentro del "barril" `hooks`.
>
>Si lo importamos así, 
>```javascript
>import { useFetch } from "../../src/hooks";
>```
>Tendríamos que hacer un mock del useCounter también, que se está usando en el "MultipleCustomHooks" y está dentro del "barril".
>
>Por lo tanto, hacemos la importación de este modo:
>```javascript
>import { useFetch } from "../../src/hooks/useFetch";
>```
>SPOILER ALERT: Acabaremos haciendo el mock del useCounter



Una vez importado el hook, si hacemos el mock, 
```javascript
jest.mock('../../src/hooks/useFetch');
```
los tests darán error, porque el `useFetch` no se ha definido (undefined) por lo tanto, no hay nada que desestructurar.

Hay que implementar el mock en los test simulando el valor de cada variable en cada caso.

### Por defecto:
```javascript
useFetch.mockReturnValue({
    data: null,
    isLoading: true,
    hasError: null
});
```
### Mostrando un quote:
```javascript
useFetch.mockReturnValue({
    data: [{author: 'Fernando', quote: 'Hola Mundo'}],
    isLoading: false,
    hasError: null
});
```

Finalmente, hay que hacer el mock de `useCounter` para poder testear la función de incrementar del botón.

Para simular el `mockReturnValue`, tenemos que tener claro qué devuelve la función que estamos evaluando, en este caso, el hook `useCounter` (05-hook-app/src/hooks/useCounter.js) devulelve:

```javascript
return {
    counter,
    increment,
    decrement,
    reset,
}
```

Una vez tenemos claro el return de la función pasamos a simularla:

```javascript
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });
```

Si este mock lo llamamos solo dentro del test "Debe llamar la función de incrementar", nos dará error, ya que al hacer el mock del useCounter 
```javascript
jest.mock('../../src/hooks/useCounter');
```

en cada uno de los tests, se está usando el useCounter. 

Entonces, en vez de llamar el useCounter en cada test, sacamos
```javascript
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });
```
del test específico "Debe llamar la función de incrementar" y lo ponemos antes de los 'test()', justo debajo del 'describe()' de manera que todos puedan acceder al mock del `useCounter`

Si además, queremos asegurarnos de que en cada test la función se "resetea" a su estado inicial, añadimos:
```javascript
beforeEach( () => {
    jest.clearAllMocks();
});
```

---


# 🚧 🪝 170. Pruebas con múltiples hooks simultáneos

Se podría hacer con un "screen shot" (snapshot), pero se va a hacer elemento por elemento.

Usaremos `screen` (con screen.debug en el test, imprimimos la estructura completa de lo que estamos testeando, lo que permite ver cada elemento html) para analizar cada cada elemento por separado.

Si intentas llamar a un elemento con `getByRole` y no pones el nombre correctamente: 

```javascript
const nextButton = screen.getByRole('button', {name: 'Nex Quote' });
```

La consola te lanza el siguiente error:

```
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name "Nex Quote"

Here are the accessible roles:

heading:

Name "Breaking Bad Quotes":
<h1 />

--------------------------------------------------
separator:

Name "":
<hr />

--------------------------------------------------
button:

Name "Next quote":
<button
class="btn btn-primary"
disabled=""
/>

--------------------------------------------------
```

---


# 💩 🚧 🪝 169. Pruebas sobre useForm - CustomHook

Clase bastante densa para testear cambios de valor (campo "name") en el formulario.

---


# ⭐ 🚧 🪝 168. Ejecutar funciones del customHook dentro de las pruebas

Cuando necesitamos hacer un cambio de estado de React en un componente para testearlo, es necesario que este cambio de estado esté dentro de un `act()`.  

Este es el error y la información que lanza la consola si no llamas la función dentro del `act()`.  

```
console.error
Warning: An update to TestComponent inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):
```

```javascript
act(() => {
    /* fire events that update state */
});
/* assert on the output */

```

```
This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at TestComponent (/Users/hectorpenalvapelaez/www/react/05-hook-app/node_modules/@testing-library/react/dist/pure.js:278:5)
```

Con la función dentro del `act()`, ya no da error, pero ahora no está testeando bien la función:
```javascript
test('Debe incrementar el contador.', () => {
    const { result } = renderHook( () => useCounter() );
    const { counter, increment} = result.current;

    act( () => {
        increment();
    });

    expect( counter ).toBe(11);


});
```

El valor del `conuter` desestructurado y llamado en el "expect" `expect( counter ).toBe(11);` no se actualiza cuando pasa por el `increment` dentro del `act()`.  

El problema es que no se actualiza porque cuando trabajamos con valores primitivos (`strings`, `números`, `boleanos`...) estos valores se extran y se crean nuevas variables, por lo tanto esa variable va a tener siempre el valor con el que se ha extraido (esto no pasa con los `objetos`, ya que los `objetos` pasan por referencia).  

Para evitar este error, hay que hacer referencia a la variable sin desestructurar `result.current.counter`  

Quedando el test de la siguiente manera:  
```javascript
test('Debe incrementar el contador.', () => {
    const { result } = renderHook( () => useCounter() );
    const { increment} = result.current;

    act( () => {
        increment();
    });

    expect( result.current.counter ).toBe(11);
});
```


Si quisieramos llamar dos veces la función `increment()` dentro de un mismo `act()`, tendríamos que repasar el código del hook, ya que cada vez que se llama la función `increment()`, el valor del `counter` se reinicia, es decir, no recibe el valor modificado en la llamada al anterior `increment()`.
```javascript
test('Debe incrementar el contador.', () => {
    const { result } = renderHook( () => useCounter() );
    const { increment} = result.current;

    act( () => {
        increment();
        increment(2);
    });

    expect( result.current.counter ).toBe(13);
});
```

El cambio en el hook sería el siguiente:  
En lugar de hacer referencia a `counter`

```javascript
setCounter( counter + value);
```

Usaremos el valor `current`:
```javascript
setCounter( (current) => current + value );
```

De esta manera cada vez que se llame a `increment()`, parte del valor actual del counter.  


```javascript

test('Debe resetear el contador.', () => {
    const { result } = renderHook( () => useCounter(5) );
    const { increment, decrement, reset} = result.current;

    act( () => {
        // Variamos el valor inicial del contador
        increment();
        decrement();

        // Reseteamos el valor para ver si funciona o no
        reset();
    });

    expect( result.current.counter ).toBe(5);


});
```




# ⭐⭐ 🚧 🪝 167. Pruebas sobre useCounter - CustomHook
Para empezar a testear hooks, lo primero es importar `renderHook` de React Testing Library:
```javascript
import { renderHook } from "@testing-library/react";
```

Y el hook a testear:
```javascript
import { useCounter } from "../../src/hooks/useCounter";
```

Una vez tenemos esto, describimos el test general del hook donde iremos haciendo las pruebas puntuales de funcionamiento:
```javascript
describe('Pruebas en el UserCounter', () => {
    // Aqui cargaremos los tests.
});
```

Dentro de la descripción, iremos añadiendo los tests puntuales:
```javascript
describe('Pruebas en el UserCounter', () => {
    test('Debe retornar el valor por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        console.log(result);
    });
});
```

Para recordar los valores que devuelve el hook podemos utilizar la función `renderHook` de manera que almacenando el resultado en un objeto, al pintarlo en consola, aparecerá la siguiente información:
```
// Lo que devuelve el console.log
{
    current: {
        counter: 10,
        increment: [Function: increment],
        decrement: [Function: decrement],
        reset: [Function: reset]
    }
}
```
Ahora que sabemos que el objeto principal es `current`, podemos desestructurarlo para poder trabajar de forma independiente con cada uno de los valores que devuelve:   


```javascript
describe('Pruebas en el UserCounter', () => {
    test('Debe retornar el valor por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset} = result.current;
    });
});
```

Y ya podemos iniciar nuestros tests, en este caso, confirmar que el valor por defecto del contador (`counter`) que se envía a la función es "10":

```javascript
describe('Pruebas en el UserCounter', () => {
    test('Debe retornar el valor por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset} = result.current;

        expect( counter ).toBe(10);

        // (También se podría usar sin desestructurar "result.current":)
        expect( result.current.counter ).toBe(10);
    });
});
```

---

# 💾 🪝 166. Inicio de proyecto - Pruebas sobre Hooks (instalación y configuracion de Jest + React Testing Library)

### [Guia de instalación y configuracion de Jest + React Testing Library](https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177)
### En proyectos de React + Vite

### 1. Instalaciones en consola:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

### 2. Opcional: Si usamos Fetch API en el proyecto:

En nuestro caso estamos usando Fetch API en el hook `useFetch.js`

```javascript
const resp = await fetch(url);
```
Por lo tanto, se tendría que hacer la instalación via terminal con el siguiente comando: 
```
yarn add --dev whatwg-fetch
```

A pesar de estar usando una versión de node superior a la 18.0.0 (actualmente la 18.7.0), es necesaria la instalación.


### 3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

### 4. Crear la configuración de babel __babel.config.cjs__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

### 5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.cjs__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

### Para iniciar los tests:
```
yarn test
```


## Extra info Jest
[expect](https://jestjs.io/docs/expect)

# 🪝 165. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Pruebas sobre Hooks y CustomHooks

Ese es el tema principal, demostrar cómo podemos evaluar cada unos de los hooks aplicados anteriormente con sus casos reales de uso.

Hay varios extras, como la prueba de un Reducer, que realmente no es nada complicado, también quiero aclarar qué nos toca evaluar a nosotros y qué no es responsabilidad nuestra.

<br />

---

# 🆕 INICIO SECCIÓN 12: Pruebas unitarias y de integración - Hooks

<br />

---

# 🏁 FIN SECCIÓN 11: Profundizando Hooks - useContext


<br />
---


# ⭐🪝 161. useContext

---

Para hacer uso del contexto, lo único que hay que hacer es, en la página donde necesitamos utilizar  ese contexto, importar el `useContext` de React y nuestro contexto, en este caso, el contexto del usuario `UserContext`:

```javascript
import { useContext } from "react"
import { UserContext } from "./context/UserContext"
```

Una vez tenemos esta información, ya podemos trabajar con ella:

De esta manera mostramos en consola toda la información que hay en `UserContext`:
```javascript
const algo = useContext( UserContext );
console.log(algo);
```

Pero lo que realmente necesitamos es desestructurar esa información para trabajar mejor de la siguiente manera:

```javascript
const { user } = useContext( UserContext );
```

Ahora ya podemos llamar a cada parte de ese contenido dentro del "html":
```javascript
<h1>HomePage <small>{ user.name }</small></h1>

<pre>
    { JSON.stringify( user, null, 3 )}
</pre>
```

# ⭐🪝 161. useContext (v2)

Establecer la información del usuario desde una página, para comprobar que una vez hecho, todas tendrán acceso a esa información, aunque no estuviera previamente establecido:


Para evitar errores, como NO vamos a establecer en un inicio el valor de usuario, cuando se llama, hay que añadirle un "?" para que en caso de que no existe, no pinte nada y evitar así el error:

```javascript
<h1>HomePage <small>{ user?.name }</small></h1>
```

IMPORTANTE:  
Ver las diferencias que se han aplicado en el código en el commit de los archivos. Se ve cómo cambia el funcionamiento y la carga de la información del usuario.

(Según Fernando, no está bien hecho, pero sirver para ver el funcionamiento)





# 🪝 160. CreateContext y ContextProvider

[`createContext`](https://es.react.dev/reference/react/createContext) te permite crear un "contexto" que los componentes pueden proporcionar o leer.


> ℹ️ [Contexto](https://es.react.dev/learn/passing-data-deeply-with-context):
> Por lo general, pasarás información desde un componente padre a un componente hijo por medio de props. Pero pasar props puede convertirse en una tarea verbosa e inconveniente si tienes que pasarlas a través de múltiples componentes, o si varios componentes en tu aplicación necesitan la misma información. El contexto permite que cierta información del componente padre esté disponible en cualquier componente del árbol que esté por debajo de él sin importar qué tan profundo sea y sin pasar la información explícitamente por medio de props. 

El contexto es la estructura de componentes de nuestra aplicación que se genera en el navegador, se puede ver al inspeccionar elemento yendo a la pestaña de React "Components". 

Por lo general se usaran Higher-Order Components anidados. Estos HOC generan su propia estructura y sus "proveedores". En el caso de "BrowserRouter" genera:

```
<BrowserRouter> 
    <Router>
        <Navigation.Provider>
            <Location.Provider>
```

Los "providers" proveen de información y control del componente que se podrá compartir con el resto de componentes dentro del arbol generado.

En este ejercicio creamos el `UserContext.jsx` donde guardaremos toda la información referente al usuario, podríamos tener otros context de cualquier otro tipo dentro de la carpeta "context". 

Este `UserContext.jsx` es un HOC, no usamos el "rafc" para generarlo. Es un context especializado.

```javascript
import { createContext } from "react";

export const UserContext = createContext();
```

Creamos también `UserProvider.jsx` aquí sí usamos el "rafc" para generarlo ya que es el típico Functional Component, pero en este caso va a tener una cosa que diferencia al Functional Component tradicional.

```javascript
// Creado como un Functional Component tradicional
export const UserProvider = () => {
  return (
    <div>UserProvider</div>
  )
}
```

Al ser un HOC, a parte de recibir las propiedasdes que necesite, va a poder recibir los "childrens".

```javascript
// Impotamos el "UserContext" para poderlo usar
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {
  return (
    // Pasamos el valor al que van a poder acceder todos los hijos dentro del arbol del "context"
    <UserContext.Provider value={{ hola: 'Mundo' }}>
        {children}
    </UserContext.Provider>
  )
}
```

Para poderlo usar, lo tenemos que colocar en el punto más alto donde los hijos lo vayan a necesitar.

En este ejemplo lo ponemos en el `MainApp.jpx`, cambiando el fragmento "<>" por "<UserProvider>". De esta manera, todos los components y subcomponents, podrán acceder a esta información.

---

# ⭐🪝 159. NavLink

[React Router (Nav Link)](https://reactrouter.com/en/main/components/nav-link)
Un `<NavLink>` es un tipo especial de `<Link>` que sabe si está o no "activo" o "pendiente". Esto es útil al crear un menú de navegación, como un menú o un conjunto de pestañas donde nos gustaría mostrar cuál de ellas está seleccionada actualmente. También proporciona un contexto útil para la tecnología de asistencia, como los lectores de pantalla.

Ejemplo que pone Fernando:
```javascript
<NavLink
    className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
    to="login">
    Login
</NavLink>
```

Realmente no hace falta el condicional ternario, por defecto ya te añade la class `active` si está en la ruta marcada.
```javascript
<NavLink
    className={"nav-link"}
    to="login">
    Login
</NavLink>
```


---

# 🪝 158. Link
Añadimos un menú de navegación con `Link`

[React Router (Link)](https://reactrouter.com/en/main/components/link)

Un `<Link>` es un elemento que permite al usuario navegar a otra página haciendo clic o tocándola. En react-router-dom, un `<Link>` representa un elemento `<a>` accesible con un href real que apunta al recurso al que se vincula. Esto significa que cosas como hacer clic con el botón derecho en un `<Link>` funcionan como cabría esperar. Puede usar `<Link reloadDocument>` para omitir el enrutamiento del lado del cliente y dejar que el navegador maneje la transición normalmente (como si fuera un `<a href>`).


Si utilizamos el clásico anchor tag `<a>`, cada vez que hagamos click en ese link, al ir a esa página hay un full refresh de la aplicación, lo que implica volver a cargar toda la librería de React, TODOS los componentes, etc... cuando en realidad SOLO se está cambiando una parte concreta de nuestra aplicación.

```
<a href="/">Home</a>
<a href="/about">About</a>
<a href="/login">Login</a>
```

Uso de `<Link>` para cargar SOLO la parte de la aplicación que cambia:
```
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/login">Login</Link>
```


---

# 🪝 157. Configurar Router en React

Documentación de ['React Router'](https://reactrouter.com/).

En esta clase creamos la navegación entre diferentes pantallas en nuestra aplicación.

Hay varias formas de configurar nuestras rutas, pero idealmente se tendrían que definir en el punto más alto de nuestra aplicación, en nuestro caso en `MainApp.jsx`.

Routes es otro HOC (Higher-Order Component) que va a recibir un arreglo de hijos con las rutas de la aplicación.

Ejemplo: en `MainApp.jsx`
```javascript
<Routes>
    <Route path="/" element={ <HomePage /> } />
    <Route path="login" element={ <LoginPage /> } />
    <Route path="about" element={ <AboutPage /> } />

    <Route path="/*" element={ <Navigate to="about" /> } />
</Routes>
```


```javascript
// Para definir una ruta en caso de que no exista:
// 1 - De esta manera te lleva a "About", pero en la barra de navegación se queda la ruta errónea que se ha introducido:
<Route path="/*" element={ <AboutPage /> } />

// 2 - Es una mejor práctica realizar las redirecciones con `Navigate` (hay que importarlo también de 'react-router-dom')
<Route path="/*" element={ <Navigate to={ <AboutPage /> } /> } />
```


---

# 🪝 156. Preparación de nuestra aplicación con rutas

1.  Iniciar `09-useContext`con las diferentes páginas que tendrá el proyecto y que se comunicarán entre si utilizando el `Context`.


2. Instalación de ['React Router'](https://reactrouter.com/es/main/start/tutorial#setup):
```
$ yarn add react-router-dom@6
```


3. Configuración de `BrowserRouter`
`BrowserRouter` es un Componente de Nivel Suprerior (Higher-Order Component "HOC").

Los HOC son componentes como cualquier otro, solo que recibe otros componentes dentro de él, como si un `<div>` fuera un HOC por contener dentro un `<h1>`, `<h2>`, `<p>`, etc.

Esto es útil ya que de esta manera, todos los hijos que estén dentro de ese HOC tendrán acceso a información que tenga este padre.

Ejemplo: en `main.jsx`
```javascript
<BrowserRouter>
    <MainApp />
</BrowserRouter>
```


---

# 🪝 155. Introducción al Context
Clase teórica sobe lo que significa el `Contex` y comparar el uso que hacíamos anteriormente sin el uso del context y cómo era la comunicación entre componentes.

<br />

---


# 🪝 154. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Context
- Provider
- useContext
- React Router
- Links y NavLinks
- CreateContext
- SPA ( Single Page Application )

El objetivo de la sección es principalmente aprender sobre el Context, el Router es un valor agregado que explotaremos mucho más en próximas secciones, pero al usar un Router, podemos explicar claramente el problema y necesidad del context.


---


# 🪝 153. Introducción a la sección

[`useContext`](https://es.react.dev/reference/react/useContext) es un Hook de React que te permite leer y suscribirte a un contexto desde tu componente.

<br />

---

# 🆕 INICIO SECCIÓN 11: Profundizando Hooks - useContext

<br />

---

# 🏁 FIN SECCIÓN 10: Profundizando Hooks - useReducer


<br />
---

# 📝🪝 151. Resolución de la tarea - useTodos 
En esta tarea se saca toda la lógica de `TodoApp` al hook `useTodo`.

En la segunda parte de la clase crean en el hook `useTodo` las variables `todosCount`y `pendingTodosCount` y las recogemos en `TodoApp`.

---

<br />

# ⭐🪝 149. Toggle Todo - Marcar como completado o pendiente un TODO 
Clase muy fácil, se entiende muy bien el toggle y el funcionamiento.

Para añadir un condicional en la class pasamos de:
```javascript
className="align-self-center"
```

a:
```javascript
className={`align-self-center`}
```
para poder añadir variables:
```javascript
className={`align-self-center ${todo.done && 'text-decoration-line-through'}`}
```
En el ejemplo anteior, el problema es que si la variable es `false`, le añade la clase "false" al elemento, para evitarlo, hacemos un ternario:
```javascript
className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}
```

---

<br />

# 💩🪝 148. Borrar un TODO 
Clase muy densa, en las próxima y con Redux, se simplificará el funcionamiento, actualmente, la comunicación va de padre a hijo, y de hijo llega a nieto

```javascript
return initialState.filter( todo => todo.id !== action.payload );
```
Con el `filter` el return está devolviendo un array con el estado inicial menos el "todo" eliminado filtrado por el `id`
    
---

<br />

# ⭐🪝 147. Guardar y Leer TODOs en LocalStorage

[Video extra de Fernando explicando el LocalStorage](https://www.youtube.com/watch?v=hb8O0qRqiSk&t=2s)

Aquí haremos persistente la información en LocalStorage.  


>LocalStorage y sessionStorage son propiedades de HTML5 (web storage), que permiten almacenar datos en nuestro navegador web. De manera muy similar a como lo hacen las cookies.  
>
>Ya hace años que los navegadores tienen la opción de guardar información en LocalStorage (Application > Storage > LocalStorage).  
>
>Las características de Local Storage y Session Storage son:
>- Permiten almacenar entre 30mb a 50mb (dependiendo del navegador) de información; incluyendo texto y multimedia
>- La información está almacenada en la computadora del cliente y NO es enviada en cada petición del servidor, a diferencia de las cookies
>- Utilizan un número mínimo de peticiones al servidor para reducir el tráfico de la red
>- Previenen pérdidas de información cuando se desconecta de la red
>- La información es guardada por domino web (incluye todas las páginas del dominio)


Se podría hacer por cookies también, pero las cookies tienen menos capacidad de almacenamiento y además, viajan con las peticiones http. El LocalStorage se mantienen en el ordenador a no ser que se elimine manualmente.  

Para conseguir almacenar información en LocalStorage, tenemos que ejecutar algo cuando los `todo` cambien, es decir, tenemos que ejecutar un efecto secundario, y eso con conseguiremos mediante un `useEffect`

Usando esta manera el `useEffect` pasamos los `todos`al `localStorage`.  

Es importante el uso de `JSON.stringify`para pasar el objeto a cadena de caracteres.  
```javascript
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
```

Solo con esto no es suficiente para mantener en memoria los `todos`. Actualmente el problema es que el `useEffect` se dispara cuando cambian los `todos`, pero también cuando el componente se carga por primera vez y en este punto, en la primera carga, está vacío.  

Por lo tanto, lo que hay que hacer es incializar nuestro "state" con los `todos` que previamente existían en el `localStorage`.  

Usaremos la tercera función del `useReducer` que es el inicializador (`initializer`). Es la función que inicializa el reducer, normalmente se declara como `init`.  

Declaramos el inicializador `initializer` (`init`):
```javascript
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
```

>`JSON.parse(todos)` es lo contrario que el `JSON.stringify(todos)`, es decir, lo vuelve a objeto.


Pasamos el inicializador (init) al `useReducer`:
```javascript
const [todos, dispatch] = useReducer(todoReducer, initialState, init);
```




---

<br />

# ⭐🪝 146. Agregar un nuevo TODO

Como tenemos el reducer, vamos a utilizarlo para agregar un elemento a la lista de tareas.  

Hay declarar los casos de uso que tendremos en nuestro reducer.  

Empezamos con "añadir un nuevo elemento" definiendolo en el `case`.  

Este case SIEMPRE tendrá asociado un return que devovlerá el NUEVO estado, este state puede ser un string, boleando, array, objeto... En nuestro caso, es un array `[]`  

Como siempre, en React, vamos a evitar mutar los arreglos y no vamos a usar el `push`, vamos a usar el Spread Operator (`...`) para recuperar los valores anteriores del array


```javascript
//todoReducer.js

switch ( action.type ) {
    case '[TODO] Add Todo':
        return [ ...initialState, action.payload ]

default:
        initialState;
}
```

En `TodoApp.jsx` es donde tenemos de aplicar el reducer.  

El `todo` es el nuevo estado que queremos insertar, es el `payload` que tenemos que enviar al reducer.

Hay que declarar la `action` (con el `type` declarado en el switch del reducer y el `payload` que es el nuevo estado) y esta `action` la enviaremos al `dispatch`.

```javascript
//TodoApp.jsx

const [todos, dispatch] = useReducer(todoReducer, initialState);

const handleNewTodo = ( todo ) => {
    const action = {
        type: '[TODO] Add Todo',
        payload: todo
    }

    dispatch( action );
    
}

```




---

<br />

# ⭐🪝 144/145. Tarea: Crear componentes y emitir eventos

Para el `TodoAdd.jsx` se podría usar un `useState`, pero como ya tenemos un hook creado para gestionar formularios, es mejor utilizar el `useForm.js`.


---

<br />

# 🪝 143. Creando el cascarón de la lista de TODOs
Aquí preparamos la maqueta que no servirá para añadir toda la programación.

Toda esta maqueta se separará en componentes ya que crecerá y al tenerlo por separado mejorará la gestión del código y será más cómodo de trabajar.

---

<br />

# 🪝 142. useReducer - Todo List

>Este Hooks forma parte de los [Hooks adicionales](https://es.reactjs.org/docs/hooks-reference.html#additional-hooks) son variantes de los [Hooks básicos](https://es.reactjs.org/docs/hooks-reference.html#basic-hooks) o solo son necesarios para casos extremos específicos.

```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

En la firma del `useReducer` tenemos:  
1. La desestructiración de un arreglo con el `state` y el `dispatch` (la acción que tiene que aplicar el `useReducer`, la acción que tiene que "despachar")
2. El `reducer`: la función que hemos visto en el capítulo anterior. `initialArg`: estado inical. `init`: función de inicialización.


El hook [useReducer](https://es.reactjs.org/docs/hooks-reference.html#usereducer) es una alternativa a `useState`. Acepta un reducer de tipo `(state, action) => newState` y devuelve el estado actual emparejado con un método `dispatch`. (Si está familiarizado con Redux, ya sabe cómo funciona).  

`useReducer` a menudo es preferible a `useState` cuando se tiene una lógica compleja que involucra múltiples subvalores o cuando el próximo estado depende del anterior. `useReducer` además te permite optimizar el rendimiento para componentes que activan actualizaciones profundas, porque puedes pasar hacia abajo dispatch en lugar de callbacks.  


Para la llamada al `useReducer`:
```javascript
const [state, dispatch] = useReducer(todoReducer, initialState);
```

`state` y `dispatch`son los valores que aparecen por defecto, pero en este caso, sería preferible cambiar `state` por `todos`, ya que aunque es un `state` lo que estamos gestionando, realmente es el listado de "todos".  

En cuanto al `dispatch`, normalmente se llama así si solo tenemos un "reducer". Si tenemos más de un "reducer" en el mismo funcitonal component, es mejor cambiar el nombre por algo más descriptivo como `dispatchTodoAction` para indicar que esta es la función que "despacha" acciones hacia ese reducer en particular.

---

<br />

# 🪝 141. Idea general de un reducer - Vía código

RECORDATORIO:  
En React, NO se tienen que añadir elementos a un array con "push", es una mala práctica.  

Explicación de un "reducer" (sin entrar todavía en el hook) para comprender la teoría.  

1. Necesitamos un estado inicial `initialState` que en este caso será un array con una colección de objetos.

Definición del estado inicial:
```javascript
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];
```

2. El Reducer: No es más que una función pura.
```javascript
const todoReducer = () => {

}
```
 
El Reducer tiene que recibir dos argumentos `state` y `action`:  

a) `state`, en este ejemplo, si no recibe un estado, el valor por defecto será el `initialState`  

b) `action`, que le da la información de como quiere que se cambie el estado. Una acción dentro del Reducer NO MODIFICA el estado del reduceer, lo que está haciendo es devolver uno NUEVO.

Definición inicial de la función "reducer" (con los argumentos "estado" y "acción" y con el return del NUEVO estado, pero sin haber aplicado la acción)
```javascript
const todoReducer = ( state = initialState, action = {} ) => {

    return state;
}
```

3. El reducer siempre tiene que devolver un estado (`state`)

```javascript
return state;
```

Definición inicial de `todos` asignando el estado inicial (`initialState`) que recibe el `todoReducer` y al que no se le aplica ninguna acción:
```javascript
let todos = todoReducer();
```

Definición del nuevo `todo`:
```javascript
const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false,
}
```

Definición de la acción:
```javascript
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}
```

Ahora que tenemos definida la acción `addTodoAction` se la podemos enviar al "reducer" de manera que el nuevo estado de `todos` contenga el inicial, más el nuevo que se ha añadido.
```javascript
todos = todoReducer( todos, addTodoAction );
```

Para que devuelva UN NUEVO ESTADO hay que aplicarle una acción que hemos declarado previamente, en este ejemplo `addTodoAction`

Definición FINAL de la función "reducer" (con los argumentos "estado" y "acción", la acción a realizar y con el return del NUEVO estado, ahora sí, ya que le hemos aplicado la acción '[TODO] add todo')

```javascript
const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[TODO] add todo' ) {
        return [ ...state, action.payload ];
    }

    return state;
}
```
---

<br />

# 🪝 139. Introducción al concepto de un reducer
## ¿Qué es un Reducer?

### El Reducer es una función común y corriente o incluso más sencilla, ya que no puede ser asíncrona.  

Ejemplo de función de "Tareas por hacer" (TODOS):

```javascript
const todoReducer = () => {

}
```


### Debe de ser una función pura, es decir tiene que resolverse de manera interna.
1. No tiene que tener efectos secundarios, es decir, tiene que poder resolver todo lo que se pide internamente sin necesidad de llamar a otras funciones
2. No tiene que realizar tareas asíncronas, se tienen que ejecutar de forma síncrona
3. Debe retornar siempre un nuevo estado, no debemos mutar nunca el estado
4. No debe de llamar el `localStorage`o `sessionStorage`, son tareas síncronas pero la llamada a esas funciones son consideradas efectos secundarios y si fallan no vamos a devolver un nuevo state, vamos a devolver un error.
5. Para modificar el state no debe de requerir más que una acción que puede tener o no un argumento.


#### Porqué es importante que sea una "función pura"   
En la función "recuder" tienen que quedar claras las acciones y las modificaciones que realiza esa aplicación.   
En el reducer tiene que estar la lógica de la manipulación de cada una de las acciones que esa aplicación puede realizar.

## Ciclo de vida de un Reducer:  

### 1 STATE
En nuestro ejemplo el state es un array de `TODOS` (ahora mismo solo hay un item en el state "Comprar el pan")
```javascript
[{
    id: 1,
    todo: 'Comprar el pan',
    done: false
}]
```

### 2 SE MUESTRA EL COMPONENTE EN PANTALLA:
El "state" pasa a la vista del componente para mostrar su estado actual en la página o vista.

### 3 EL USUARIO QUIERE REALIZAR CAMBIOS
Aquí viene lo interesante, cuando el usuario quiere hacer cambios, no habla directamente con el "state", si lo hicieramos así, estaríamos mutando el state y en los reducers NO está permitido cambiar el estado.   

En cambio, la página o la vista va a crearse una acción (Create, Update, Delete) y esa acción es lo que pasamos al reducer, ya que el reducer tienen el mapa con la lógica de todas las acciones que puede realizar y una vez realizadas las acciones dentro del reducer, se va a actualizar el "state" que pasará la información a la página o vista.  

De esta manera toda la información fluye en una sola vía y queda controlada, esta es la base de Redux.



### Esta función "Reducer" tiene que devolver un nuevo estado, que es algo que hemos ido haciendo durante todo el curso. Cuando queremos aumentar un contador, no hacemos `counter ++`, lo que hacemos es `setCounter( counter + 1 )` de esa manera estamos devolviendo un nuevo valor al contador y no estamos mutando el estado anterior.

### Normalmente solo reciben dos argumentos:
    - El valor inicial (initialState)
    - La acción a ejecutar 

---

<br />

# 🪝 138. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- useReducer
- Reducers
- Teoría de un reducer
- Aplicación de TODOs
- CRUD local

Esta es una sección dedicada a comprender el concepto de un Reducer, el cual es sumamente importante para poder entrar a Redux o bien usar el contextAPI fácilmente.

---

<br />

# 🆕 INICIO SECCIÓN 10: Profundizando Hooks - useReducer

---

# 🏁 FIN SECCIÓN 9: Profundizando Hooks - Generales


# 🪝 135. Tarea Memorize

Un componente "padre", con 5 botones (componentes) "hijos" que solo se tienen que generar la primera vez que se ejecuta el código, pero NO cada vez que se suma uno de los valores de los botones.

MI SOLUCIÓN:  
Padre.jsx:  
- Añadir el `React.memo` al component ❌ (El `React.memo` se tiene que aplicar al componente hijo, no al padre)
- Utilizar el hook `useCallback` para memorizar la función `incrementar` ✅
- Cambiar el incremento del valor (del useState) de `setValor( valor + num )` por un "call back" con el valor actual del counter (c) y a partir de ahí, sumarle `num` a ese mismo valor `setValor( (c) => c + num )`. ✅ (pero para que tenga más sentido, cambiar `c` por `oldValue`)

NO FUNCIONA:  
Sigue llamando a los hijos por cada cambio que se hace en cualqueira de ellos.

En esta definición del error tenía la respuesta, lo que se tiene que memorizar es el componente hijo, que es el que dispara el mensaje de consola "Me volví a generar :("


---

<br />

# 🪝 134. useCallback con argumentos

En el component "ShowIncrement" pasamos el valor a incrementar desde la función dentro del botón, en este ejemplo `5`.

```javascript
onClick={() => {
    increment( 5 );
}}
```

En el component "CallbackHook" recibimos el valor como `value`

```javascript
const incrementFather = useCallback(
    ( value ) => {
        setCounter( (c) => c + value );
    },
    [],
)
```

PD: Pasamos los anteriores "value" a "c" (de "counter") y ahora el "value" es el valor que enviamos desde la llamada a la función.


---

<br />

# 🪝 133. useCallback

El hook [useCallback](https://es.reactjs.org/docs/hooks-reference.html#usecallback) devuelve un valor memorizado.  

Pasa un callback en línea y un arreglo de dependencias. useCallback devolverá una versión memorizada del callback que solo cambia si una de las dependencias ha cambiado. Esto es útil cuando se transfieren callbacks a componentes hijos optimizados que dependen de la igualdad de referencia para evitar renders innecesarias (por ejemplo, shouldComponentUpdate).


El `useCallback` es parecido al `useMemo` pero sirve para memorizar funciones que solo se procesarán cuando algo cambie.  


## ERROR 1:  
Pensar que no se volverá a redibujar el componente completo usando `React.memo(...)` y toda la función del ShowIncrement dentro de los parentesis:

```javascript
import React from "react";

export const ShowIncrement = React.memo( ({ increment }) => {
    console.log("me volví a generar");
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment();
            }}
        >
            Incrementar
        </button>
    );
});
```

### Motivo del error 1:
En Javsacript, las funciones y los objetos siempre apuntan a posiciones en memoria diferentes.  

Cada vez que el componente se vuelve a dibujar, la función dentro del componente está en una posición distinta en memoria y el objeto es diferente.  

## ERROR 2:  
Utilizar el `useCallback` para la función `incrementFather` con el valor `counter` del `useState`.  

```javascript
const incrementFather = useCallback(
    () => {
    console.log("setCounter(counter + 1)");
    setCounter(counter + 1);
    },
    [],
)
```

### Motivo del error 2:
De esta manera se está llamando a la función bien, entra cada vez que se clica el botón, pero como el `counter` está memorizado, cada vez que entra al `useCallback` de la función `incrementFather` el valor es siempre "10", por lo tanto, siempre que hacemos clik, el resultado es 10+1

## ERROR 3:  
Pensar que el problema es que al usar el `useCallback` sin argumento en el array, solo se redibuja la primera vez.

Sería lógico entonces que si añadimos el `counter` en el array, quede solucionado.  

```javascript
const incrementFather = useCallback(
    () => {
    console.log("setCounter(counter + 1)");
    setCounter(counter + 1);
    },
    [counter],
)
```

### Motivo del error 3:
No es la solición adecuada, ya que cada vez que el `counter` cambia, se vuelve a memorizar `incrementFather` y por lo tanto es una función nueva y se vuelve a dibujar todo de nuevo (volvemos a la situación inicial, como si no estuvieramos usando el `React.memo(...)`).

## SOLUCIÓN:  
El `setCounter()` se puede llamar con el valor del counter (como estábamos haciebdo hasta ahora):
```javascript
setCounter(counter + 1);
```

Pero también le podemos mandar un "call back" con el valor actual del counter (value) y a partir de ahí, sumarle uno a ese mismo valor:

```javascript
setCounter( (value) => value + 1 );
```

La función `setCounter` iternamente sabe que va a cojer el valor del state y le va a sumar uno.

Además, la función `incrementFather` está memorizada y no está cambiando, React lo sabe y la mantiene en el mismo espacio de memoria. Por lo tanto, cuando pasamos `incrementFather` como un argumento `<ShowIncrement increment={incrementFather} />` y el componente está memorizado, entonces no cambia el espacio de memoria.


---

<br />

# 🪝 132. useMemo

Ejemplo de uso:
```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

El hook [useMemo](https://es.reactjs.org/docs/hooks-reference.html#usememo) devuelve un valor memorizado.  

Pasa una función de “crear” y un arreglo de dependencias. useMemo solo volverá a calcular el valor memorizado cuando una de las dependencias haya cambiado. Esta optimización ayuda a evitar cálculos costosos en cada render.   

Nos ayuda a mejorar el proceso de tareas pesadas.   

Es como el `React.memo()` pero usando el hook `useMemo`  

Para entender el uso del hook `useMemo`, creamos una función fuera de la función principal (componente), para que solo se procese cuando sea necesario, no siempre que se llame a la función.

Es una buena práctica hacer una tarea o función fuera del componente, para evitar que se vuelva a asignar la función en memoria.   

```javascript
const memoizedValue = useMemo(() => heavyStuff( counter ), [] );
```
(Si dejamos el arreglo vacío, solo lo memoriza la primera vez)

```javascript
const memoizedValue = useMemo(() => heavyStuff( counter ), [counter] );
```
Si en el array le metemos el valor que queremos controlar, memorizará cada vez que cambie ese valor, en nuestro caso `counter`.

`useMemo` memoriza un valor. `memoizedValue` solo cambiará si las dependencias de `useMemo` cambian. 

---

<br />

# 🪝 131. Memo - Método de React
Memo es un método de React, no es un hook, pero nos sirve para poder ver más adelante el funcionamiento del hook que se encarga de hacer lo mismo que este método.  

Con este ejemplo vamos a ver que solo se tiene que dibujar el hijo si tiene cambios él mismo, NO si el padre tiene cambios.  

Se usa el `{ JSON.stringify(show) }` porque no se pueden mostrar en pantalla los valores boleanos.

Para alternar el valor de "show" con el `useEffect`: 
```javascript
onClick={ () => setShow( !show ) }
```

Para evitar que se dibuje el componente hijo si no ha sufrido cambios, usamos el Memo.

Esto solo es recomendado si el componente es muy grande o cuando hay un proceso pesado y solo se quiere volver a dibujar cuando cambien sus propiedades, no las del padre.  

Para un componente muy sencillo, es más rápido que no lo memorice, pero si hay funcionalidades internas relativamente pesadas y hay una depreciación a la hora de renderizar cada componente, es buena opción poder usar el `memo`

Añadiendo dentro de "memo()" el componente, solo se ejecutará si hay cambios en ese componente hijo, no cuando se aplican cambios al componente padre.

 NO se suele utiliza el `memo()` importado directamente de react:
```javascript
import { memo } from "react"
```

Normalmente se llama de la siguiente manera `React.memo()`, de esta manera es más claro a qué hace referencia el "memo".

Si estamos trabajando en un proyecto de CRA (Create React App) nos va a funcionar porque existe la referencia a React de forma global.

Si estamos trabajando en Vite, no nos va a funcionar (a no ser que lo hayamos referenciado de forma global). Para que nos funcione, lo podemos referenciar en el mismo componente:
```javascript
import React from "react"
```
---

<br />

# 🪝 130. useLayoutEffect

[`useLayoutEffect`](https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect) La firma es idéntica a `useEffect`, pero se dispara de forma síncrona después de todas las mutaciones de DOM. Use esto para leer el diseño del DOM y volver a renderizar de forma sincrónica. Las actualizaciones programadas dentro de `useLayoutEffect` se vaciarán sincrónicamente, antes de que el navegador tenga la oportunidad de pintar.  

(Se recomiendo el uso de `useEffect` siempre que sea posible)

Tiene la misma etructura el que `useEffect`
```javascript
useLayoutEffect(() => {
    first;

    return () => {
        second;
    };
}, [third]);
```


---

<br />

# 🪝 129. useRef - Primer uso

[`useRef`](https://es.reactjs.org/docs/hooks-reference.html#useref) es un hook que nos sirve para controlar el valor de una variable. Podemos cambiar ese valor, trabajar con él, pero no va a disparar ninguna re renderización cuando se aplica un cambio.

En este ejemplo estamos usando el `useRef` para hacer referencia a un input para evitar problemas en caso de tener más de uno, es una manera limpia y rápida de seleccionar un elemento del DOM sin tener que recurrir a:
```javascript
document.querySelector('input');
```

Ni siquiera usando una class o un ID para seleccionar el elemento nos aseguramos de estar seleccionando el correcto, ya que si usamos varios componentes podrían tener la misma nomenclatura repetida.


---

<br />

# 🪝 128. Optimizaciones al código anterior

Buenas prácticas:
1. Preparar un "archivo de barril" para reducir el número de lineas y mejorar la lectura del código. Podemos desestructurar la llamada a todos los hooks del directorio.

```javascript
// OLD
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

// NEW
import { useFetch, useCounter } from "../hooks";

```

2. Para una mejor lectura del condicionarl `isLoading`, pasamos el "loading" y la "quote" a componentes independientes.


```javascript
// OLD
{
    isLoading
        ? (
            <div className="alert alert-info text-center">
                Loading...
            </div>
        )

        : (
            <blockquote className="blockquote text-end">
                <p>{ quote }</p>
                <footer className="blockquote-footer">{ author }</footer>
            </blockquote>
        )
}

// NEW
{
    isLoading
        ? <LoadingQuote></LoadingQuote>
        : <Quote quote={quote} author={author} ></Quote>
}

```

---

<br />

# 🪝 127. Conectando ambos Hooks (EJERCICIO)
## Comunicación entre hooks

Ejercicio completo OK 
Importante, para imprimir variables dentro de una cadena:
- Entre ``
- Con `${counter}`
- `https://www.breakingbadapi.com/api/quotes/${counter}`

Mejora de Fernando:  
1. Añadir al botón `disabled={isLoading}`, de manera que mientras esté cargando esté deshabilitado el botón.   
2. Como por defecto la función "increment" ya lleva el valor "1" no es necesario pasarselo: `onClick={ () => increment() }`

---

<br />

# 🪝 126. useFetch + useCounter
## Comunicación entre hooks

### El condicional ternario:  
En este ejemplo se usa con varias líneas, no se recomienda usarlo si son demasiadas ya que dificulta la lectura del código, aquí un poco justo.

```javascript
{
    isLoading
        ? (
            <div className="aleert alert-info text-center">
                Loading...
            </div>
        )

        : (
            <blockquote className="blockquote text-end">
                <p className="mb-2">Hola mundo</p>
                <footer className="blockquote-footer">Fernando Herrera</footer>
            </blockquote>
        )

}
```

Para ver la `data` que recibimos podemos hacerlo directamente en consola:  
`console.log(data)` < Aquí la data en crudo, como lo devuelve la API, en este caso, es un 'array'    
 
`console.log({data})` < De esta manera lo pasamos a objeto: 


La API devuelve la data en un array `[]`, esto hace que se tenga que trabajar la data de la sieguiente manera:  

En determinado momento, antes de obtener la `data` su valor es 'null', pero una vez obtenemos la data, hay que trabajar con la primera posición `[0]`, ya que es un array.  

Por lo tanto, el uso de la data será este `{ data[0].quote }`:  

```
<blockquote className="blockquote text-end">
    <p>{ data[0].quote }</p>
    <footer className="blockquote-footer">{ data[0].author }</footer>
</blockquote>
```

### Desestructurando la data:
Como lo que devuelve es un array y en cierto momento la data es "null", javascript daría error al intentar desestructurar un valor "null".  

Si desestructuramos de la siguiente manera:  
```javascript
const { author, quote } = data;
```

Da error y peta la aplicación.

Para asegurarnos de que la 'data' tiene contenido hacemos el siguiente condicional `!!data && data[0]`:
```javascript
const { author, quote } = !!data && data[0];  //Hacemos condicional para evitar el "null" de la 'data'
```

Este condicional con doble negación (!!) se traduce en:  
SI la data tiene valor `!!data` entonces `&&` asigna el primer valor del array `data[0]`.  

Ahora sí ha quedado desestructurada la data y la podemos usar simplemente con `{ author }` y `{ quote }`.  

Si la API devolviera fuera un objeto, no necesitaríamos hacer todo esto.

---

<br />

# 🪝 125. useFetch - CustomHook
###### (Implementación de API [breakingbadapi](https://breakingbadapi.com))

## Comunicación entre hooks


Cada vez que cambie la url en el `useFetch` (es la variable que le pasamos al component), se disparará el `useEffect`, ya que tiene definida la url como dependencia:

```javascript
export const useFetch = ( url ) => {

    useEffect(() => {

    }, [url])
    
    return ;
}
```


Dentro del useEffect haremos la petición a Fetch API, que es la api que permite hacer peticiones http. Existen alternativas como Axios, que veremos más adelante.  

useEffect internamente puede tener tareas asíncronas, pero su callback no puede ser asincrono. useEffect espera una función pura NO una promesa, que es lo que se pasaría al hacerla "async". Espera una función pura que sirva para hacer una limpieza, NO espera una promesa.  

⛔ MAL: useEffect NO SE PUEDE USAR COMO FUNCIÓN ASÍNCRONA. De esta manera está devolviendo una promesa 
```javascript
    useEffect(async() => {

    }, [url])
```


---

<br />

# 🪝 124. Tarea - Implementar funcionalidad de Reset

La idea es añadir un botón de "reset" al formulario que vacíe los campos, es decirl, lo vuelva al estado inicial.

1 - En el form (FormWithCustomHooks.jsx) añadimos al botón el `onClick` que llame a la función. En este caso `onClick={ onResetForm }`

```
<button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
```

2 - Creamos la función en el Hook (useForm.js)

```javascript
const onResetForm = () => {
    setFormState( initialForm );
}
```

3 - Exportamos la función en el Hook (useForm.js)

```javascript
return {
    ...formState,       // Desestructuramos el formState (en este caso tiene el user, emai, pass) para que cree esas propiedades y las exponga
    formState,          // El Valor del formulario
    onInputChange,      // La función para cambiarlo
    onResetForm,        // La función para resetear el formulario
}
```

4 - En el form (FormWithCustomHooks.jsx) añadimos a la llamada al Hook `useForm` la función `onResetForm`

```javascript
const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
});
```

---

<br />

# 🪝 123. Formulario con custom Hook

(Repasar todo el proceso en los commits)

---

<br />

# 🪝 122. useEffect - Precauciones

En esta clase sí queda claro el uso de la limpieza (cleanup) en el `useEffect`


Si no hacemos el cleanup, aunque desaparezca el componente, el listener sigue ahí. Además, por cada vez que el componente se genera, se está creando un nuevo listener (el ejemplo de crear muchas veces el componente, minuto 2:15) 

Así controlamos el evento `mousemove`, pero a la que se active el useEffect al entrar al componente, SIEMPRE se disparará el "listener", es decir siempre printará en consola las coordenadas y por cada vez que vuelves a llamar al componente (en este caso, poniendo en el inout "Héctor2") el listener se activa una vez más.

```javascript
// De esta manera no podemos hacer referencia al espacio donde tenemos definida la función
window.addEventListener( 'mousemove', (event) => {
    console.log(event.x, event.y);
})

```

Para poder hacer el `cleanup` tenemos que definir la referencia a la función, al ESPACIO EN MEMORIA donde está definida la función.   

En nuestro caso la función definida es `onMouseMove`y ahora sí podemos hacer referencia con el `addEventListener` y en el return para el "cleanup" podemos desmontarla con `removeEventListener`

```javascript
const onMouseMove = ( {x, y} ) => {
    const coords = { x, y };
    console.log(coords);
}
window.addEventListener( 'mousemove', onMouseMove)
```

Ahora sí, en el `return` de la función, ya le podemos añadir el "cleanup":
```javascript
return () => {
    window.removeEventListener( 'mousemove', onMouseMove)
};
```

Es importante hacer el cleanup del componente ya que es un ERROR que se quiera acceder a el state de un componente que no existe. En versiones anteriores marcaba error o incluso llegaba a petar la aplicación, a partir de React 18, no da problemas, pero no se tiene que hacer.


Para imprimir objetos, hay que utilizar el `JSON.stringify` ya que no se pueden imprimir directamente, habría que pasarlo a un string o extraerlo de forma independiente `coords.y`, por ejemplo 

```javascript
JSON.stringify(coords)
```

---

<br />

# 🪝 120. useEffect unmount - Cleanup

Cuando llamamos el snippet del `useEffect` automáticamente genera 3 partes:

Tenemos el callback, o función de retorno formado por el cuerpo `first` y el "cleanup" (limpieza) que sería el return con el contenido `second`. 

A continuación encontramos la array con las dependencias `[third]`
```javascript
useEffect(() => {
    first;

    return () => {
        second;
    };
}, [third]);
```

### Cleanup `second`
Esta función la utilizaremos para limpiar, cancelar observables, cancelar algún tipo de subscripción o listener para evitar que siga consumiendo memoria. 


Este `if` solo muestro el component <Message /> si el `username` es exactamente igual a "Héctor2".

```javascript
{
    (username === 'Héctor2') && <Message />
}
```

Simplemente con esto, ya desaparece por completo todo el componente, no hace falta el Cleanup para hacerlo desaparecer. En este ejemplo, no es muy útil el cleanup, de hecho, no está haciendo nada, solo el console.log para saber que el componente se ha desmontado.  

Esto será útil cuando en el momento de desmontar un componente, tengamos que liberar espacio cancelando observables, algún tipo de subscripción o listener.



---

<br />

# 🪝 119. Dependencias del useEffect

`useEffect` está formado por dos argumentos:  
El primero es el callback, es decir, la función que se va a disparar.  
El segundo son las dependencias, que es un array en el cual marcamos las condiciones que van a hacer que se dispare el `useEffect`. 

Si llamamos el `useEffect` sin dependencias (no se recomienda poner un `useEffect` sin dependencias) este se disparará cada vez que el componente es redibujado (al cargarse o al hacer cambios en cualquier elemento que lo forma).  

Seguramente este no sea el comportamiento que queremos, ya que lo normal sería que el `useEffect` esté vinculado a una acción en concreto, no a todos los cambios del componente.  

> React recomienda tener UN EFECTO POR CADA ACCIÓN que se quiera ejecutar, es decir, en lugar de tener un solo efecto que haga muchas acciones, es mejor tener EFECTOS ESPECÍFICOS por cada efecto secundario o acción que se quiera ejecutar.


EJEMPLO [NO RECOMENDADO]: Se ejecuta SIEMPRE que se redibuja el componente, ya que no tiene dependencias.

```javascript
useEffect( () => {
    console.log('useEffect called!');
});
```

Si en las dependencias pasamos un array vacío, el `useEffect` solo se ejecutará la primera vez que se renderize el componente:

```javascript
useEffect( () => {
    console.log('useEffect called!');
}, []);
```

Si en las dependencias pasamos la referencia del formulario (`formState`) solo se ejecutará cuando haya cambios en el formulario (y la primera vez que se carga el componente):

EJEMPLO: Se ejecuta SOLO si hay cambios en el FORM.

```javascript
useEffect( () => {
    console.log('formState changed!');
}, [formState]);
```

Si en las dependencias pasamos la referencia del email dentro del formulario (`email`) solo se ejecutará cuando haya cambios en el email (y la primera vez que se carga el componente):

EJEMPLO: Se ejecuta SOLO si hay cambios en el EMAIL del formulario.

```javascript
useEffect( () => {
    console.log('email changed!');
}, [email]);
```
---

<br />

# 🪝 118. [useEffect](https://es.reactjs.org/docs/hooks-effect.html) - SimpleForm

useEffect es uno de los hooks más usados junto con useState.  

Antes de empezar con `useEffect`, necesitamos mantener el "estado", es decir, mantener la información del formulario.  

Hay más hooks que nos permiten mantener estados, pero hasta el momento, el que conocemos es `useState`.  

```javascript
const [formState, setFormState] = useState({
    username: 'Héctor',
    email: 'hector@gmail.com'
});
```

Desestructuramos el `formState`:  
```javascript
const { username, email } = formState;
```

De esta manera ya podemos llamar al valor en los inputs `value={ email }`:
```
<input
    type="email"
    className="form-control mt-2"
    placeholder="email@loquesea.com"
    name="email"
    value={ email }
/>
```

Ahora ya podemos ver el valor asignado en los inputs, pero no se pueden cambiar porque React "trabaja en una sola vía", quiere decir que si se hace un cambio en el state, se tiene que volver a dibujar, es decir, llamar a una función que vuelva a pasar por el state.  

Creamos una función que nos permita hacer cambios en los inputs:


```javascript
const onInputChange = ( event ) => {
    console.log(event);
}
```

```
<input
    type="email"
    className="form-control mt-2"
    placeholder="email@loquesea.com"
    name="email"
    value={ email }
    onChange={ onInputChange }
/>
```


### PROCESO DE OBTENCIÓN DE DATOS:

Hacemos console log dentro de la función, de manera que cada vez que cambie el input tocando cualquier tecla, se dispare la función `onChange={ onInputChange }`  

1 - `console.log(event)`
Así recibimos toda la información vinculada al evento. 
```javascript
const onInputChange = ( event ) => {
    console.log(event);
}
```
Podemos ver TODA la información.  


2 - `console.log(event.target)`
```javascript
const onInputChange = ( event ) => {
    console.log(event.target);
}
```
Con `event.target` recibimos el input completo en html.
```
<input type="email" class="form-control mt-2" placeholder="email@loquesea.com" name="email" value="hector@gmail.com">
```


3 - `console.log(event.target.value)`
```javascript
const onInputChange = ( event ) => {
    console.log(event.target.value);
}
```
Con `event.target.value` recibimos el valor del input con el cambio aplicado al valor inicial.
```
Héctor2
```

4 - `console.log(event.target.name)`
```javascript
const onInputChange = ( event ) => {
    console.log(event.target.name);
}
```
Con `event.target.name` recibimos el nombre del input que se está cambiando.
```
email
```

5 - Del `event`, desestructuramos el `target`
```javascript
const onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log({ name, value });
}
```
Recibimos el objeto con los dos valores indicados y m´s información del objeto:
```
{name: 'username', value: 'Héctor2'}.
```

Ahora ya tenemos la información que necesitamos (name, value) del input al que estamos aplicando cambios para poder aplicar el `setFormState`


### ASIGNAR EL VALOR AL INPUT:

En la función `onInputChange`, llamamos al `setFormState` para registrar el valor del input.  

Antes de nada, desestructuramos el `formState`, ya que podría tener muchos otros valores que no queremos perder, para eso usamos Spread Operator `...formState,`  

A continuación, usamos las "propiedades computadas el objeto" y hacemos referencia al "name" de la siguiente manera para asignarle el nuevo valor:  
`[ name ]: value`

Este es el resultado de la función

```javascript
const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        [ name ]: value
    });
}
```



---

<br />

# 🪝 117. Exponer métodos del Hook

## PARA CREAR FUNCIONES DENTRO DE UN HOOK Y PODERLAS REUTILIZAR: 
### Declarar la función dentro del hook (useCounter.js):

```javascript
const increment = () => {
    setCounter( counter + 1);
}
```

### Enviar la función desde el hook (useCounter.js):
Pasar el resultado de la función al `return`:  
```javascript
return {
    counter,
    increment,
}
```
(el `counter`ya se lo estábamos pasando)


### Recibir la función en el component (CounterWithCustomHook.jsx):
Desestructuramos el contenido que recibimos de `useCounter.js`, es necesario tener importado el hook `import { useCounter } from "../hooks/useCounter";`  
```javascript
const { counter, increment } = useCounter();
```
(el `counter`ya se lo estábamos recibiendo)

### Usar la función en el component (CounterWithCustomHook.jsx):
```javascript
onClick={ increment }
```

Una forma sencilla de controlar que el contador no llegue a valores negativos.  
```javascript
const decrement = () => {
    if ( counter === 0 ) return; // Aquí sale de la función.
    setCounter( counter - 1);
}
```

### Usar onClick con y sin argumentos:
Cuando hacemos `onClick`, estamos pasando el *evento del click* como **primer argumento**.  

#### VERSIÓN 1 SIN ARGUMENTO:
Si la función no tienen ningún argumento:  
```javascript
const increment = () => {
    setCounter( counter + 1);
}
```
Se puede hacer la llamada a la función dentro del onClick sin ningún problema:
```javascript
onClick={ increment }
```

#### VERSIÓN 2 CON ARGUMENTO:
La función dentro del onClick, en realidad lo que está haciendo es lo siguiente:
```javascript
onClick={ () => increment() }
```


Si la función tiene que recibir un argumento la declaramos así:  
```javascript
const increment = ( value = 1 ) => { // Si no se pasa el argumento "value", por defecto será "1"
    setCounter( counter + value );
}
```

Ahora sí podemos pasar el valor que va a incrementar:
```javascript
onClick={ () => increment(2) }
```



`[object Object]` es la representación `toString` de un objeto, es decir, deja de funcionar como `object` y pasa a ser un `string`



---


<br />

# 🪝 116. useCounter - CustomHook

La ventaja de crear un custom hook es que lo puedes reutilizar en toda la aplicación y no tener que repetir toda la lógica y "carpintería" para algo tan sencillo.  

Nuestros hooks los añadimos en la carpeta `hooks` y es un estandar que empiecen con 'use', en este caso `useCounter.js`.   

Un hook no es más que una simple función con un `return`que puede ser un objeto `return{}`, un array `return[]`, un boleano `return true`, puede ser lo que necesitemos que devuelva.  

Dependiendo de lo que devuelva, a la hora de usarlo habrá que definirlo como objeto:  
```javascript
const {} = useCounter();
```
O como array:
```javascript
const [] = useCounter();
```

En nuestro caso, lo hacemos como objeto, ya que la desestructuración ya que nos permite desestructurar exactamente lo que necesitamos por nombre y además es la práctica más habitual.  

Para aplicar la desestructuración al objeto:  
```javascript
const { counter } = useCounter();
```

Y poder usar el valor dentro del código:  
```javascript
{ counter } 
```

Normalmente los Customs Hooks están vinculado con hooks propios de React, en este caso el `useState`.

---

<br />

# 🪝 115. [useState](https://es.reactjs.org/docs/hooks-state.html)  [IMPORTANTE] ⭐

useState es el hook más sencillo.  

## useState con un valor:

Podemos inicializar el useState con un valor:  
```javascript
const [counter, setCounter] = useState(10)
```

Al que luego hacemos referencia de la siguiente manera:  
```javascript
{ counter }
```

Y que podemos manipular así:  
```javascript
onClick={ () => setCounter( counter + 1 ) }
```


Dicho esto, podemos inicializar useState con:
- **valor primitivo** (el ejemplo anterior)
- **array**
- **objecto**, 
- **la instancia de una clase**
- o lo que necesite el state...


## useState con un objeto:
```javascript
const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
})
```

Al que luego hacemos referencia de la siguiente manera:  
```javascript
{ counter.counter1 }
```

NO LO PODEMOS MANIPULAR ASÍ, ya que es un objeto y cambia el state de todos los valores del objeto:  
```javascript
onClick={ () => setCounter( counter.counter1 + 1 ) }
```

## useState con un objeto DESESTRUCTURADO:
```javascript
const [{counter1, counter2, counter3}, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
})
```

Al que luego hacemos referencia de la siguiente manera:  
```javascript
{ counter1 }
```

NO LO PODEMOS MANIPULAR ASÍ, ya que es un objeto y cambia el state de todos los valores del objeto:  
```javascript
onClick={ () => setCounter( counter1 + 1 ) }
```

Para ver el estado de los hooks, vamos a chrome, en la pestaña de React "Components" veremos que el estado del objeto al iniciar la aplicación es:  
```javascript
{counter1: 10, counter2: 20, counter3: 30}
```

Pero al hacer click en el botón el State pasa a ser `11`.  

> NOTA: Nada impide cambiar un estado dentro de un useState (pasar de objeto a numérico), trabajando con typeScrript, podríamos obligar a que no cambie de estado.

Para manipular el objeto con useState, hay que preservar los valores anteriores.  
Al llamar a `setCounter`, lo que estamos haciendo es establecer el nuevo valor del state.  

```javascript
onClick={ 
    () => setCounter( {
        counter1: counter1 + 1,
        counter2: counter2,
        counter3: counter3
    } )
}
```

Para simplificarlo:  
VERSIÓN 1:  
```javascript
const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
})
```

Como el valor és el mismo, no hace falta volver a asignarle el valor
```javascript
onClick={ 
    () => setCounter( {
        counter1: counter1 + 1,
        counter2, 
        counter3,
    } )
}
```

VERSIÓN 2:  
Con `state` y desestructurando el propio `state` para facilitar el uso de "Spread Operator", ("esparcir" las propiedades), lo que nos permite copiar rápidamente todo o parte de una array u objeto existente en otra array u objeto.

```javascript
const [ state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
})

const {counter1, counter2, counter3 } = state
```

Usamos `...` en "state" para recuperar el valor del resto de los valores del objeto y solo aplicamos el cambio al que queremos modificar.  
```javascript
onClick={ 
    () => setCounter( {
        ...state,
        counter1: counter1 + 1,
    } )
}
```


<br />

---
# 🪝 113. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Profundizar en el tema de los Hooks
- Crear otros customHooks
- useState
- useCounter - Personalizado
- useEffect y sus precauciones
- useRef
- useFetch - Personalizado + optimizaciones
- useLayoutEffect
- Memo
- useMemo
- useCallback

Estos son los Hooks relativamente simples, aún hay mas que explicaremos más adelante, pero en esta sección nos enfocaremos en estos trabajos y para qué nos pueden servir.  
Adicionalmente estaremos dejando las bases para lo que será una sección de pruebas sumamente interesante después.  

<br />

---

# 🆕 INICIO SECCIÓN 9: Profundizando Hooks - Generales

---

# 🏁 FIN SECCIÓN 8: Testing - Probando la aplicación de GifExpert


# 🔬 110. Pruebas de tarea (sobre GifExpert)

### TODO: Hacer las pruebas, por ejemplo:  
✅ Tomar un snapshot  
🔳 Escribir en input i enviar formulario y ver qué pasa  
🔳 Que pasa si se envía la misma cataegoria  
🔳 Que pasa si se envía una cataegoria diferente  

<br />

---

# 🔬 109. Pruebas sobre customHooks
En la versión 16 y 17 de React se utilizaba el [React Hooks Testing Library](https://react-hooks-testing-library.com).  

En la versión 18 no se recomienda utilizarlo, ya no funciona, pero se ha fusionado con React Testing Library (RTL), por lo tanto, los hooks están integrados en React Testing Library (RTL).  


Con los Hooks tenemos que evaluar:  
- Elementos de entrada
- Salida

Por lo general los Hooks usan sus propias funciones para cambiar el estado, pero en este caso, hacemos nosotros el cambio manualmente de `isLoading: true` a `isLoading: false`

Los Hooks solo pueden ser llamados dentro del cuerpo de un Functional Component.  

Aparentemente, se podría hacer de la siguiente manera:  

```javascript
const { images, isLoading } = useFetchGifs();
```

Pero no funciona porque los Hooks necesitan parte del ciclo de vida de los componentes de React, no se pueden evaluar de forma aislada.  

Para eso podemos usar la funcion `RenderHook` de React Testing Library (antes (React 16/17) se tenía que importar de "React Hooks Testing Library", pero ya está integrado en RTL).  

Creamos un Call Back (una función) en la que mandamos llamar el hook "useFetchGifs" pasándole la categoría 'APM'

```javascript
renderHook( ()=> useFetchGifs('APM') );
```

`renderHook` devuelve varias cosas, así que lo desestructuramos:
```javascript
const { result } = renderHook( () => useFetchGifs('APM') ); 
```
Obteniendo este objeto:  
`{ current: { images: [], isLoading: true } }`

Desestructuramos el resultado "result.current"  
```javascript
        const { images, isLoading } = result.current;   
```
Y ya podemos hacer los Aserts:  
```javascript
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
```


El segundo test, bastante denso, con un async/await e importando `waitFor`de RTL  

<br />

---
# 🔬 108. Hacer un mock completo de un Custom Hook
Hace un Mock completo de este path "../../src/hooks/useFetchGifs":  
```javascript
jest.mock('../../src/hooks/useFetchGifs');  
```
(Hay que importarlo previamente `import { useFetchGifs } from "../../src/hooks/useFetchGifs";`)

Una vez dentro del test, usamos `mockReturnValue`, una función de Jest para simular que se dispara la función:  
```javascript
useFetchGifs.mockReturnValue({      
    images: [],
    isLoading: true
});
```


<br />

---
# 🔬 107. Pruebas del componente GifGrid - Mock customHook

Este component trabaja con un Custom Hook, lo que hace un poco más complicado el testeo.  

Pero en este test solo nocs centramos en probar el GifGrid, el custom hook useFetchGifs se testeará a parte, para simplificar los tests.  

Tienen que ser tests unitarios, no es obligatorio comporbar todo lo que hay dentro del componente, solo el funcionamiento del componente en sí.

<br />

---

# 🔬 106. Jest Functions
Tenemos que evaluar el comportamiento de una función, en nuestro caso, que onNewCategory sea llamada con el valor que tenía la caja de texto.  

onNewCategory, es una función que se está enviando como argumento a "AddCategory" y además esa función es obligatoria, definida con propTypes como .isRequired  

La función cuando se está evaluando en el test es esta `()=> {}`  

¿Cómo evaluamos esa función? Hay que saber si ha sido llamada, con qué valor ha sido llamada, que se haya llamado una vez, etc  

Así definimos una función "Mock" con Jest (en testing llamamos "Mock" a una simulación).  

```javascript
const onNewCategory = jest.fn();
```

  

<br />

---


# 🔬 105. Simular un submit del formulario

Tenemos que hacer dos pruebas
1. El submit del form
2. El valor del input (si va vacío/si tiene datos)

NOTA:  
React testing Library no detecta el "form" si no le añadimos el `aria-label="form"`  


<br />

---

# 🔬 103. Pruebas en el helper getGifs

No nos vamos a detener a analizar cada parte del código de la función.  
Sí analizaremos el resultado de la función, pasando una categoría, tiene que devolver una respuesta concreta, pero no entramos a testear el `fetch`ni nada en concreto.

Si estamos evaluando el funcionamiento de una API externa, no podemos estar seguros de la respuesta que va a dar.  
Por ejemplo, no podemos hacer un console.log de lo que devuelve la función pasando por la api y compararlo ya que podrían añadir nuevos gifs.  

APUNTE:  
Si la función es asíncrona, el test también lo hacemos como "async" `test('Tiene que retornar un array de gifs', async() => {` y podemos usar el "await" al llamar la función `const gifs = await getGifs(category);`  

✕ TEST QUE NO NOS SIRVEN PARA CONFIRMAR EL FUNCIONAMIENTO DE LA FUNCIÓN:  
1. No sirve pillar la respuesta que nos da el `console.log(gifs)` y compararla con lo que devuelve el test, podrían haber cambios en la API
2. Si supieramos que SIEMPRE va a devolver un array de 20 elementos, si la categoría devuelve menos de 20 resultados, petaría, pero no querría decir que falla nuestra aplicación. Por lo tanto, `expect( gifs.length ).toBe( 20 );` no sería un buen test.


✓ TEST QUE SÍ NOS SIRVEN PARA CONFIRMAR EL FUNCIONAMIENTO DE LA FUNCIÓN:  
1. Para asegurar que por lo menos devuelva un elemento en el array `expect( gifs.length ).toBeGreaterThan( 0 );` (pero no nos aseguramos de que sea un array de gifs)
2. Para asegurar que devuelva un arreglo de gifs como mínimo con la estructura que tenemos marcada en la función (id, title, url)  
```javascript
expect( gifs[0] ).toEqual({
    id: expect.any( String ),
    title: expect.any( String ),
    url: expect.any( String ),
});
```
(Simplemente evaluamos que devuelvan "strings", no miramos que la url tenga "http" ni nada parecido)

<br />

---

# 🔬 102. Pruebas del componente - GifGridItem

`screen.debug();`  
Con screen.debug en el test, imprimimos la estructura completa de lo que estamos testeando, lo que permite ver cada elemento html  

Uso de `screen`  
Se recomienda desestructurar el objeto generado con 'screen', en este caso "screen.getByRole('img')"  
Para evitar repetir `screen.getByRole('img')` y tener que hacer referencia a cada atributo así `screen.getByRole('img').alt` o así `screen.getByRole('img').url`  
<br />

Lo desestructuramos  
```javascript
const { src, alt } = screen.getByRole('img'); // Aquí está el objeto desestructurado
```  

Para usarlo de la siguiente manera:  
```javascript
expect( src ).toBe( url );      // expect(screen.getByRole('img').src).toBe( url );
expect( alt ).toBe( title );    // expect(screen.getByRole('img').alt).toBe( title );
```  


<br />

---

# 🔬 100. Implementando PropTypes

Instalar las PropTypes (en termminal):  
`yarn add prop-types`
<br />



> ### TAREA:
> 1. Añadir PropTypes
>     - title obligatorio
>     - url obligatorio
> 
> 2. Evaluar el snapshot  


### 1 - Añadir PropTypes  
En el component `GifItem.jsx`, hacer el import de PropTypes:  
`import PropTypes from 'prop-types'` 

A continuación, en el component, definir las PropTypes:  
```javascript 
GifItem.propType = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
```

### 2 - Evaluar el snapshot  
En el test `GifItem.test.jsx`:

- Importar el component a testear
- Importar el `render` de `@testing-library/react`
- Declaración del grupo de pruebas referentes al component `<GifItem />`
- Declarar las variables a testear (`title`, `url`)
- Test del render al objeto `container`
- "Expect": `expect(container).toMatchSnapshot();`

```javascript 
// Contenido de "GifItem.test.jsx"
import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem />", () => {
    const title = 'el título';
    const url = 'http://www.google.com';

    test("Tiene que hacer match con el snapshot", () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
});
```

IMPORTANTE:  
Esta prueba no asegura que la imagen o el título estén correctamente colocados, solo asegura que las piezas del html están sintácticamente igual que cuando se generó. Es útil, pero no en componentes que cambian mucho

---

# 🔬 99. Configurar el ambiente de pruebas
Seguir los pasos indicados en el documento `vite-testing-config.md`.


# Instalación y configuracion de Jest + React Testing Library
## En proyectos de React + Vite

1. Instalaciones:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:
```
yarn add --dev whatwg-fetch
```

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel __babel.config.cjs__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.cjs__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```



# 🔬 98. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Seguir el camino de las pruebas
- Pruebas en componentes específicos
- Pruebas en componentes de forma individual
- Pruebas con customHooks
- Esperar cambios en un customHook
- Simular eventos en inputs y formularios
- Simular llamadas a funciones
- Evaluar si existen elementos en el componente

En esta sección seguiremos expandiendo todo lo que habíamos visto anteriormente en otras secciones de pruebas, pero ahora veremos más a detalle los temas y adicionalmente introduciremos nuevos conceptos y nuevos tipos de pruebas.

<br />

---

# 🔬 INICIO SECCIÓN 8: Testing - Probando la aplicación de GifExpert


---


# FIN SECCIÓN 7: Generando el build de producción y despliegues


# 95. Desplegando aplicación en Github Pages
# 96. Actualizar Github pages
Lo que tenemos en el repositiorio es un proyecto de Node.  
Para publicar en Github Pages:
- Hacer el `build` para que genere la carpeta `dist`
- Una vez hecha la carpeta, renombrarla a `docs`
- Subir el repositorio a GitHib
- Para que funcione en Github Pages hay que actualizar las rutas dentro del index.html de la carpeta docs para que lo haga de forma relativa a donde está

<br />

---

# 94. Subir a GitHub
> - [GitHub](https://github.com/): Plataforma de alojamiento de código para el control de versiones y la colaboración.


<br />

---
# 93. Preparación del proyecto - Github Pages
Arrancar git  

Terminal:  
`git init`

<br />

---

# 92. Desplegar en Netlify
Para desplegar aplicaciones sin BackEnd  
[Netlify](https://www.netlify.com/)

https://festivaldegifs.netlify.app


<br />

---

# 91. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Aprender cómo realizar backups a repositorios de Git
- Subir nuestro repositorio a GitHub
- Uso de Github Pages
- Desplegar nuestra aplicación de React
- Generar build de producción de nuestra aplicación

Aunque es una sección pequeña, les puede servir para desplegar infinidad de proyectos de React de forma gratuita, sin contar que tendrán respaldos de sus proyectos por si llegan a perder su trabajo que tenían localmente en su computadora.





<br />

---


# INICIO SECCIÓN 7: Generando el build de producción y despliegues


---


# FIN SECCIÓN 6: GifExpertApp - Aplicación

# 88. Archivos de barril
Los "Archivos de barril" sirven para unificar los compoents, o heplers, o hooks en un solo archivo encargado de exportar, de manera que en ua sola linea se pueden hacer todos los imports, como trabaja React:  

```javascript
import { useEffect, useState } from "react";
```
De manera que podemos pasar de esto:
```javascript
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
```

A esto:
```javascript
import { AddCategory, GifGrid } from "./components";
```

Si el archivo de barril se llama index.js, no hace falta especificar el nombre, ya que por defecto, si hasces una llamada a la carpeta sin definir el archivo, carga el index (como en todos los lenguajes de programación)




<br />

---
# 87. Mostrar mensaje de carga
VERSIÓN 1: Condicional ternario  

```javascript
isLoading
? (<h2>Cargando...</h2>)
: null
```

VERSIÓN 1.1: Condicional ternario (sin los paréntesis, también funcionaría) 

```javascript
isLoading
? <h2>Cargando...</h2>
: null
```

VERSIÓN 2: if corto con una sola condición.  
Si isLoading = true, ejecuta lo que hay después de "&&"  
Si isLoading = false, ya no continua y salta  
"&&" se conoce como "AND LÓGICO"  
```javascript
isLoading && (<h2>Cargando...</h2>)
```


<br />

---

# 86. Custom Hook - useFetchGifs (clase muy densa, repasar)

> Construir tus propios Hooks te permite extraer la lógica del componente en funciones reutilizables.

Los Hooks tienen que empezar siempre por "use", es un estandar de React.  

Un Hook no es más que una función que devuelve algo, en este ejemplo "useFetchGifs" devuelve un objeto.  

MÁS INFO:  
[Construyendo tus propios Hooks](https://es.reactjs.org/docs/hooks-custom.html)


<br />

---

# 85. className - Clases de css

VERSIÓN 1  
Desestructurando el objeto para sacar las props que necesitamos de manera independiente
```javascript
images.map( ({id, title, url}) => (
    <GifItem 
        key={id} 
        title={title}
        url={url}
    />
 ) ) 
```

VERSIÓN 2  
Pasando como props "image" para enviar todas las propiedasdes completas

```javascript
images.map( ( image ) => (
    <GifItem 
        key={image.id} 
        title={image.title}
        url={image.url}
    />
 ) ) 
```

VERSIÓN 3 ESPARCIR LAS PROPS  
Esparcir las "props", de esta manera el component recibe TODAS las properties
```javascript
images.map( ( image ) => (
    <GifItem 
        key={image.id} 
        { ...image }
    />
    ) ) 
```

<br />

---


# 84. Mostrar los títulos de las imágenes

### IMPORTANTE:  
useEffect no puede usar "async", tiene que retornar una función, no una promesa.  

```javascript
// ESTO NO ES CORRECTO:
useEffect ( async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
}, []);
```

```javascript
// CORRECTO VERSIÓN 1, con "then":
useEffect ( () => {
    getGifs(category)
    .then( newImages => setImages(newImages));
}, []);
```

```javascript
// CORRECTO VERSIÓN 2, con función asíncrona independiente:
const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
}

useEffect ( () => {
    getImages();
}, []);
```
Esta función SÍ puede ser asíncrona, podemos pasarle la promesa y luego llamar a esta función dentro del "useEffect" para que no se ejecute siempre, solo la primera vez que carga el componente  
<br />

### IMPORTANTE:  
Para hacer el bucle de los elementos, hay que partir del "map" que se genera con el `useState`:  
```javascript
const [images, setImages] = useState([]);
```

Por lo tanto, el "map" parte de "images" de manera que se usa asi:

```javascript
{
    images.map( ({id, title}) => ( 
        <li key={id}>{ title }</li>
    ) ) 
}
```

<br />

---

# 83. Demostración de producción rápido

Para generar el build de producción, simplemente hay que llamar al comando `yarn build`, que genera el bundel final, en la carpeta "dist" que sería el contenido a subir al hosting.

<br />

---

# 82. useEffect

Hay que solucionar dos problemas muy comunes cuando estamos empezando en React:  
1. ¿Por qué se está llamando dos veces?
2. ¿Por qué se está llamando cada vez que se hace algún cambio?  

React, cada vez que detecta un cambio, lo vuelve a ejecutar para redibujar, es decir, está volviendo a ejecutar el componente.  
  
Hay ciertas funciones especiales que pueden sobrevivir y mantener el estado.  
  
También hay funciones que le pueden decir a React que se ejecute solo una vez, y aunque hayan nuevos cambios, no se vuelve a ejecutar.  

### 1. Solución a ¿Por qué se está llamando dos veces?
Quitando el `<React.StrictMode>` del `main.jsx` solucionamos que se ejecute dos veces cada vez que hacemos una acción.

> NOTA:
> Se puede dejar el strict mode en modo DEV y PROD, ya que no tiene impacto cuando se lleva a producción con el `build`  
> https://reactjs.org/docs/strict-mode.html

### 2. Solución a ¿Por qué se está llamando cada vez que se hace algún cambio?
Usar el hook de React `useEffect`.  

`useEffect` sirve para disparar efectos secundarios, es decir, algo que queremos ejecutar cuando algo suceda, por ejemplo, cuando el 'counter' cambie, que se dispare un efecto o que se dispare solo cuando se renderice por primera vez el componente.  

El Hook useEffect está formado por dos partes:  
La primera la función que se ejecuta:  
```javascript
    () => {
        //Aquí va el código que queremos ejecutar en este "useEffect"
        getGifs(category); 
    }
```
La segunda se definen las dependencias dentro de un array.  
Si se dejan las dependencias vacías, significa que este hook (useEffect) solo se va a disparar la primera vez que se crea el componente.  
```javascript
useEffect( () => {
    //Aquí va el código que queremos ejecutar en este "useEffect"
    getGifs(category); 
}, [ ] ); // En el array se van a definir las dependencias. 
```


<br />

---

# 81. Fetch API - Obtener las imágenes deseadas

> NO LLAMAR NUNCA LA EJECUCIÓN DE UNA FUNCIÓN DENTRO DE UN FUNCTIONAL COMPOENT!  
> Cada vez que se llama al Functional Component `<GifGrid />` y se renderiza, vuelve a ejecutar la función `getGifs(category)`


PENDIENTE EN ESTA CLASE:  
Mover la llamada a la función `getGifs(category)` fuera del functional component para que NO se dispare cada vez que se llama al functional component.

---

# 80. GifGrid - Nuevo componente
Este componente mostrará cada grid independiente.

---

# 79. Validar que sean únicos los nombres

> IMPORTANTE: 
> No usar el index "i" del `.map()` en el "key" para solucionar el problema con el Unique Key que dispara React ya que ese valor lo usa React para saber cuando un elemento se eliminó.
> Si borramos el 0, la posición 0 sigue exsistiendo.
> TOTAL, que no se use la i del map para las unique keys. 

### MAL:
```javascript
categories.map( (category, i) => {
    return <li key={ i }> { category } </li>
} ) 
```

---

# 78. Emitir un evento al padre
## OBJETIVO: Mejora del componente AddCategory, ya que lo único que tiene que hacer es enviar el valor a insertar

```javascript
<AddCategory setCategories={ setCategories }/>
```

No está mal pasar la función ahí directamente, pero seríam mejor solo enviar el valor a insertar.

Pero mejor separarlo de manera que quede así:
```javascript
<AddCategory onNewCategory={ ( value ) => onAddCategory(value) }/>
```

En realidad podría ser así:
```javascript
<AddCategory onNewCategory={ onAddCategory }/>
```


> IMPORTANTE: 
> usar el prefijo "on" para eventos que disparen los botones, o lo que sea.
> En este caso `onAddCategory` 

<br />

---
# INICIO SECCIÓN 6: GifExpertApp - Aplicación
