import React, { useState } from 'react';
import InputSide from './InputSide/InputSide';
import './Parser.css';
import ObjectArea from './TreeData/ObjectArea';

function Parser() {
    const [data, setData] = useState({});
    const sendDataToParser = (inputData) => {
        const json = inputData ? JSON.parse(inputData) : {};
        setData(json);
    }

    return <div className='parser'>
        <InputSide onProcessButtonClick={sendDataToParser}/>
        <ObjectArea value={data}/>
    </div>
}

export default Parser;
