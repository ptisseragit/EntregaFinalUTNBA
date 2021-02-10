import {LOGIN,LOGOUT} from '../actions/action-types';

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

function logInOutReducer(state = initialState, action) {

    switch (action.type) {
        case LOGIN : {

            /*if(){

            }else{


            }*/

            console.log('---> LOGIN' );
            console.log({...(state.logInOut)});
            console.log({...state});
            return ({...state, user:{...action.payload}});
            //return ({logInOut:{...state, user:{...action.payload}}});
            //console.log({...logInOut});
            //return( {...(state.logInOut), user:{...action.payload}} );
            //return( {...state,  logInOut:{user:{...action.payload}} }); //user:{...action.payload}} );
        }
        case LOGOUT : {
            return( {...state, user:{ id: 0, nombre: 'Jhon', apellido: 'Doe', usuario: '', password:'', estado:'' }} );
        }
        default:{
            return state;  
        }
          
      }
  }

export default logInOutReducer;