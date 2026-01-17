import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser } from '../features/user/userSlice';

const ViewUser = () => {

    const {users} = useSelector(state => state.users)
    const dispatch = useDispatch();

  return (
    <div className='container'>
        <div className="row justify-content-center mt-5">
            <div className="col-md-10">
                <table className='table table-bordered table-striped table-responsive table-hover caption-top text-center'>
                    <caption>
                        <h2>View Users Data</h2>
                    </caption>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.length > 0 ?
                                users.map((val,index)=>{
                                    const {id,username,email,password} = val;
                                    return(
                                        <tr key={id}>
                                            <td>{index + 1}</td>
                                            <td>{username}</td>
                                            <td>{email}</td>
                                            <td>{password}</td>
                                            <td>
                                                <button type="button" onClick={()=> dispatch(deleteUser(id))} className="btn btn-outline-danger me-3">Delete</button>
                                                <button type="button" onClick={()=> dispatch(editUser(id))} className="btn btn-outline-warning">Edit</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            :
                            <tr>
                                <td colSpan={5}>User Not Found.</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ViewUser
