import React, { useState, useEffect } from "react";
import { Form, Button, Table, Container , Col, Row, Alert} from "react-bootstrap";
import axios  from 'axios';

function ListaAsistenciaIdEvento() {
    const [asistencias, setAsistencias] = useState([]);
    const [idEvento, setIdEvento] = useState("");
    const [carnet, setCarnet] = useState("");
    const [show, setShow] = React.useState(false);
    const [mensajeServidor, setMensajeServidor] = useState('');


    const getListaAsistencias = async () => {
  
      const res = await axios.get(`https://api.redes2grupo18.tk/api/get/asistencia` ).then(
            function (response) {
              setMensajeServidor(response.data.mensaje);
              setShow(true)
              setAsistencias(response.data.asistencias);
  
            }
        );
    };

    const getListaAsistenciasID = async () => {

      setShow(true)

      if(idEvento == ''){
        alert('ingrese un id de algun Evento');
        getListaAsistencias()
      }else{
      setShow(true)

        const res = await axios.get(`https://api.redes2grupo18.tk/api/get/asistencia/id/${idEvento}` ).then(
          function (response) {
            setMensajeServidor(response.data.mensaje);
            setShow(true)
            setAsistencias(response.data.asistencias);

          }
      );
      }
    };

    const getListaAsistenciasCarnet = async () => {

      if(carnet == ''){
        alert('ingrese un Carnet');
        getListaAsistencias()
      }else{
      

        const res = await axios.get(`https://api.redes2grupo18.tk/api/get/asistencia/${carnet}` ).then(
          function (response) {
            setMensajeServidor(response.data.mensaje);
            setShow(true)
            setAsistencias(response.data.asistencias);

          }
      );
      }
    };
  
    useEffect(() => {
        getListaAsistencias();
    },[]);
  
  
  
    const filtrarReportes = () =>{
      if(idEvento == ''){
        getListaAsistencias()
      }else{
        // axios.get(`/loadbalancer/api/get/reporte/${carnet}`)
        // .then(function(response){
        //     setReportes(response.data.reportes)
        // }).catch(function(error){
        //   alert('no se encontro ningun reporte')
        // })
      }
      
    }
  
    return (
      <div>
          <hr></hr>
        <Container>
          <Form>
            <Button variant="success" onClick={getListaAsistencias}>Reset</Button>
            {
              show?
              <Alert key={0} variant="success" onClose={()=>setShow(false)}dismissible>
                {mensajeServidor}
              </Alert>
              :
              <></>
            }
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Form.Control
                  placeholder="Ingrese ID del evento"
                  value={idEvento}
                  onChange={(event) => setIdEvento(event.target.value)}
                />
                
              </Col>
              <Col xs lg="2">
                <Button variant="primary" onClick={getListaAsistenciasID}>Buscar por Id</Button>

              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto">
              <Form.Control
                  placeholder="Ingrese ID del evento"
                  value={carnet}
                  onChange={(event) => setCarnet(event.target.value)}
                />

             
              </Col>
              <Col xs lg = "2">
              <Button variant="primary" onClick={getListaAsistenciasCarnet}>Buscar por Carnet</Button>

              </Col>
            </Row>
          </Form>
  
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id Evento</th>
                <th>Carnet</th>
                <th>Nombre</th>
                <th>Evento</th>
                <th>Fecha</th>
                <th>Imagen</th>
                <th>Servidor</th>
              </tr>
            </thead>
            <tbody>
              {asistencias.map((asistencia) => (
                <tr>
                  <th>{asistencia.idEvento}</th>
                  <th>{asistencia.carnet}</th>
                  <th>{asistencia.estudiante}</th>
                  <th>{asistencia.evento}</th>
                  <th>{asistencia.fecha}</th>
                  <th><img src={asistencia.imageURL} width='150' alt='some text' /></th>
                  <th>{asistencia.servidor}</th>
                </tr>
                
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
}

export default ListaAsistenciaIdEvento
