import React, { useState, useEffect } from 'react'
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import Error from '../components/Error';
import Chart from '../common/Chart';
import { connect } from 'react-redux';
import { postData} from '../redux/actions/actionsPost';
import { putData} from '../redux/actions/actionsPut';
import Notification from '../common/Notification';
import {POST_END_SUCCES,PUT_END_SUCCES} from '../redux/actions/action-types';


//function TemplateModalForm({show, handleClose, personaSeleccionada = {id:0, nombre:"", apellido:"", dni:"", domicilio:"", fechaNac:"", estado:""}} ) {
    //function TemplateModalForm({props,ownProps}) {
    function TemplateModalForm(props){    
    console.log("PROPS ------------>");
    console.log(props);  
    console.log("STATE ------------>");
    console.log(props.state);  
    console.log("PERSONA SELECC ------------>");
    console.log(props.personaSeleccionada);    
    const [ver, setVer] = useState(props.show);
    const [persona, setPersona] = useState({ ...props.personaSeleccionada });
    const [errorValidation, setErrorValidation] = useState(false);


    useEffect(() => {

        if(props.state.clientesReducer.isPostingSucces){
            props.setExito(true);
            props.dispatch({type: POST_END_SUCCES});
            props.handleClose();
        }
        if(props.state.clientesReducer.isPutingSucces){
            props.setExito(true);
            props.dispatch({type: PUT_END_SUCCES});
            props.handleClose();
        }        
    }, [props.state.clientesReducer.isPostingSucces, props.state.clientesReducer.isPutingSucces]);    


    function handlerInput(e) {
        const { value: input } = e.target;
        setPersona({
            ...persona,
            [e.target.name]: input,
        });
    }

    const addPersona = (e)=>{
        e.preventDefault();
        console.log("Intentando registrar...");
        if (persona.nombre.trim === "" || persona.apellido === "") {
            setErrorValidation(true);
            return;
        }
        console.log(persona);
        /*console.log(ownProps);
        console.log(ownProps.props);
        console.log(props);*/
        postData(props.dispatch, "/personas/",persona);    

    }

    const modifyPersona = (e)=>{
        e.preventDefault();
        console.log("Intentando modificar...");
        if (persona.nombre.trim === "" || persona.apellido === "") {
            setErrorValidation(true);
            return;
        }
        console.log(persona);
        putData(props.dispatch, "/personas/",persona);    
    }

    return (
        <>
        
            <Modal animation={false} show={ver} onHide={props.handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Data del Heroe</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={addPersona} className="text-left">

                        <Row>
                            <Col md={6}> <label htmlFor="nombre">Nombre:</label> </Col>
                            <Col md={6}> <label htmlFor="apellido">Apellido:</label> </Col>
                        </Row>
                        <Form.Group as={Row}>
                            <Col md={6}>
                                <input className="form-control" placeholder="Nombre"
                                    type="text"
                                    value={persona.nombre || ""}
                                    name="nombre"
                                    onChange={handlerInput} />
                            </Col>
                            <Col md={6}>
                                <input className="form-control" placeholder="Apellido"
                                    type="text"
                                    value={persona.apellido}
                                    name="apellido"
                                    onChange={handlerInput} />
                            </Col>
                        </Form.Group>


                        <Row>
                            <Col md={6}> <label htmlFor="dni">Documento:</label> </Col>
                            <Col md={6}> <label htmlFor="fechaNac">Cumpleaños:</label> </Col>
                        </Row>
                        <Form.Group as={Row}>
                            <Col md={6}>
                                <input className="form-control" placeholder="Documento"
                                    type="text"
                                    value={persona.dni || ""}
                                    name="dni"
                                    onChange={handlerInput} />
                            </Col>
                            <Col md={6}>
                                <input className="form-control" placeholder="Fecha de Nacimiento"
                                    type="text"
                                    value={persona.fechaNac}
                                    name="fechaNac"
                                    onChange={handlerInput} />
                            </Col>
                        </Form.Group>

                        <Row>
                            <Col md={9}> <label htmlFor="domicilio">Guarida:</label> </Col>
                            <Col md={3}> <label htmlFor="estado">Estado:</label> </Col>
                        </Row>
                        <Form.Group as={Row}>
                            <Col md={9}>
                                <input className="form-control" placeholder="Guarida"
                                    type="text"
                                    value={persona.domicilio || ""}
                                    name="domicilio"
                                    onChange={handlerInput} />
                            </Col>
                            <Col md={3}>
                                <input className="form-control" placeholder="ACTIVO o INACTIVO"
                                    type="text"
                                    value={persona.estado}
                                    name="estado"
                                    onChange={handlerInput} />
                            </Col>
                        </Form.Group>

                        { props.personaSeleccionada.id === 0 ?  <button type="submit" className="btn btn-success btn-block" >Submit</button> : null }
                        { /*Object.keys(personaSeleccionada).length === 0 ?  <button type="submit" className="btn btn-success btn-block" >Submit</button> : null */}
                    
                    </Form>
                    {errorValidation ? <Error message="Campos Obligatorios" /> : null}

                    
                    <Modal.Title className="p-3">Habilidades del Heroe</Modal.Title>
                    { props.personaSeleccionada.id === 0  ? null : <Chart /> }
                    { /*Object.keys(personaSeleccionada).length === 0 ? null : <Chart personaSeleccionada={personaSeleccionada} /> */}  


              </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}> Close </Button>

                    { props.personaSeleccionada.id === 0  ? null:<Button variant="primary" onClick={modifyPersona}> Save Changes </Button>}
                    { /*Object.keys(personaSeleccionada).length === 0 ? null:<Button variant="primary" onClick={handleClose}> Save Changes </Button>*/}
                
                </Modal.Footer>

            </Modal>
        </>
    );
}

//export default TemplateModalForm

const mapStateToProps = (state) => {
    //console.log("EN MAP STATE TO PROPS ------->");
    //console.log(ownProps);
    //console.log(state);
    //const { show, handleClose, personaSeleccionada } = ownProps;
    return { state };
}

export default connect(mapStateToProps)(TemplateModalForm);

/*{personaSeleccionada.nombre.trim() == "" ? null : <Chart personaSeleccionada={personaSeleccionada} />}*/