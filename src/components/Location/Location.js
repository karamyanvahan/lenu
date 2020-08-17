import React from 'react';
import { Link } from 'react-router-dom';

import { Ripple } from '../utils'
import * as utils from '../../utils'
import withProps from '../../hoc/withProps'

import styles from './Location.module.sass'

export default function Location(props) {
    let inlineStyles = {
        backgroundColor: utils.toHexColor(props.backColor),
        color: utils.toHexColor(props.textColor),
        //boxShadow: `inset 0 0 0 1px ${utils.toHexColor(props.textColor)}`
    }

    return (
        <Link to={`/locations/${props.id}`} className={styles.Location}>
            <Ripple style={inlineStyles}>
                <div className={styles.wrap}>
                    <div className={styles.cover}>
                        <img src={props.logo} alt=""/>
                    </div>
                    <div className="space sm"></div>
                    <b className={styles.name}>{props.name}</b>
                    <div className="space sm"></div>
                    <p className="light">{props.desc}</p>
                </div>
            </Ripple>
        </Link>
    )
}