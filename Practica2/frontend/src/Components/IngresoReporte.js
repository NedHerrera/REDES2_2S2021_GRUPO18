import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Col, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function IngresoReporte() {
<<<<<<< Updated upstream:Practica2/frontend/src/Components/ingresoReporte.js
=======
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
>>>>>>> Stashed changes:Practica2/frontend/src/Components/IngresoReporte.js

    const [carnet, setCarnet] = useState('');
    const [nombre, setNombre] = useState('');
    const [curso, setCurso] = useState('');
    const [reporte, setReporte] = useState('');

    const enviar = async() => {
        /*const res = await axios.post(`url`, {
            carnet:carnet,
            nombre:nombre, 
            curso:curso, 
            fecha:"26/09/2021", 
            cuerpo:reporte
        } ).then(
            function (response) {
                console.log(response);
            }
        );*/
        console.log("carnet: " + carnet);
        console.log("nombre: " + nombre);
        console.log("curso: " + curso);
        console.log("reporte: " + reporte);
    }

    /*useEffect( () => {
        console.log(carnet)
    }, [carnet] ) 

    useEffect( () => {
        console.log(nombre)
    }, [nombre] )*/

    return (
        <div>
            <br /> 
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <Card border="secondary">
                            <Card.Header> <h2>Ingreso de reportes</h2> </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><Card.Title>Ingrese el carnet</Card.Title></Form.Label>
                                        <Form.Control type="text" placeholder="carnet" value={carnet} onChange={event => setCarnet(event.target.value)} />
                                        <Form.Label><br /> <Card.Title>Ingrese el nombre</Card.Title></Form.Label>
                                        <Form.Control type="text" placeholder="nombre" value={nombre} onChange={event => setNombre(event.target.value)} />
                                        <Form.Label><br /> <Card.Title>Ingrese el curso</Card.Title></Form.Label>
                                        <Form.Control type="text" placeholder="curso" value={curso} onChange={event => setCurso(event.target.value)} />
                                        <Form.Label><br /> <Card.Title>Ingrese el cuerpo de report</Card.Title></Form.Label>
                                        <Form.Control as="textarea" placeholder="reporte" rows={3} value={reporte} onChange={event => setReporte(event.target.value)} />
                                    </Form.Group>
                                    <Button variant="primary" onClick={ enviar }>
                                        Ingresar
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default IngresoReporte;
