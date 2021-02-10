import API from "../../common/Api";
import {POST_REQUEST,POST_SUCCES,POST_ERROR} from './action-types';
const axios = require("axios");

export const postData = (dispatch,url,personaNueva) => {
    
    dispatch({type: POST_REQUEST});
    
    const post = async () => {
        try {
          const { data } = await API.post(url, personaNueva);
          console.log("Vuelven datos del Post .........");
          console.log(data);
          dispatch({
            type: POST_SUCCES, 
            payload:{data}
          });
        } 
        catch (error) {
          
            dispatch({
                type: POST_ERROR, 
                payload:{error}
              });
        }
      };
      post();
}


export default postData;

