import React from 'react';
import { Link } from 'react-router-dom';

import { Ripple } from '../utils'
import * as utils from '../../utils'

import './Location.sass'

export default function Location(props) {
    let styles = {
        backgroundColor: utils.toHexColor(props.backColor),
        color: utils.toHexColor(props.textColor),
        boxShadow: `inset 0 0 0 1px ${utils.toHexColor(props.textColor)}`
    }

    return (
        <Link to={`/locations/${props.id}`}>
            <div className="Location">
                <Ripple style={styles}>
                    <div className="wrap">
                        <div className="cover">
                            <img src={props.logo} alt=""/>
                        </div>
                        <div className="space sm"></div>
                        <b className="name">{props.name}</b>
                        <div className="space sm"></div>
                        <p className="light">{props.desc}</p>
                    </div>
                </Ripple>
            </div>
        </Link>
    )
}