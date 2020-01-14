import React, { useState } from 'react';
import Inner from './inner-comp.component';

const TestHook = () => {
    const [colors, setColors] = useState(['', '']);
    const [colors2, setColors2] = useState(['', '']);
    return (
        <div>
            <h2>Test hook</h2>
            <Inner color='red'/>
            {
                colors.map((value, index) => {
                    console.log(value);
                   return <Inner key={index} index={index} color={value}/>
                })
            }
            <button onClick={() => {
                setColors(['red', 'green']);
            }}>change color</button>
            {
                colors2.map((value, index) => {
                    return <p key={index} style={{color: value}}> COLOR 2</p>
                 })
            }
            <button onClick={() => {
                setColors2(['red', 'green']);
            }}>change color 2</button>
        </div>
    )
}

export default TestHook;