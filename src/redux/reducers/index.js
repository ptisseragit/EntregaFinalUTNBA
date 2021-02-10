
import {combineReducers} from 'redux'; 
import logInOut from './logInOutReducer';
import clientesReducer from './clientesReducer';
export default combineReducers({
    logInOut,
    clientesReducer,
})

/*import { LOGIN, ADD_CLIENTE, MODIFY_CLIENTE, DELETE_CLIENTE, LISTAR_CLIENTE } from "../actions/action-types";

const initialState = { 
  user: { 
            id: 0,
            nombre: 'Jhon', 
            apellido: 'Doe', 
            usuario: '',
            password:'',
            estado:'' 
        },
    clientes:[{}]    
};

function rootReducer(state = initialState, action) {

    
    //if (action.type === LOGIN) {
    //    console.log("ACTION: " + action.type);
    //    console.log(action.payload);
    //    console.log(state.user);
    //    const nuevoUsuario={user:{...action.payload}};
        //return Object.assign({},nuevoUsuario);
    //    return{...state, user:{...action.payload}}
    //}

    
    switch (action.type) {
        case 'LOGIN': {
            return( {...state, user:{...action.payload}} );
        }
        case 'LOGOUT': {
            return( {...state, user:{ id: 0, nombre: 'Jhon', apellido: 'Doe', usuario: '', password:'', estado:'' }} );
        }
        default:{
            return state;  
        }
          
      }


    //return state;
  }

export default rootReducer;*/
