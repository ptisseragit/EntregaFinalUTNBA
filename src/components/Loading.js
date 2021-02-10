import React from 'react'
import { Spinner } from 'react-bootstrap';

function Loading() {
    return (
        <div className="d-flex justify-content-center m-5">
            <h4 className="mr-3">Cargando </h4>
            <Spinner animation="border" variant="danger"/> 
        </div>
    )
}

export default Loading
