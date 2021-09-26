import React, { useState } from 'react';
import ObjectView from './ObjectView';
import './ObjectArea.css';
import '../Parser.css';

function ObjectArea(props) {
    return (
        <div className='parser-block'>
            <div className='area'>
                <ObjectView key='main' value={props.value}/>
            </div>
        </div>
    )
}

export default ObjectArea;
