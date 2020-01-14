import React from 'react';

const Inner = (props) => {
    console.log('props');
    console.log(props.color);
    const color = props.color;
    console.log(color);
    return (
        <p style={{color: color}}>INNER</p>
        //<p >INNER</p>
    )
}

export default Inner;