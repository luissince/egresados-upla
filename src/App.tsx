import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Cargar from './view/cargar/Cargar';
import Inicio from './view/inicio/Inicio';
import NotFound from './view/pages/404/NotFound';
import Acceso from './view/acceso/Acceso';

function App() {

  const cargando = useSelector((state: RootState) => state.autenticacion.cargando);

  return (
    <>

      {
        cargando ?
          <Cargar />
          :
          <>
            <Switch>

              <Route
                path="/"
                exact={true}>
                <Redirect to={"/acceso"} />
              </Route>

              <Route
                path="/acceso"
                exact={true}
                render={(props) => <Acceso {...props} />}
              />

              <Route
                path="/inicio"
                render={(props) => <Inicio {...props} />}
              />

              {/* <Route
                path="/control"
                render={(props) => <Control {...props} />}
              /> */}

              <Route component={NotFound} />

            </Switch>
          </>
      }

    </>
  );

}

export default App
