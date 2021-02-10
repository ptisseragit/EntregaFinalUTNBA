import React from 'react';
import { Alert } from 'react-bootstrap';
import TemplateHeadList from './TemplateHeadList';
import TemplateFetchList from './TemplateFetchList';

function TemplateList({detail}) {
    return (
        <Alert variant="light">
            <TemplateHeadList detail={detail}/>
            <hr />
            <TemplateFetchList detail={detail}/>
        </Alert>
    )
}

export default TemplateList
