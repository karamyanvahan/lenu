import React from 'react';
import {connect} from 'react-redux';

import { Ripple } from '../utils';
import * as utils from '../../utils'

import styles from './MenuSection.module.sass'

function MenuSection(props) {
    const inlineStyles = {
        backgroundColor: utils.lightenDarkenColor(utils.toHexColor(props.backColor)),
        color: utils.toHexColor(props.textColor)
    }
    
    return (
        <div className={styles.MenuSection}>
            <Ripple style={inlineStyles}>
                <b>{props.name[props.language]}</b>
            </Ripple>
        </div>
    )
}

const mapStateToProps = state => ({
    language: state.locations.language
});

export default connect(mapStateToProps)(MenuSection);