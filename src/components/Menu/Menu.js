import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import { Ripple } from '../utils';
import * as utils from '../../utils';

import styles from './Menu.module.sass';

function Menu(props) {
    const inlineStyles = {
        backgroundColor: utils.lightenDarkenColor(utils.toHexColor(props.backColor)),
        color: utils.toHexColor(props.textColor)
    }
    
    return (
        <Link to={""+ props.id} className={styles.Menu} >
            <Ripple style={inlineStyles}>
                <b>{props.name[props.language]}</b>
            </Ripple>
        </Link>
    )
}

const mapStateToProps = state => ({
    language: state.locations.language
});

export default connect(mapStateToProps)(Menu);