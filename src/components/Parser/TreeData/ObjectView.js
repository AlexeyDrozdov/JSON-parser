import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { getPrintValue } from './helper';

function ObjectView(props) {
    const [closed, setClosed] = useState(true);
    const onIconClick = () => {
        setClosed(prevState => !prevState);
    }
    if (closed) {
        return (
            <div className='object'>
                <FontAwesomeIcon icon={faPlusSquare} onClick={onIconClick}/>
                {'{...}'}
            </div>);
    }
    
    return (
        <div className='object'>
            <FontAwesomeIcon icon={faMinusSquare} onClick={onIconClick}/>{'{'}
            <div className={'inner-data'}>
            {Object.entries(props.value).map(([key, value]) => {
                const printValue = getPrintValue(value);
                return (<div key={key}>
                    <span className='key'>{`"${key}"`}</span>{': '}
                    {printValue}
                </div>)
            })}
            </div>
            {'}'}
        </div>
    );
}

export default ObjectView;
