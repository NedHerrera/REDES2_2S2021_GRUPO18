import { Form, Button } from 'react-bootstrap';

function ingresoReporte() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  );
}

export default ingresoReporte;
