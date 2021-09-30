import {Navbar, Nav, Container, } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link,  Redirect } from 'react-router-dom'
import IngresoReporte from './Components/IngresoReporte';
import ListaReporte from './Components/ListaReporte';

function App() {
  return (
    <Router>

<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >DTT USAC</Navbar.Brand>
    <Nav className="me-auto">
       <Link className="nav-link" to="/ingresoreporte">Ingreso de Reportes</Link>
       <Link className="nav-link" to="/listareporte">Listado Reportes</Link>
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
       


    </Switch>
</Router>
  );
}

export default App;
