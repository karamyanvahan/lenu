import React from 'react';
import PropTypes from 'prop-types';

import { ButtonBase, Button, CircularProgress } from '@material-ui/core';

import './utils.sass'

// =================== Space ======================//

let spaceSize = {
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40
}

export function Space(props) {
    return <div style={{height: spaceSize[props.size]}}></div>
}

Space.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl'])
}

// =================== Ripple ======================//

export function Ripple(props) {
    return (
        <ButtonBase {...props} className="ripple">
            { props.children }
        </ButtonBase>
    )
}

// =================== Button ======================//

export function ButtonTransparent(props) {
    return (
        <Button {...props} className="ButtonTransparent">
            { props.children }
        </Button>
    )
}

// =================== Loader ======================//

export function Loader(props) {
    return (
        <div className="Loader">
            <CircularProgress color="inherit" />
        </div>
    )
}