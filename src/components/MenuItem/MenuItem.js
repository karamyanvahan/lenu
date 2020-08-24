import React from 'react';
import { connect } from 'react-redux';

import * as utils from '../../utils'

import styles from './MenuItem.module.sass'

function MenuItem(props) {
    let inlineStyles = {
        backgroundColor: utils.toHexColor(props.backColor),
        color: utils.toHexColor(props.textColor),
        //boxShadow: `inset 0 0 0 1px ${utils.toHexColor(props.textColor)}`
    }

    return (
        <div className={styles.MenuItem}>
            <div className={styles.name}>{props.name[props.language]}</div>
            <div className="space sm"></div>
            <div className="clamp clamp-3">{props.desc[props.language]}</div>
            <div className="space md"></div>
            <div>{props.price}</div>
        </div>
    )
}

const mapStateToProps = state => ({
    language: state.locations.language
});

export default connect(mapStateToProps)(MenuItem)