import React from 'react'
import { Row,Col, Card, Table } from 'react-bootstrap';
import {AboutConceptos, AboutFileStructure} from '../setupFiles/AboutDetail';

function About() {
    return (
        <Card>
            <Card.Header as="h3" className='text-center'>Curso React UTN-BA</Card.Header>
            <Card.Body>
                <Card.Title>Proyecto Integrador</Card.Title>
                        
                    <h6>Profesor: Franco Di Leo</h6>
                    <h6>Alumno: Cristian Tissera</h6>

                    <Row>
                    <Col lg={6}>
                    
                        <Table striped bordered hover size="sm">
                            <thead className="text-center">
                                <tr>
                                    <th>Topico</th>
                                    <th>Archivo Ejemplo</th>
                                </tr>
                            </thead>
                            <tbody>

                            {AboutConceptos.map((item, index) => {
                                return(
                                    <tr key={index} >
                                    <td className="small mt-3">{item.topic}</td>
                                    <td className="small mt-3">{item.files}</td>
                                    </tr> 
                                );
                            })}

                            </tbody>
                        </Table>
                    </Col>
                    
                    <Col lg={6}>
                    <Table striped bordered hover size="sm">
                            <thead className="text-center">
                                <tr>
                                    <th>Carpeta</th>
                                    <th>Descripción</th>
                                </tr>
                            </thead>
                            <tbody>

                            {AboutFileStructure.map((item, index) => {
                                return(
                                    <tr key={index} >
                                    <td className="small mt-3">{item.folder}</td>
                                    <td className="small mt-3">{item.description}</td>
                                    </tr> 
                                );
                            })}

                            </tbody>
                        </Table>
                           
                    </Col>
                    </Row>
            </Card.Body>
        </Card>
    )
}

export default About
