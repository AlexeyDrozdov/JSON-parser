import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { getPrintValue } from './helper';

function ArrayView(props) {
    const [closed, setClosed] = useState(true);
    const onIconClick = () => {
        setClosed(prevState => !prevState);
    }
    if (closed) {
        return (
            <div className='object'>
                <FontAwesomeIcon icon={faPlusSquare} onClick={onIconClick}/>
                {'[...]'}
            </div>);
    }
    
    return (
        <div className='object'>
            <FontAwesomeIcon icon={faMinusSquare} onClick={onIconClick}/>{'['}
            <div className='inner-data'>
                {Object.values(props.value).map((value) => {
                    const printValue = getPrintValue(value);
                    return (<div>
                        {printValue}
                    </div>)
                })}
            </div>
            {']'}
        </div>
    );
}

export default ArrayView;
