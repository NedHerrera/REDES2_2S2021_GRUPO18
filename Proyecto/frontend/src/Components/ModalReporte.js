import React, { useState, useEffect, useRef } from "react";
import { Form, Modal, Button, Card, Container , Col, Row} from "react-bootstrap";
import axios  from 'axios';



function ModalReportes(props) {

    const [reporte, setReporte] = useState({});
    const [servidor, setServidor] = useState('');


    useEffect(()=>{
       setReporte(props.reporte.reporte)
       setServidor(props.reporte.servidor)
    })
  
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Descripcion de Reporte
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <Card border="secondary">
                            <Card.Body>
                                <Form>
                                    {
                                      reporte !== undefined?
                                      <Form.Group className="mb-3" controlId="formBasicEmail">
                                      <Form.Label><Card.Title>Carnet</Card.Title></Form.Label>
                                      <Form.Control type="text"  value={reporte.carnet} disabled />
                                      <Form.Label><br /> <Card.Title>Nombre</Card.Title></Form.Label>
                                      <Form.Control type="text"  value={reporte.nombre} disabled />
                                      <Form.Label><br /> <Card.Title>Curso</Card.Title></Form.Label>
                                      <Form.Control type="text"  value={reporte.curso} disabled />
                                      <Form.Label><br /> <Card.Title>Cuerpo de reporte</Card.Title></Form.Label>
                                      <Form.Control as="textarea" value={reporte.cuerpo} disabled />
                                      </Form.Group>
                                      :<></>
                                    }
                                  
                                   

                                </Form>
                            </Card.Body>
                            <Card.Footer>
                              {
                              servidor !== ''?
                              <p> {servidor}</p>
                              : <></>
                              }
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default ModalReportes;
