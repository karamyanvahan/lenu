import React from 'react';
import { connect } from 'react-redux';

import { Loader } from '../utils'

import Location from '../Location'

import styles from './LocationList.module.sass'

function LocationList(props) {
    let content;

    if(props.loading) {
        content = <Loader />;
    } else if(props.data.length === 0) {
        content = <div className={`${styles.info} light`}><div>Nothing found</div></div>;
    } else {
        content = props.data.map(i => <Location key={i.ID} id={i.ID} backColor={i.BackColor} textColor={i.TextColor} desc={i.Desc} logo={i.LogoUrl} name={i.Name} />);
    }

    return (
        <div className={styles.LocationList}>
            {content}
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.locations.data,
    loading: state.locations.loading
});

export default connect(mapStateToProps)(LocationList);