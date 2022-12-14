import React from 'react';
import './styles.css';

export const App = () => {
    return (
        <div className="App">
            Hello World - {process.env.NODE_ENV} - {process.env.name}
            <img src="images/cat.png" alt="" width="200" height="300"/>
        </div>
    )
}
