import React, { useState, useRef } from 'react';

import { Popper, ClickAwayListener } from '@material-ui/core';

import { Ripple } from '../utils'

import classes from './Dropdown.module.sass'
import { Transition } from 'react-transition-group';

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
  opacity: 0,
}

const transitionStyles = {
    entering: { 
        transform: 'translateY(-10px)',
        opacity: 0
    },
    entered:  {
        transform: 'translateY(0)',
        opacity: 1
    },
    exiting: { 
        transform: 'translateY(0)',
        opacity: 1
    },
    exited:  {
        transform: 'translateY(-10px)',
        opacity: 0
    },
};

const Fade = (props) => (
  <Transition in={props.in} appear={true} timeout={300}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {props.children}
      </div>
    )}
  </Transition>
);
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
                <Popper open={isOpen} anchorEl={anchorRef.current} disablePortal={true} placement={props.placement} transition>
                    {({TransitionProps}) => (
                        <Fade {...TransitionProps}>
                            <div className={classes.container}>
                                {props.children}
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
        <Ripple className={classes.item}>
            <div className={classes.icon}></div>
            <div className={classes.text}>
                {props.children}
            </div>
        </Ripple>
    )
}