import React, {useState} from 'react';
import { connect } from 'react-redux';

import { KeyboardArrowDown, KeyboardArrowUp, KeyboardArrowLeft } from '@material-ui/icons';

import {Loader, Ripple} from '../../components/utils'

import { fetchDetails } from '../../store/actions/locationDetails'

import * as utils from '../../utils'

import './Location.sass'

function Location(props) {
    let id = props.match.params.id,
        data = props.data[id];
        
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
        <div class="nav">
            <Ripple>
                <button type="button" className="button mini">{<KeyboardArrowLeft />}</button>
            </Ripple>
        </div>
    );

    const header = (
        <div className="header" style={headerStyle}>
            <img className="logo" src={data.LogoUrl} />
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
        </div>
    );

    const onOpen = () => setIsOpen(!isOpen)

    return (
        <div className="LocationPage">
            <div className="space md"></div>
            {nav}
            <div className="space md"></div>
            {header}
            <div className="openerContainer">
                <Ripple className="openButton">
                    <button type="button" className="button mini" onClick={onOpen}>{isOpen ? <KeyboardArrowUp /> :<KeyboardArrowDown />}</button>
                </Ripple>
            </div>
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