import React from 'react';

import * as utils from '../../utils'

import styles from './MenuItem.module.sass'

function MenuItem(props) {
    let inlineStyles = {
        backgroundColor: utils.toHexColor(props.backColor),
        color: utils.toHexColor(props.textColor),
        //boxShadow: `inset 0 0 0 1px ${utils.toHexColor(props.textColor)}`
    }

    return (
        <div>{props.name.en}</div>
    )
}

export default MenuItem