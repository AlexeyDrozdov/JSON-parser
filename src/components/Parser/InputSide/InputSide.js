import React, { useState } from 'react';
import TextArea from './TextArea';
import './InputSide.css';
import '../Parser.css';

function InputSide(props) {
    const [isValid, setIsValid] = useState(true);
    const [value, setValue] = useState('');

    const getValidText = (value) => setValue(value);
    const validChange = (value) => setIsValid(value);
    const onClick = () => {
        if (isValid && value) {
            props.onProcessButtonClick(value);
        }
    }
    return (
        <div className='parser-block'>
            <TextArea
                validChange={validChange}
                getValidText={getValidText}
            />
            <div className='input-info'>
                {!isValid && <span className='error'>
                    Error JSON
                </span>}
                <button onClick={onClick}>
                    Build tree data
                </button>
            </div>
        </div>
    );
}

export default InputSide;
