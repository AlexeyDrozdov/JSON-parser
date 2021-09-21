import React, { useState } from 'react';
import TextArea from './TextArea';
import './InputSide.css';

function InputSide() {
    const [isValid, setIsValid] = useState(true);
    return (
        <div className='input-side'>
            <TextArea
                validChange={(value)=>setIsValid(value)}
            />
            {!isValid && <span>
                Error JSON
            </span>}
            <button>
            Build tree data
            </button>
        </div>
    );
}

export default InputSide;
