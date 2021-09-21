import React, { useState } from 'react';

function checkJson(text) {
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
        props.validChange(checkJson(value));
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
