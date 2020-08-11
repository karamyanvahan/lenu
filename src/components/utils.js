import React from 'react';

import { ButtonBase, Button, CircularProgress } from '@material-ui/core';

import './utils.sass'

// =================== Ripple ======================//

export function Ripple(props) {
    return (
        <ButtonBase component="div" {...props} className={`ripple ${props.className}`}>
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