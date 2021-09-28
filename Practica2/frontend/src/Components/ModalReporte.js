import {Modal, Button} from 'react-bootstrap'



function ModalReportes(props) {
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
          <h4>{props.reporte}</h4>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default ModalReportes;
