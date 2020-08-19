import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

import { Popper, ClickAwayListener } from '@material-ui/core';

import { Ripple } from '../utils'

import classes from './Dropdown.module.sass'
import Fade from '../transitions/Fade';

export function Dropdown(props) {
    let [isOpen, setIsOpen] = useState(false),
        anchorRef = useRef(null),
        [selection, setSelection] = useState({});

    useEffect(() => {
        if(props.value) {
            let selectedChild = props.children.find(c => c.props.value === props.value);
            onSelect(selectedChild)
        }
    }, [props.value])

    function onToggle() {
        if(props.children.length > 1)
            setIsOpen(!isOpen);
    }

    function onClickAway() {
        if(isOpen)
            close();
    }

    function onSelect(val) {
        close();
        let selection = select(val)
        if(props.onSelect) {
            props.onSelect(selection)
        }
    }

    function select(val) {
        let child = props.children.find(c => val === c.props.value) || props.children[0],
            selection = {value: child.props.value, text: child.props.label || child.props.children};

        setSelection(selection);
        return selection;
    }

    function close() {
        setIsOpen(false);
    }

    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <div className={classes.Dropdown + " Dropdown " + (props.className || "")} onClick={props.onClick}>
                <Ripple className={classes.dropdownButton}>
                    <button ref={anchorRef} type="button" className="button mini" onClick={onToggle}>{selection.text}</button>
                </Ripple>
                <Popper open={isOpen} anchorEl={anchorRef.current} disablePortal={true} placement={props.placement} transition>
                    {({TransitionProps}) => (
                        <Fade {...TransitionProps}>
                            <div className={classes.container}>
                                {React.Children.map(props.children, child => React.cloneElement(child, {onClick: () => onSelect(child.props.value)}))}
                            </div>
                        </Fade>
                    )}
                </Popper>
            </div>
        </ClickAwayListener>
    )
}

export function Item(props) {
    return (
        <Ripple className={classes.item} onClick={props.onClick}>
            <div className={classes.icon}></div>
            <div className={classes.text}>
                {props.children}
            </div>
        </Ripple>
    )
}