import React, { useState } from 'react';

const Home = () => {
    const [number, setNumber] = useState(0);
    console.log("homepage")
    return <div>
        <p>Number: {number}</p>
        <button onClick={() => setNumber(number + 1)}>Next</button>
        <button onClick={() => setNumber(number - 1)}>Previos</button>
    </div>
}

export default Home