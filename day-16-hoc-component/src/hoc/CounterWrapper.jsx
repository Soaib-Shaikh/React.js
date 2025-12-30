import React, { useState } from 'react'

const CounterWrapper = (WrapperComponent) => {
    return function enhanceComponent(props) {

        const [count, setCount] = useState(0);

        return (
            <WrapperComponent 
                {...props} 
                count={count}
                increament={()=> setCount(count + 1)} 
            />
        )
    }
}

export default CounterWrapper
