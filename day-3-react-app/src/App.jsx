import { useState } from "react";
import Name from "./components/Name";
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  const [name, setName] = useState("Sam");
  const handleName = ()=>{
    setName("Soaib");
  };
  return (
    <>
      <h2 className="mx-5 mt-5">Count: {count}</h2>
      <button className="mx-5" onClick={handleCount}>Increase</button>

      <h2 className="mx-5 mt-5">Name: {name}</h2>
      <button className="mx-5" onClick={handleName}>Change Name</button>

      <Name />
    </>
  );
};

export default App;