import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import { Card, Button, Alert, Jumbotron, Container } from 'react-bootstrap';
import '../css/Home.css';

function Home(props) {

   const [show, setShow] = useState(false);
   
   useEffect(() => {
        if(props.state.logInOut.user.id > 0){
            setShow(true);
        }
        else{
            setShow(false);  
        }       
    }, [props.state.logInOut.user.id]);

    return (
        <>
        {/*<Alert variant={"info"}>
            <h1> Home Page </h1>
            <Alert.Heading>Proyecto Integrador</Alert.Heading>
            { show ? <p>Logeado como: {props.state.logInOut.user.nombre} - {props.state.logInOut.user.id} </p> : <p> Usuario no registrado, por favor dirijase a la página de logIn</p> } 
            <hr/>
            <p>Curso: React</p>
            <p>Profesor: Franco Di Leo </p>
            <p>Estudiante: Cristian Tissera </p>    
        </Alert>*/}
  
  
        <Jumbotron id="JumboHome" className="jumbotron-fluid">
            <Container>
            <h1 className="display-4">Proyecto Integrador Curso React UTN-BA</h1>
            <p className="lead">Profesor: Franco Di Leo</p>
            <p className="lead">Alumno: Cristian Tissera</p>
            <hr className="my-4"/>
            { show ? <p>Bienvenido: {props.state.logInOut.user.nombre}  {props.state.logInOut.user.apellido} </p> : <><p> Usuario no registrado, por favor dirijase a la página de logIn</p> 
            <p className="lead">
            <Button type="button" className="btn btn-primary btn-lg m-3" onClick={()=>{window.location.href = "http://localhost:3000/login"}}> Log In </Button>
                
            </p> </>}
            </Container>
        </Jumbotron>
         
        </>

    )
}


const mapStateToProps = (state) => {
    return {state};
}

export default  connect(mapStateToProps)(Home);

//export default Home
