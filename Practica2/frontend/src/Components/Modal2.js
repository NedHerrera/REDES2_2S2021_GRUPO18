import React, { Component,  useState, useEffect } from "react";
import { Form, Modal, Button, Card, Container , Col, Row} from "react-bootstrap";
import axios  from 'axios';


export default class Modal2 extends Component {

    constructor(props){
        super(props)
        this.state = {
            reporte: '{}',
            servidor: ''
        }

        this.getData = this.getData.bind(this)
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        var self = this
        axios.get(`https://api.redes2grupo18.tk/api/get/reporte/${this.props.reporte.carnet}`)
        .then(function(response){

            self.setState({
                reporte : response.data.reportes[0],
                servidor: response.data.mensaje
            })
        
            
        })
        .catch(function(error){
            console.log(error)
        })
    }

    render() {
        return (
            <Modal
        {...this.props}
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
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label><Card.Title>Carnet</Card.Title></Form.Label>
                                        <Form.Control type="text"  value={this.state.reporte.carnet} disabled />
                                        <Form.Label><br /> <Card.Title>Nombre</Card.Title></Form.Label>
                                        <Form.Control type="text"  value={this.state.reporte.nombre} disabled />
                                        <Form.Label><br /> <Card.Title>Curso</Card.Title></Form.Label>
                                        <Form.Control type="text"  value={this.state.reporte.curso} disabled />
                                        <Form.Label><br /> <Card.Title>Cuerpo de reporte</Card.Title></Form.Label>
                                        <Form.Control as="textarea" value={this.state.reporte.cuerpo} disabled />
                                    </Form.Group>

                                </Form>
                            </Card.Body>
                            <Card.Footer>
                              <p> {this.state.servidor}</p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
        )
    }
}
