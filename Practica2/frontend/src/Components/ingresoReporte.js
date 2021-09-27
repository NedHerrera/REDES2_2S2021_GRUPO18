import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function IngresoReporte() {

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
        console.log(carnet);
    }

    useEffect( () => {
        console.log(carnet)
    }, [carnet] ) 

    useEffect( () => {
        console.log(nombre)
    }, [nombre] )

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>carnet</Form.Label>
                <Form.Control type="text" placeholder="carnet" value={carnet} onChange={event => setCarnet(event.target.value)} />
                <Form.Label>nombre</Form.Label>
                <Form.Control type="text" placeholder="nombre" value={nombre} onChange={event => setNombre(event.target.value)} />
                <Form.Label>curso</Form.Label>
                <Form.Control type="text" placeholder="curso" value={curso} onChange={event => setCurso(event.target.value)} />
                <Form.Label>Cuerpo de reporte</Form.Label>
                <Form.Control type="text" placeholder="reporte" value={reporte} onChange={event => setReporte(event.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={ enviar }>
                Submit
            </Button>
        </Form>
    );
}

export default IngresoReporte;
