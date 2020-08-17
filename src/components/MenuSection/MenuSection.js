import React from 'react';

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
                <b>{props.name.en}</b>
            </Ripple>
        </div>
    )
}

export default MenuSection;