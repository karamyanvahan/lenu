import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

import {Loader, Ripple} from '../../components/utils'
import BackButton from '../../components/BackButton'
import MenuList from '../../components/MenuList';
import MenuSectionList from '../../components/MenuSectionList';
import MenuItemList from '../../components/MenuItemList';

import { fetchDetails } from '../../store/actions/locationDetails';

import * as utils from '../../utils';

import styles from './Location.module.sass';
import { Dropdown, Item } from '../../components/Dropdown';
import { setLanguage } from '../../store/actions/location';

function Location(props) {
    let id = props.match.params.id,
        data = props.data[id],
        content;
        
    const [isOpen, setIsOpen] = useState(false);

    function onLanguageSelect(selection) {
        props.setLanguage(selection.value);
    }
    
    useEffect(() => {
        if(!data) {
            props.getData(id);
        }
    }, []);
    
    if(!data) {
        return (
            <div className="LocationPage">
                <Loader />
            </div>
        )
    }

    const headerStyle = {
        backgroundColor: utils.toHexColor(data.BackColor),
        color: utils.toHexColor(data.TextColor)
    }

    const nav = (
        <div className={styles.nav}>
            <BackButton />
        </div>
    );

    const onOpen = () => setIsOpen(!isOpen)

    const header = (
        <Ripple className={styles.header} style={headerStyle} onClick={onOpen}>
            <img className={styles.logo} src={data.LogoUrl} />
            {data.Languages &&
                <Dropdown value={data.Languages[0].Code} onSelect={onLanguageSelect} onClick={e => e.stopPropagation()} placement="bottom-end">
                    {data.Languages.map(language => <Item key={language.ID} value={language.Code} label={language.Code}>{language.Name}</Item>)}
                </Dropdown>}
            <div className="space md"></div>
            <div className={styles.name}><b>{data.Name}</b></div>
            <div className="space sm"></div>
            <div className={`desc light ${isOpen ? '' : 'clamp clamp-2'}`}>{data.Desc}</div>
            {isOpen && (
                <>
                    <div className="space sm"></div>
                    <div><b>{data.WorkingHours}</b></div>
                    <div className="space sm"></div>
                    <div>{data.Address}</div>
                    <a href={`tel:${data.MainPhone}`} onClick={e => e.stopPropagation()}>{data.MainPhone}</a>
                </>
            )}
        </Ripple>
    );
    
    // if(!data.Menus.length) {
    //     content = "";
    // } else if(data.Menus.length > 1) {
    //     content = 
    // } else {
    //     content = <MenuSectionList data={data.Menus[0].Sections} backColor={data.BackColor} textColor={data.TextColor} />
    // }

    return (
        <div className={styles.LocationPage}>
            <div className="space md"></div>
            {nav}
            <div className="space md"></div>
            {header}
            <div className={styles.openerContainer}>
                <Ripple className={styles.openButton}>
                    <button type="button" effect="material" className="button mini" onClick={onOpen}>{isOpen ? <KeyboardArrowUp /> :<KeyboardArrowDown />}</button>
                </Ripple>
            </div>
            <Switch>
                <Route path={props.match.url + "/:menuId/:sectionId"} render={({match}) => <MenuItemList menuId={match.params.menuId} backColor={data.BackColor} textColor={data.TextColor} />} />
                <Route path={props.match.url + "/:menuId"} render={({match}) => <MenuSectionList data={data.Menus.find(m => m.ID == match.params.menuId).Sections} backColor={data.BackColor} textColor={data.TextColor} />} />
                <Route path={props.match.url} render={() => data.Menus.length === 1 ? <Redirect to={`${props.match.url}/${data.Menus[0].ID}`} /> : <MenuList data={data.Menus} backColor={data.BackColor} textColor={data.TextColor} />} />
            </Switch>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.locationDetails,
    language: state.locations.language
});

const mapDispatchToProps = dispatch => ({
    getData: id => dispatch(fetchDetails(id)),
    setLanguage: value => dispatch(setLanguage(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);