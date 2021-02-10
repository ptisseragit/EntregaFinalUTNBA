import React, { useState, useEffect } from 'react';
import { Card, Button, Jumbotron, Row, Form, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Post } from '../common/useHTTP';
import { logInApp } from '../redux/actions/actionsLogInOut';
import Error from '../components/Error';
import { Redirect } from "react-router-dom";
import '../css/Login.css';


function Login(props) {


    const [user, setUser] = useState({ nombre: "", apellido: "", id: 0, usuario: "", password: "", estado: "ACTIVO" });
    const [userData, setUserData] = useState({ nombre: "", apellido: "", id: 0, usuario: "", password: "", estado: "" });
    const [status, setStatus] = useState(100);

    const inputUsuario = React.createRef();
    const inputPassword = React.createRef();

    /*console.log('------- PROPS -------');
    console.log(props);*/


    useEffect(() => {
        console.log("---------EN USE EFFECT ----------");
        //console.log(userData);
        //actualizar el estado del store          
    }, [userData]);


    const handlerInput = (e) => {
        const { value: input } = e.target;
        setUser({
            ...user,
            [e.target.name]: input,
        });
    }

    /*Object destructuring
     var o = {p: 42, q: true};
     var {p, q} = o;
    
     console.log(p); // 42
     console.log(q); // true 
    
     // Assign new variable names
     var {p: foo, q: bar} = o;
    
     console.log(foo); // 42
     console.log(bar); // true*/

    /*Yes, const name = target.name; 
    is simply saving the event's target name to a variable called name. Similarly, 
    const { name } = target is equivalent.*/

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(user);

        console.log("USUARIO:" + inputUsuario.current.value + "    PASSWORD:" + inputPassword.current.value);
        Post('/login', user, setUserData, setStatus, props.dispatch);

        //const { nombre, apellido, dni, domicilio, fechaNac, estado,  } = personaSeleccionada;
        //const personaObject = {nombre, apellido, dni, domicilio, fechaNac, estado };
        //setPersona(personaObject);
        //post para traerme el usuario
        // actualizar el estado mediante una acción
    }

    const handleLogIn = () => {

        const { nombre, apellido, id, usuario, password, estado } = userData;
        const userObject = { nombre, apellido, id, usuario, password, estado };
        console.log("CAMBIANDO ESTADO");
        console.log(userData);
        console.log(userObject);
        //console.log(props);
        props.dispatch(logInApp(userObject));
        if (2 == 2) {

        }

    }

    return (

        <>
            {  status === 204 ? <Error message="Usuario o Contraseña Incorrecta" /> :
               status === 200 ? <Redirect to="/clientes" /> :
               status === 503 ? <Error message="Problemas Para Contactar al Servidor" /> : null
            }


            <Row className="justify-content-md-center mt-4">

                <Col>
                    <Jumbotron id="JumboLogin">
                        <h1 className="display-5">Bienvenido</h1>
                        <hr className=""/>
                        <p className="lead">Por Favor Ingrese Usuario y Contraseña </p>
                    
                        <Card id="" className="justify-content-md-center mt-5" style={{ width: '28rem' }} >
                        <Card.Header className="text-primary"><h3> Login </h3></Card.Header>
                        <Card.Body>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formHorizontalEmail">
                                    <Form.Label >
                                        Email
                                    </Form.Label>
                                    <Form.Control ref={inputUsuario} name="usuario" type="input" placeholder="Email" onChange={handlerInput} />
                                </Form.Group>

                                <Form.Group controlId="formHorizontalPassword">
                                    <Form.Label >
                                        Password
                                </Form.Label>
                                    <Form.Control ref={inputPassword} name="password" type="input" placeholder="Password" onChange={handlerInput} />
                                </Form.Group>
                                <Button type="submit" className="btn btn-success float-right" >Ingresar</Button>

                                {/*
                                    CRISTIAN 04-01-2021  RETIRAMOS EL BOTON DE LOGIN
                                    <Button type="button" className="btn btn-danger float-left" onClick={handleLogIn }> Set Estado</Button> */}
                            </Form>

                        </Card.Body>
                    </Card>
                    </Jumbotron>
                </Col>

     

            </Row>

        </>
    )
}


const mapStateToProps = (state) => {
    return { state };
}

export default connect(mapStateToProps)(Login);