import {Navbar, Nav, Container, } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link,  Redirect } from 'react-router-dom'
import IngresoReporte from './Components/IngresoReporte';
import ListaReporte from './Components/ListaReporte';
import Asistencia from './Components/Asistencia';
import ListaAsistenciaIdEvento from './Components/ListaAsistenciaIdEvento';

function App() {
  return (
    <Router>

<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >DTT USAC</Navbar.Brand>
    <Nav className="me-auto">
       <Link className="nav-link" to="/ingresoreporte">Ingreso de Reportes</Link>
       <Link className="nav-link" to="/listareporte">Listado Reportes</Link>
       <Link className="nav-link" to="/asistencia">Control de Asistencia</Link>
       <Link className="nav-link" to="/lista_asistencia">Lista de Asistencia</Link>
    </Nav>
    </Container>
  </Navbar>





    <Switch>
        <Redirect exact from="/" to="/ingresoreporte" />
        <Route path="/ingresoreporte">
            <IngresoReporte/>
        </Route>
        <Route path="/listareporte">
            <ListaReporte />
        </Route>
        <Route path="/asistencia">
            <Asistencia />
        </Route>
        <Route path="/lista_asistencia">
            <ListaAsistenciaIdEvento />
        </Route>
       


    </Switch>
</Router>
  );
}

export default App;
