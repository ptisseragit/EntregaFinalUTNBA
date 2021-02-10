import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';


/*const Details = props => {
    const { username, email, city, phone } =
      (props.location && props.location.state) || {};*/

function Cliente(props) {
    //console.log(match);

    //console.log(props);
    //console.log(`AQUI EN CLIENTE --->${props}`);
    return (
        <>
            <Container>
                <Row className=" justify-content-center">
                    {/*<Card  bg={"dark"} text={"success"}>*/}
                    <Card>
                        <Card.Header text={"success"}>DATOS DEL CLIENTE</Card.Header>
                        <Card.Body>
                            <Card.Title>Nombre: {props.location.state.persona.nombre} {props.location.state.persona.apellido}</Card.Title>
                            <Card.Text style={{ color: '#015668' }}>DNI: {props.location.state.persona.dni}</Card.Text>
                            <Card.Text style={{ color: '#015668' }}>Fecha Nacimiento: {props.location.state.persona.fechaNac}</Card.Text>
                            <Card.Text style={{ color: '#015668' }}>Domicilio: {props.location.state.persona.domicilio}</Card.Text>
                            <Button variant="success" block><Link to={'/clientes'} style={{ color: 'white', textDecoration: 'none' }} className="p-5">Volver</Link></Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default Cliente
