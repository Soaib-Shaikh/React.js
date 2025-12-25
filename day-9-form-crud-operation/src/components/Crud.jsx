import React, { useState } from 'react'

function Crud() {

    const [user, setUser] = useState({});
    const [userList, setUserList] = useState([]);
    const [editId, setEditId] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!editId) {
            setUserList([...userList, { ...user, id: Date.now() }]);
            setSuccess('User Data Added Successfully!')
        } else {
            let data = userList.map((val) => {
                if (val.id == editId) {
                    return { ...val, ...user };
                }
                return val;
            })
            setUserList(data);
            setEditId(null);
            setSuccess('User Data Update Successfully!')
        }
        setUser({});
        setError({})

        setTimeout(() => setSuccess(""), 3000)
    }

    const handleDelete = (id) => {
        let data = userList.filter(val => val.id != id);
        setUserList(data);
    }

    const handleEdit = (id) => {
        let editData = userList.find(val => val.id == id);
        setUser(editData);
        setEditId(id);
    }


    return (
        <>

            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">

                        <form action="" method="post" className='border shadow p-3 mb-5 bg-body-tertiary rounded' onSubmit={handleSubmit}>
                            <h2>Add User</h2>
                            <div className="mb-3">
                                <label htmlFor="username" className='form-label'>Username:</label>
                                <input type="text" id='username' onChange={handleChange} name='username' value={user.username || ''} className='form-control' />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className='form-label'>Email:</label>
                                <input type="email" id='email' onChange={handleChange} name='email' value={user.email || ''} className='form-control' />
                            </div>

                            <div className="text-center">
                                <button type='submit' className="btn btn-outline-primary w-50">Add User</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-md-10">
                        <table className='table text-center table-light table-bordered table-striped table-responssive table-hover caption-top'>
                            <caption>
                                <h2>User Data</h2>
                            </caption>
                            <thead>
                                <tr>
                                    <th>Sr. No</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userList.length > 0 ?
                                        userList.map((value, index) => {
                                            const { username, email, id } = value;
                                            return (
                                                <tr key={id}>
                                                    <td>{index + 1}</td>
                                                    <td>{username}</td>
                                                    <td>{email}</td>
                                                    <td>
                                                        <button onClick={() => handleEdit(id)} className="btn btn-sm btn-warning me-2">Edit</button>
                                                        <button onClick={() => handleDelete(id)} className="btn btn-sm btn-danger">Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        :

                                        <tr><td colSpan={4}><strong>Data Not found.</strong></td></tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Crud
