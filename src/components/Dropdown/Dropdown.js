import React, { useState, useRef } from 'react';

import { Popper, ClickAwayListener } from '@material-ui/core';

import { Ripple } from '../utils'

import classes from './Dropdown.module.sass'

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
            <div className={classes.Dropdown + " Dropdown " + (props.className || "")} onClick={props.onClick}>
                <Ripple className={classes.dropdownButton}>
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