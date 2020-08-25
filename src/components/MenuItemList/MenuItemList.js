import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

import {getMenuDetails} from '../../axios/menu';

import MenuItem from '../MenuItem';
import { Loader } from '../utils';

import styles from './MenuItemList.module.sass';

function MenuItemList(props) {
    const [data, setData] = useState();

    useEffect(() => {
        getMenuDetails(props.menuId).then((res) => setData(res.data));
    }, []);

    return (
        data ? 
        <div className={styles.MenuItemList}>
            {data.MenuItems.filter(i => i.MenuSectionID == props.match.params.sectionId).map(i => <MenuItem key={i.ID} data={i} uom={data.UOM} backColor={data.BackColor} textColor={data.TextColor} />)}
        </div> : 
        <div className={styles.MenuItemList}>
            <Loader />
        </div>
    )
}

MenuItemList.propTypes = {
    menuId: PropTypes.number
};

export default withRouter(MenuItemList);