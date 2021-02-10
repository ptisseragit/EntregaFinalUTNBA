import API from "../../common/Api";
import {PUT_REQUEST,PUT_SUCCES,PUT_ERROR} from './action-types';
const axios = require("axios");

export const putData = (dispatch,url,personaNueva) => {
    
    dispatch({type: PUT_REQUEST});
    
    const put = async () => {
        try {
          const { data } = await API.post(url, personaNueva);
          console.log("Vuelven datos del Put .........");
          console.log(data);
          dispatch({
            type: PUT_SUCCES, 
            payload:{data}
          });
        } 
        catch (error) {
          
            dispatch({
                type: PUT_ERROR, 
                payload:{error}
              });
        }
      };
      put();
}


export default putData;