import React from 'react';
import ArrayView from './ArrayView';
import ObjectView from './ObjectView';
import PrimitiveView from './PrimitiveView';

export function getPrintValue(value) {
    const isObject = value && typeof value === 'object';
    const isArray = value && Array.isArray(value);
    if (isArray) {
        return (<ArrayView value={value}/>);
    } else if (isObject) {
        return (<ObjectView value={value}/>);
    }
    return (<PrimitiveView value={value}/>);
}