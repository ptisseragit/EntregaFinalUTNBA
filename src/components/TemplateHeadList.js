import React,{ useState, useEffect} from 'react';
import { Button, Navbar, Form, FormControl } from 'react-bootstrap';
import * as IoIcons from 'react-icons/io';
import TemplateModalForm from './TemplateModalForm';
import Notification from '../common/Notification';
import { getData } from '../redux/actions/actionsGet';
import { connect } from 'react-redux';

const styles = {
    customButton: {
        backgroundColor: '#0B0C10',
        borderColor: '#45A293',
        color: '#45A293',
        borderRadius: '100px'
    }
};

const styles2 = {
    customButton: {
        backgroundColor: '#445277',
        color: 'white',
        ':hover': {
            backgroundColor: 'red',
            color: 'red'
        }
    }


};

function TemplateHeadList(props) {

    const [exito, setExito]=useState(false);

    const [personaSeleccionada, setPersonaSeleccioanda]=useState({id:0, nombre:"", apellido:"", dni:"", domicilio:"", fechaNac:"", estado:""});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    const handleCloseToast = () => setExito(false);
   
    useEffect(() => {
        
        if(exito){
            //getData(props.dispatch, "/personas/");
            console.log("RECARGAR LISTADOOOOOOO .....");
            getData(props.dispatch, "/personas/");
            //setExito(false);
        }
        //console.log("---> EN LISTADO");
        //console.log(props);
    }, [exito]);

    const showAddPersona = ()=>{
        handleShow();
    }

    return (
        <Navbar bg="light" variant="light">
                        
            { exito ? <Notification exito={exito} handleCloseToast={handleCloseToast}/> : null }

            {show ? <TemplateModalForm show={show} handleClose={handleClose} personaSeleccionada={personaSeleccionada} setExito={setExito}/>  : null}
            
            <Navbar.Brand ><h1 className="text-primary">{props.detail.title}</h1></Navbar.Brand>
           
            <Form inline className="ml-auto">
                <Form.Control as="select" className="mr-sm-2">
                    {
                        props.detail.tableHeads.map((item) => {
                            return (
                                <option key={item.id}> {item.head} </option>
                            );
                        })
                    }
                </Form.Control>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="primary" className="mr-2"> <IoIcons.IoMdSearch /> Buscar</Button>
                <Button variant="success" onClick={()=>showAddPersona()}> <IoIcons.IoMdAddCircleOutline /> Nuevo </Button>
                
            </Form>
        </Navbar>
    )
}

//export default (TemplateHeadList);
const mapStateToProps = (state) => {
    return { state };
}

export default connect(mapStateToProps)(TemplateHeadList);