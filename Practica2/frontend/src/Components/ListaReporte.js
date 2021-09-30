import React, { useState, useEffect } from "react";
import { Form, Button, Table, Container , Col, Row} from "react-bootstrap";
import ModalReportes from "./ModalReporte";

function ListaReporte() {
  const [reportes, setReportes] = useState([]);
  const [reporte_actual, setReporteActual] = useState('');
  const [carnet, setCarnet] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const getListaReportes = async () => {
    let reportes = ["rep1", "rep2", "rep3"];

    setReportes(reportes);
  };

  useEffect(() => {
    getListaReportes();
  });

  const mostrarDescripcion = (reporte) =>{
    setModalShow(true)
    setReporteActual(reporte)
  }

  return (
    <div>
        <hr></hr>
      <Container>
        <Form>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Form.Control
                placeholder="Ingrese Carnet"
                value={carnet}
                onChange={(event) => setCarnet(event.target.value)}
              />
            </Col>
            <Col xs lg="2">
              <Button variant="primary">Buscar</Button>
            </Col>
          </Row>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Carnet</th>
              <th>Nombre</th>
              <th>Proyecto</th>
              <th>Fecha</th>
              <th>Servidor</th>
            </tr>
          </thead>
          <tbody>
            {reportes.map((reporte) => (
              <tr>
                <th>{reporte}</th>
                <th>nombre</th>
                <th>Proyecto</th>
                <th>fecha</th>
                <th>serv</th>
                <th>
                    <Button onClick={()=> mostrarDescripcion(reporte)}> ver Descripcion </Button>
                </th>
              </tr>
              
            ))}
          </tbody>
        </Table>
      </Container>

       <ModalReportes
        show={modalShow}
        onHide={() => setModalShow(false)}
        reporte = {reporte_actual}
      />
    </div>
  );
}

export default ListaReporte;
