import React from 'react';

import { Ripple } from '../utils';
import * as utils from '../../utils'

import './MenuSection.sass'

function MenuSection(props) {
    const styles = {
        backgroundColor: utils.lightenDarkenColor(utils.toHexColor(props.backColor)),
        color: utils.toHexColor(props.textColor)
    }
    
    return (
        <div className="MenuSection">
            <Ripple style={styles}>
                <b>{props.name.en}</b>
            </Ripple>
        </div>
    )
}

export default MenuSection;