import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormApp() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Descripción</Form.Label>
        <Form.Control type="text" placeholder="Ingrese texto" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default FormApp;