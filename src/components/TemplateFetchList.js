import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData } from '../redux/actions/actionsGet';
import { Button, Table } from 'react-bootstrap';
import TemplateModalForm from './TemplateModalForm';
import { deleteData } from '../redux/actions/actionDelete';
import Loading from './Loading';
import Error from './Error';
import * as FaIcons from 'react-icons/fa';
import {DELETE_END_SUCCES} from '../redux/actions/action-types';

function TemplateFetchList(props) {

    const [show, setShow] = useState(false);
    const [personaSeleccionada, setPersonaSeleccioanda]=useState({id:"", nombre:"", apellido:"", dni:"", domicilio:"", fechaNac:"", estado:""});
 
    const [exito, setExito]=useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log('------- PROPS EN FetchList -------');
    console.log(props);

    useEffect(() => {
        if(exito){
            getData(props.dispatch, "/personas/");
            setExito(false);
        }
        if(props.state.clientesReducer.isDeletingSucces){
            getData(props.dispatch, "/personas/");
            props.dispatch({type: DELETE_END_SUCCES});
        }
        //getData(props.dispatch, "/personas/");
        //console.log("---> EN LISTADO");
        //console.log(props);
    }, [props.state.clientesReducer.isDeletingSucces,props.state.clientesReducer.isPostingSucces,props.state.clientesReducer.isPutingSucces]);

    /*const handleList = () => {
        console.log("PROPS EN LISTA");
        console.log(props);
        console.log("PROPS.isFectching:");
        console.log(props.state.clientesReducer.isFetching);
        console.log("PROPS.errors:");
        console.log(props.state.clientesReducer.errors);
    }*/

    const viewPersona = (persona)=>{
        const { id, nombre, apellido, dni, domicilio, fechaNac, estado } = persona;
        setPersonaSeleccioanda({id, nombre, apellido, dni, domicilio, fechaNac, estado});
        handleShow();
    }
      
    const deletePersona = (persona)=>{
        console.log("ID a Eliminar:" + persona.id);
        deleteData(props.dispatch, "/personas/",persona);
    }
    
    return (
    <>
    {/*<div>
            <Button type="button" className="btn btn-danger float-left" onClick={handleList}> Ver Estado</Button>
    </div>*/}

    <div>
        { props.state.clientesReducer.errors ? <Error message="Error al Contactar al Servidor"/> :null }

        {show ? <TemplateModalForm  show={show} handleClose={handleClose} personaSeleccionada={personaSeleccionada} setExito={setExito}/>  : null}

        { props.state.clientesReducer.isFetching ? <Loading/> : 
        
        <Table striped bordered hover size="sm" className="text-center">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {props.state.clientesReducer.listaClientes.map (persona => (
                <tr key={persona.id} >
                    <td><h6 className="small mt-3">{persona.nombre}</h6></td>
                    <td><h6 className="small mt-3">{persona.apellido}</h6></td>
                    <td><h6 className="small mt-3">{persona.estado}</h6></td>
                    <td>
                        <Button variant="primary" className="btn-sm mr-2" onClick={()=>viewPersona(persona)}> <FaIcons.FaEye/></Button>
                        {/*<Button variant="primary" className="btn-sm mr-2">  <Link to={{ pathname:`/clientes/${persona.id}`, state: {persona} }} style={{color:'white'}}> Hola </Link>   </Button>*/}
                        <Button variant="success" className="btn-sm" onClick={()=>deletePersona(persona)}> <FaIcons.FaTrash/>  </Button>
                    </td>
                </tr> 
                ))}
            </tbody>
        </Table>   
    }    

    </div>
    </>

    )
}

const mapStateToProps = (state) => {
    return { state };
}

export default connect(mapStateToProps)(TemplateFetchList);

//export default TemplateFetchList
