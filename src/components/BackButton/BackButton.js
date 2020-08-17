import React from 'react';
import { withRouter } from 'react-router-dom';

import { KeyboardArrowLeft } from '@material-ui/icons';
import { Ripple } from '../utils'

import styles from './BackButton.module.sass'

function BackButton(props) {
    return (
        <div className={styles.BackButton}>
            <Ripple>
                <button type="button" className="button mini" onClick={() => props.history.goBack()}>{<KeyboardArrowLeft />}</button>
            </Ripple>
        </div>
    )
}

export default  withRouter(BackButton);