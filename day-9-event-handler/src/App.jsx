import { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import './App.css'


function App() {

  const [star, setStar] = useState(0);
  const [state, setState] = useState(0);

  const handleMouseEnter = (val) => {
    setStar(val);
  }

  const handleMouseLeave = () => {
    setStar(0);
  }

  const handleClick = (val) => {
    setState(0);
    if(val < star){
      setStar(0);
    }
  }


  return (
    <>
      {
        [1,2,3,4,5].map((val, index) => (
          <FaStar key={index}
            color={index < star || index < state ? 'gold' : 'gray'}
            className='star'
            onMouseEnter={() => handleMouseEnter(val) }
            onMouseLeave={() => handleMouseLeave() }
            onClick={() => handleClick(val) }

          />
        ))
      }
    </>
  )
}

export default App;
