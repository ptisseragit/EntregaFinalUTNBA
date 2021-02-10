import React from 'react'
import { Toast,Image } from 'react-bootstrap';
import OkImage from '../resources/okay.png';
function Notification({exito, handleCloseToast}) {
    
        //PODRIA CONTAR CON varialbes a inicializar de acuerdo a un flag que me indique como hacerlo
        //alta baja modificacion (OPERACION) exito o no (COMO FUE L AOPERACION) y motrar el TOAST
        //de acuerdo a ello.

        return (

            //() => setShow(false)
            <Toast  show={exito} onClose={handleCloseToast} delay={5000} autohide>
            <Toast.Header>
              <Image src={OkImage} className="rounded mr-2" alt="" fluid style={{width:25, height:25}}/>
              <strong className="mr-auto">Operación Exitosa</strong>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body>Nuevo Heroe registrado !!!</Toast.Body>
          </Toast>
        
        );
      
}

export default Notification
