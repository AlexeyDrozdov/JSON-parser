import React from 'react';

function PrimitiveView(props) {
    const className = props.value !== null ? `primitive-value-${typeof props.value}` : 'primitive-value-null';
    return (<span className={className}>{`${props.value}`}</span>);
}

export default PrimitiveView;
