import React from 'react';

import Menu from '../Menu'

import styles from './MenuList.module.sass'

function MenuList(props) {
    return (
        <div className={styles.MenuList}>
            {props.data.map(i => <Menu key={i.ID} id={i.ID} name={i.Name} backColor={props.backColor} textColor={props.textColor} />)}
        </div>
    )
}

export default MenuList;