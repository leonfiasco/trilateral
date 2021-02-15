import React from 'react';

import useApi from "../hooks/useApi";

function Main() {
    const [foreCast] = useApi();
    console.log(foreCast);
    return (
        <div className="main">
            
        </div>
    )
}

export default Main
