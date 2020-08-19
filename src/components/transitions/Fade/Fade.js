import React from 'react';
import {Transition} from 'react-transition-group';

const duration = 125;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
  opacity: 0,
}

const transitionStyles = {
    entering: { 
        transform: 'translateY(0)',
        opacity: 1
    },
    entered:  {
        transform: 'translateY(0)',
        opacity: 1
    },
    exiting: { 
        transform: 'translateY(-10px)',
        opacity: 0
    },
    exited:  {
        transform: 'translateY(-10px)',
        opacity: 0
    }
};

export default function Fade(props) {
    return (
        <Transition in={props.in} appear timeout={duration}>
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
}