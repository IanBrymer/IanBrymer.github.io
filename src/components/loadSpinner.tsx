// LoadSpinner.js
import React from 'react';
import '../styles/LoadSpinner.css'; // Import your CSS for styling
import { helix } from 'ldrs'

helix.register()

// Default values shown


const LoadSpinner = () => {
    return (
        <div className="loader">
            <div style={{ display: 'grid' }}>
                <l-helix
                    size="100"
                    speed="3.5"
                    color="black"></l-helix>
                <h2 style={{ fontFamily: 'monospace' }}>Loading...</h2>
            </div>
        </div>
    );
};

export default LoadSpinner;
