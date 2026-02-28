import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const HandleClickEvent = () => {
    alert("I clicked!");
  }

  // const [name, setName] = useState("arvaz@example.com");
  const [value, setValue] = useState({mispelled_email: "arvaz@example.com", phone: '0123456789'})


  const hoverRef = useRef();

  const HandleMouseOver = (e) => {
    hoverRef.current.style.backgroundColor = "red";
    hoverRef.current.textContent = "Click to reload";
  }

  function reload() {
    location.reload();
  }

  // const change = (e) => {
  //   setName(e.target.value);
  // }

  const change = (e) => {
    setValue({...value, [e.target.name]: e.target.value});
  }
  
  

  return (
    <>
      <button onClick={HandleClickEvent}>Click Me</button>
      <br /><br />
      <button ref={hoverRef} onMouseOver={HandleMouseOver} onClick={reload}>Hover Me</button>
      <br /><br /><br />
      <input type="text" name='email' value={value.email?value.email:"something@example.com"} onChange={change}/>
      <input type="number" name='phone' value={value.phone?value.phone: "0000000000"} onChange={change}/>
    </>
  )
}

export default App
