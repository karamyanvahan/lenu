import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import {getMenuDetails} from '../../axios/menu';

import MenuItem from '../MenuItem';
import { Loader } from '../utils';

import styles from './MenuItemList.module.sass';

function MenuItemList(props) {
    const [data, setData] = useState();

    if(!data) {
        getMenuDetails(props.menuId).then((res) => setData(res.data));
        return <div className={styles.MenuItemList}>
            <Loader />
        </div>
    }

    return (
        <div className={styles.MenuItemList}>
            {data.MenuItems.filter(i => i.MenuSectionID == props.match.params.sectionId).map(i => <MenuItem key={i.ID} name={i.Name} backColor={data.BackColor} textColor={data.TextColor} />)}
        </div>
    )
}

MenuItemList.propTypes = {
    menuId: PropTypes.number
  };

export default withRouter(MenuItemList);