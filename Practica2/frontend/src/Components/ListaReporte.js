import React, { useState, useEffect } from "react";
import { Form, Button, Table, Container , Col, Row} from "react-bootstrap";
import ModalReportes from "./ModalReporte";
import axios  from 'axios';
import Modal2 from "./Modal2";

function ListaReporte() {
  const [reportes, setReportes] = useState([]);
  const [reporte_actual, setReporteActual] = useState({});
  const [carnet, setCarnet] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const getListaReportes = async () => {

    const res = await axios.get(`https://api.redes2grupo18.tk/api/get/reporte` ).then(
          function (response) {
              console.log(response.data);
            setReportes(response.data.reportes);

          }
      );
  };

  useEffect(() => {
    getListaReportes();
  },[]);

  const mostrarDescripcion = (reporte) =>{

    axios.get(`https://api.redes2grupo18.tk/api/get/reporte/id/${reporte.idReport}`)
    .then(function(response){
        setModalShow(true)
        console.log(response)
        setReporteActual({
          reporte: response.data.reportes[0],
          servidor: response.data.mensaje
        })
    })

    //console.log(reporte_actual)

  }

  const filtrarReportes = () =>{
    if(carnet == ''){
      getListaReportes()
    }else{
      axios.get(`https://api.redes2grupo18.tk/api/get/reporte/${carnet}`)
      .then(function(response){
          setReportes(response.data.reportes)
      }).catch(function(error){
        alert('no se encontro ningun reporte')
      })
    }
    
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
              <Button variant="primary" onClick={filtrarReportes}>Buscar</Button>
            </Col>
          </Row>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Carnet</th>
              <th>Nombre</th>
              <th>Proyecto/Curso</th>
              <th>Fecha</th>
              <th>Servidor</th>
            </tr>
          </thead>
          <tbody>
            {reportes.map((reporte) => (
              <tr>
                <th>{reporte.carnet}</th>
                <th>{reporte.nombre}</th>
                <th>{reporte.curso}</th>
                <th>{reporte.fecha}</th>
                <th>{reporte.servidor}</th>
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
