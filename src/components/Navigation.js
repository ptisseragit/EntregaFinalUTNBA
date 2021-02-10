import React, {useState,useEffect} from 'react'
import { Nav, Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';
import {connect} from 'react-redux';
import {FiLogOut} from 'react-icons/fi';
import {logOutApp} from '../redux/actions/actionsLogInOut';

function Navigation(props) {
    
   //const [errorValidation, setErrorValidation] = useState(false);
   // const [show, setShow] = props.state.id > 0 ? useState(true) : useState(false);
   
   const [show, setShow] = useState(false);
   
   useEffect(() => {
        if(props.state.logInOut.user.id > 0){
            setShow(true);
        }
        else{
            setShow(false);  
        }       
    }, [props.state.logInOut.user.id]);

    const handleLogOut = ()=>{
        props.dispatch(logOutApp());
    }
 
    return (

        <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" className="mb-3 color-nav">
            <Navbar.Brand href="#home" className="mr-5">SuperProject</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

            { show ?  
                <>
                <Nav className="mr-auto">
                    <Link to='/' className="link-text">Home</Link>
                    <Link to='/clientes' className="link-text">Clientes</Link>
                    <Link to='/about' className="link-text">About...</Link>
                </Nav>
                <Nav>
                   {/* <h6 className="text-light mt-2" >{props.state.nombre} - {props.state.apellido} </h6>
                   <Navbar.Brand className="mr-3">Usuario: {props.state.nombre} - {props.state.apellido}</Navbar.Brand>}
                   <Link to='/login' className="link-text">Salir</Link>*/}
                  <Link to='/'className="link-text"> {props.state.logInOut.user.nombre} {props.state.logInOut.user.apellido} </Link>
                  <Button variant="primary" onClick={handleLogOut}> <FiLogOut className="ml-2"/> Salir </Button>
                </Nav>
                </>
            :    
                <Nav className="ml-auto">
                   <Navbar.Brand className="mr-2">Usuario no registrado</Navbar.Brand>
                </Nav>
            }
            
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = (state) => {
    return {state};
}

export default  connect(mapStateToProps)(Navigation);

