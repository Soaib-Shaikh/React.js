import React, { useRef, useState } from 'react'

const Uncontrolled = () => {
    const [user, setUser] = useState([])
    let usernameRef = useRef(null);
    let emailRef = useRef(null);
    let passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const pasword = passwordRef.current.value;

        const newUser = { username, email, pasword, id:Date.now() }

        setUser([...user, newUser])

    }
    console.log(user);


    return (
        <>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <h2 className='text-center'>Uncontrolled Components</h2>
                    <div className="col-md-6">
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <h3>Sign Up</h3>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" name='username' ref={usernameRef} id='username' className='form-control' />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name='email' ref={emailRef} id='email' className='form-control' />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name='password' ref={passwordRef} id='password' className='form-control' />
                            </div>

                            <button className="btn btn-outline-primary">Sign Up</button>
                        </form>


                        <h3 className='mt-5'>All Uncontrolled Users:</h3>
                        <pre>
                            {JSON.stringify(user, null,2)}
                        </pre>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Uncontrolled
