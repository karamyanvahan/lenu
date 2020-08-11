import React, {useState} from 'react';
import { connect } from 'react-redux';

import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

import {Loader, Ripple} from '../../components/utils'
import BackButton from '../../components/BackButton'
import MenuSectionList from '../../components/MenuSectionList';

import { fetchDetails } from '../../store/actions/locationDetails'

import * as utils from '../../utils'

import './Location.sass'
import Dropdown from '../../components/Dropdown';

function Location(props) {
    let id = props.match.params.id,
        data = props.data[id],
        content;
        
    const [isOpen, setIsOpen] = useState(false);
    
    if(!data) {
        props.getData(id);
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
        <div className="nav">
            <BackButton />
        </div>
    );

    const onOpen = () => setIsOpen(!isOpen)

    const header = (
        <Ripple className="header" style={headerStyle} onClick={onOpen}>
            <img className="logo" src={data.LogoUrl} />
            <Dropdown onClick={e => e.stopPropagation()} />
            <div className="space md"></div>
            <div className="name"><b>{data.Name}</b></div>
            <div className="space sm"></div>
            <div className={`desc light ${isOpen ? '' : 'clamp clamp-2'}`}>{data.Desc}</div>
            {isOpen && (
                <>
                    <div className="space sm"></div>
                    <div><b>{data.WorkingHours}</b></div>
                    <div className="space sm"></div>
                    <div>{data.Address}</div>
                    <a href={`tel:${data.MainPhone}`}>{data.MainPhone}</a>
                </>
            )}
        </Ripple>
    );

    content = <MenuSectionList data={data.Menus[0].Sections} backColor={data.BackColor} textColor={data.TextColor} />

    return (
        <div className="LocationPage">
            <div className="space md"></div>
            {nav}
            <div className="space md"></div>
            {header}
            <div className="openerContainer">
                <Ripple className="openButton">
                    <button type="button" effect="material" className="button mini" onClick={onOpen}>{isOpen ? <KeyboardArrowUp /> :<KeyboardArrowDown />}</button>
                </Ripple>
            </div>
            {content}
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.locationDetails
});

const mapDispatchToProps = dispatch => ({
    getData: id => dispatch(fetchDetails(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);