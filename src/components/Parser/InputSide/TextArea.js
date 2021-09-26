import React, { useState } from 'react';

function checkJson(text) {
    if (!text) {
        return true;
    }
    try {
        return !!JSON.parse(text);
    } catch {
        return false;
    }
}

function TextArea(props) {
    const [text, setText] = useState('');
    const inputChange = (e) => {
        const value = e.target.value;
        setText(value);
        const isValid = checkJson(value);
        props.validChange(isValid);
        if (isValid) {
            props.getValidText(value);
        }
    }
    return (
        <textarea 
            className='input-area'
            onChange={inputChange}
            value={text}
        />
    )
}

export default TextArea;
