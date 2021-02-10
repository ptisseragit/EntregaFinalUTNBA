import { useState, useEffect } from "react";
import API from "./Api";
import {logInApp} from '../redux/actions/actionsLogInOut';

const axios = require("axios");



const useGet = ({ url, initialState = [] }) => {

  const [data, setData] = useState(initialState);
  const [isFeching, setFeching] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const get = async () => {
      try {

        //const response = await axios.get(url); // prop : data
        const { data } = await API.get("/personas/");
        setData(data);
        //setData(response.data);
        //setStatus(response.status)
        setFeching(false);
        //console.log("URL ----> " + url);
        //const { myData } = await API.get("/personas/");
        //setData(myData);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    get();
  }, [url]);
  return [data, isFeching, error];
};


const Post = async (url, dataPost, setData, setStatus, dispatch) => {
  try {
    console.log("Posteando... " + url);
    console.log(dataPost);
    //const response=await axios.post(url, dataPost);
    const response = await API.post(url, dataPost);

    setStatus(204);
    if(response.status===200){
      console.log("Luego de Postear... " + url);
      console.log(response.data);
      setData(response.data);
      
      const { nombre, apellido, id, usuario, password, estado } = response.data;
      const userObject = {nombre, apellido, id, usuario, password, estado};
      console.log("CAMBIANDO ESTADO");
      //console.log(userData);
      //console.log(userObject);
      //console.log(props);
      dispatch(logInApp(userObject));
      setStatus(200);
      //return response.data;

    }

    return response.status;

    //CRISTIAN-04-01-2021   Antes de modificación para eliminar el botón de Set Estado en Login
    /*console.log("Luego de Postear... " + url);
    console.log(response.data);
    setData(response.data);
    return response.data;*/
  }
  catch (e) {
    console.error(e);
    //return null;
    setStatus(503);
    return 503;
  }
};


export {useGet, Post};


