import React from 'react';
import './style.css';

export default function Loading() {

    return (
        <div className="loading-background">
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    )
} 