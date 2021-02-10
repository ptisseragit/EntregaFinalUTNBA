import API from "../../common/Api";
import {FETCH_REQUEST,FETCH_SUCCES,FETCH_ERROR} from './action-types';
const axios = require("axios");

export const getData = (dispatch,url) => {
    
    dispatch({type: FETCH_REQUEST});
    
    const get = async () => {
        try {
          const { data } = await API.get(url);
          console.log("Vuelven datos .........");
          console.log(data);
          dispatch({
            type: FETCH_SUCCES, 
            payload:{data}
          });
        } 
        catch (error) {
          
            dispatch({
                type: FETCH_ERROR, 
                payload:{error}
              });
        }
      };
      get();
}


export default getData;