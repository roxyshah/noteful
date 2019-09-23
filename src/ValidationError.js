//defining an error boundary component
import React, { Fragment } from 'react';

export default function ValidationError(props) {
    if(props.message) {
        return (
            <Fragment className='error'>
                {props.message}
            </Fragment>
        );
    }
    return <></>
}