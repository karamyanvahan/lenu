import React from 'react';
import { connect } from 'react-redux';

import Location from '../Location'

function LocationList(props) {
    return (
        <div className="LocationList">
            {props.data.map(i => <Location key={i.ID} backColor={i.BackColor} textColor={i.TextColor} desc={i.Desc} logo={i.LogoUrl} name={i.Name} />)}
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.locations.data,
    isLoaded: state.locations.isLoaded
});

export default connect(mapStateToProps)(LocationList);