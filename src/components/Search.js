import React, { useState } from 'react';

import { Search as SearchIcon, Close } from '@material-ui/icons';

import { Ripple } from './utils';

import './Search.sass'

export default function Search() {
    let [state, setState] = useState({
        input: ""
    })

    function onInput(e) {
        setState({ input: e.target.value })
    }

    function clear() {
        setState({ input: '' })
    }
    
    return (
        <div className="Search">
            <form>
                <Ripple style={{borderRadius: '25px'}}>
                    <input type="text" value={state.input} placeholder="Search" onChange={onInput} />
                </Ripple>
                <SearchIcon className="search-icon"/>
                <div className={"controls" + (state.input.length ? "" : " hidden")}>
                    <button type="button" className="button mini" onClick={clear}><Close /></button>
                    <separator vertical=""></separator>
                    <button type="submit" className="button"><text>Search</text></button>
                </div>
            </form>
        </div>
    )
}