
import React from 'react';
import { Spinner as SpinnerBase } from 'react-bootstrap';
import './style.css';

export const Spinner = () => {
    return (
        <div className="center spinner-wrap">
            <SpinnerBase animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </SpinnerBase>
        </div>
    )
}