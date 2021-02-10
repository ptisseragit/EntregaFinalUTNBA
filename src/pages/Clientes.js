import React from 'react';
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import TemplateList from '../components/TemplateList';
import {TemplateListDetail} from '../setupFiles/TemplateListDetail';

const detail = TemplateListDetail[0];

function Clientes(props) {
    return (
        <>
         { props.state.logInOut.user.id > 0 ?  <TemplateList detail = {detail}  /> : <Redirect to="/login" /> }
        </>
    )
}


const mapStateToProps = (state) => {
    return {state};
}

export default  connect(mapStateToProps)(Clientes);
//export default Clientes

