import React from 'react';
import { connect } from 'react-redux';

export default function LocationList(props) {
    return (
        <div className="Location">
            <img src={props.logo} alt=""/>
            <div className="name">{props.name}</div>
            <p className="light">{props.desc}</p>
        </div>
    )
}