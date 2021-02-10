import API from "../../common/Api";
import {DELETE_REQUEST,DELETE_SUCCES,DELETE_ERROR} from './action-types';
const axios = require("axios");

export const deleteData = (dispatch,url,persona) => {
    
    dispatch({type: DELETE_REQUEST});
    
    const eliminar = async () => {
        try {
          url=url+persona.id;
          const { data } = await API.delete(url);
          console.log("Vuelven datos del Delete .........");
          console.log(data);
          dispatch({
            type: DELETE_SUCCES, 
            payload:{data}
          });
        } 
        catch (error) {
          
            dispatch({
                type: DELETE_ERROR, 
                payload:{error}
              });
        }
      };
      eliminar();
}


export default deleteData;