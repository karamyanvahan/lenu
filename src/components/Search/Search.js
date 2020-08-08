import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Search as SearchIcon, Close } from '@material-ui/icons';

import { setSearchText, fetchListData } from '../../store/actions/location';

import { Ripple } from '../utils';

import './Search.sass'

function Search(props) {
    let [state, setState] = useState({
        input: ""
    })

    function onInput(e) {
        props.setSearchText(e.target.value);
    }

    function clear() {
        props.setSearchText('');
    }

    function onSearch() {
        props.getLocations(props.searchText);
        if(props.onSearch) {
            props.onSearch(props.locations);
        }
    }
    
    return (
        <div className="Search">
            <form onSubmit={(e) => e.preventDefault()}>
                <Ripple style={{borderRadius: '25px'}}>
                    <input type="text" value={props.searchText.input} placeholder="Search" onChange={onInput} />
                </Ripple>
                <SearchIcon className="search-icon"/>
                <div className={"controls" + (state.input.length ? "" : " hidden")}>
                    <button type="button" className="button mini" onClick={clear}><Close /></button>
                    <separator vertical=""></separator>
                    <button type="submit" className="button" onClick={onSearch}><text>Search</text></button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    searchText: state.locations.searchText,
    locations: state.locations.data
});

const mapDispatchToProps = dispatch => ({
    setSearchText: searchText => dispatch(setSearchText(searchText)),
    getLocations: searchText => dispatch(fetchListData(searchText))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)