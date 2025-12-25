import { useEffect } from "react";

const Demo = () => {

    useEffect(() => {
        console.log("Component Mounted");

        return () => {
            console.log("Component Unmounted");
        }
    })

  return (
    <>
      <h2>Hello World!</h2>
    </>
  )
}

export default Demo