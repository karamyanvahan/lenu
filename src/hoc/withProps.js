import React from 'react';

export default function withProps(Component, injectedProps) {
    return function(props) {
        return <Component {...injectedProps} {...props}></Component>
    }
}