import React from 'react'
import { useState, useEffect } from 'react';
import { Form, Button, Container, Col, Row, Card } from 'react-bootstrap';
import axios from 'axios'

function Asistencia() {
    const [carnet, setCarnet] = useState('');
    const [nombre, setNombre] = useState('');
    const [evento, setEvento] = useState('');
    const [id_evento, setIdEvento] = useState('');
    const [imagen, setImagen] = useState('');
    

    var today  = new Date();
    let fecha = today.toLocaleDateString("es-ES").toString()


    const enviar = async() => { 
        console.log("ENTRA AQUI")
        const res = await axios.post(`https://api.redes2grupo18.tk/api/create/asistencia`, {
        //const res = await axios.post(`/api/create/reporte`, {    
            carnet:carnet,
            estudiante:nombre, 
            evento: evento, 
            idEvento: id_evento, 
            fecha:fecha,
            image: imagen
        } ).then(
            function (response) {
                console.log("ELEMENTO GUARDADO CORRECTAMENTE! :D")
                console.log(response);
            }
        );
    //     console.log("carnet: " + carnet);
    //     console.log("nombre: " + nombre);
    //     console.log("curso: " + curso);
    //     console.log("reporte: " + reporte);
    }

    /*useEffect( () => {
        console.log(carnet)
    }, [carnet] ) 

    useEffect( () => {
        console.log(nombre)
    }, [nombre] )*/



    const imprimir =() =>{
        console.log(imagen);

    }

    const readFile = (e)=> {
        var FR= new FileReader();
        
        FR.addEventListener("load", function(e) {
          document.getElementById("output").src  = e.target.result;
          setImagen(e.target.result);
          
        }); 
        FR.readAsDataURL( e.target.files[0] );
    }

    return (
        <div>
            <br /> 
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <Card border="secondary">
                            <Card.Header> <h2>Ingreso de Asistencia</h2> </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><Card.Title>Ingrese el carnet</Card.Title></Form.Label>
                                        <Form.Control type="text" placeholder="carnet" value={carnet} onChange={event => setCarnet(event.target.value)} />
                                        <Form.Label><br /> <Card.Title>Ingrese el nombre</Card.Title></Form.Label>
                                        <Form.Control type="text" placeholder="nombre" value={nombre} onChange={event => setNombre(event.target.value)} />
                                        <Form.Label><br /> <Card.Title>Ingrese el Evento</Card.Title></Form.Label>
                                        <Form.Control type="text" placeholder="evento" value={evento} onChange={event => setEvento(event.target.value)} />
                                        <Form.Label><br /> <Card.Title>Ingrese el Id del Evento</Card.Title></Form.Label>
                                        <Form.Control type="numeric" placeholder="id_evento" value={id_evento} onChange={event => setIdEvento(event.target.value)} />
                                        <Form.Label><br /> <Card.Title>Ingrese Imagen de Asistencia</Card.Title></Form.Label>
                                        <img src="https://www.logolynx.com/images/logolynx/2a/2a71ec307740510ce1e7300904131154.png" id="output" width='200' height='200' alt='Select a file' />
                                        <input 
                                            type="file" 
                                            id="img" 
                                            name="img" 
                                            accept="image/*"
                                            onChange={readFile}
                                             />
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

export default Asistencia
