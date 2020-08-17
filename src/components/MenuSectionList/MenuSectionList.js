import React from 'react';

import MenuSection from '../MenuSection'

import styles from './MenuSectionList.module.sass'

function MenuSectionList(props) {
    return (
        <div className={styles.MenuSectionList}>
            {props.data.map(i => <MenuSection key={i.ID} name={i.Name} backColor={props.backColor} textColor={props.textColor} />)}
        </div>
    )
}

export default MenuSectionList;