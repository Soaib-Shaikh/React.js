import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Card from './components/Card';


function App() {

  const [title, setTitle] = useState('I am Full Stack Developer');
  const [name, setName] = useState('Soaib Shaikh');

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    <div className='container mt-4'>
    <Card  username={name} jobTitle={title}/>
    </div>

    </>
  )
}

export default App