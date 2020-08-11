import React, { useState, useRef } from 'react';

import { Popper, ClickAwayListener } from '@material-ui/core';

import { Ripple } from '../utils'

import './Dropdown.sass'

export default function Dropdown(props) {
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
                    <Ripple>
                        <button ref={anchorRef} type="button" className="button mini" onClick={onToggle}>a</button>
                    </Ripple>
                    <Popper open={isOpen} anchorEl={anchorRef.current} >
                        abc
                    </Popper>
            </div>
        </ClickAwayListener>
    )
}