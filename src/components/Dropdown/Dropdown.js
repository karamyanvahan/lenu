import React, { useState, useRef } from 'react';

import { Popper, ClickAwayListener } from '@material-ui/core';

import { Ripple } from '../utils'

import './Dropdown.sass'

export function Dropdown(props) {
    let [isOpen, setIsOpen] = useState(false),
        anchorRef = useRef(null);

    function onToggle() {
        setIsOpen(!isOpen);
    }

    function onClickAway() {
        if(isOpen)
            setIsOpen(false)
    }

    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <div className="Dropdown" onClick={props.onClick}>
                <Ripple className="dropdown-button">
                    <button ref={anchorRef} type="button" className="button mini" onClick={onToggle}>a</button>
                </Ripple>
                <Popper open={isOpen} anchorEl={anchorRef.current} >
                    {props.children.map(i => <Ripple className="item">{i}</Ripple>)}
                </Popper>
            </div>
        </ClickAwayListener>
    )
}

export function Item(props) {
    return (
        <div>{props.children}</div>
    )
}