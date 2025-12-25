import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        let oldCount = JSON.parse(localStorage.getItem('count'));
        if(oldCount != 0){
            setCount(oldCount);
        }
    },[])

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count));
    }, [count]);

    const handleIncrement = () => {
        setCount((count) => count + 1);
    }

    const handleDecrement = () => {
        setCount((count) => count - 1);
    }


    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}

export default Counter
