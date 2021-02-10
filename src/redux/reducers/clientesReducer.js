import {FETCH_REQUEST,FETCH_SUCCES,FETCH_ERROR, 
        POST_REQUEST,POST_SUCCES,POST_END_SUCCES,POST_ERROR,
        DELETE_REQUEST,DELETE_SUCCES,DELETE_END_SUCCES,DELETE_ERROR,
        PUT_REQUEST,PUT_SUCCES,PUT_END_SUCCES,PUT_ERROR
    } from '../actions/action-types';

const initialState = { 
      listaClientes : [],
      isFetching : false,
      errors : false,
      
      isPosting: false,
      isPostingSucces: false,

      isPuting: false,
      isPutingSucces: false,

      isDeleting: false,
      isDeletingSucces: false,

      errorMessage : ""      
};

function clienteReducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_REQUEST: {
            console.log("Reducer FETCH REQUEST .........");
            return ( {...state, isFetching : true } );
        }
        case FETCH_SUCCES : {
            console.log("Reducer FETCH SUCCES .........");
            console.log({...state});
            const obj={...state, isFetching : false, listaClientes : action.payload.data };
            console.log(obj);
            //debugger;
            return( {...state, isFetching : false, listaClientes : action.payload.data });
        }
        case FETCH_ERROR : {
            return( {...state, isFeching : false, errors : true, errorMessage : action.payload.error });
        }


        case POST_REQUEST: {
            console.log("Reducer POST REQUEST .........");
            return ( {...state, isPosting : true, isPostingSucces:false } );
        }
        case POST_SUCCES : {
            console.log("Reducer POST SUCCES .........");
            return( {...state, isPosting : false, isPostingSucces:true });
        }
        case POST_END_SUCCES : {
            console.log("Reducer POST END SUCCES *******");
            return( {...state, isPosting : false, isPostingSucces:false });
        }
        case POST_ERROR : {
            return( {...state, isPosting : false, isPostingSucces:false, errors : true, errorMessage : action.payload.error });
        }

        case PUT_REQUEST: {
            console.log("Reducer POST REQUEST .........");
            return ( {...state, isPuting : true, isPutingSucces:false } );
        }
        case PUT_SUCCES : {
            console.log("Reducer POST SUCCES .........");
            return( {...state, isPuting : false, isPutingSucces:true });
        }
        case PUT_END_SUCCES : {
            console.log("Reducer POST END SUCCES *******");
            return( {...state, isPuting : false, isPutingSucces:false });
        }
        case PUT_ERROR : {
            return( {...state, isPuting : false, isPutingSucces:false, errors : true, errorMessage : action.payload.error });
        }


        case DELETE_REQUEST: {
            console.log("Reducer POST REQUEST .........");
            return ( {...state, isDeleting : true, isDeletingSucces:false } );
        }
        case DELETE_SUCCES : {
            console.log("Reducer POST SUCCES .........");
            return( {...state, isDeleting : false, isDeletingSucces:true });
        }
        case DELETE_END_SUCCES : {
            console.log("Reducer POST END SUCCES *******");
            return( {...state, isDeleting : false, isDeletingSucces:false });
        }
        case DELETE_ERROR : {
            return( {...state, isDeleting : false, isDeletingSucces:false, errors : true, errorMessage : action.payload.error });
        }


        default:{
            return state;  
        }
          
      }
  }

export default clienteReducer;