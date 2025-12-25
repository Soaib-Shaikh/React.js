import { useState } from "react";

const Name = () => {
    let data = ['Soaib','Shaikh','Tai','Sam'];
    const [name,setName] = useState("Almas");
    const handleNames = ()=>{
        setName(data[Math.floor(Math.random()*data.length)]);
    }
  return (
    <div>
      <h2 className="mx-5 mt-5">Name: {name}</h2>
      <button className="mx-5" onClick={handleNames}>Change</button>
    </div>
  )
}

export default Name