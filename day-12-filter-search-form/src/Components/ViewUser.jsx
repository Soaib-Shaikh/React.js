import React from 'react'

function ViewUser({users, handleSearch, handleDelete, handleEdit}) {
  return (
    <>
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <form action="" method="post">
                    <input type="search" name="search" onChange={handleSearch} id="search" placeholder='Search by Username or Email' className="form-control" />
                </form>
            </div>
        </div>

      <div className="row justify-content-center mt-5">
        <div className="col-12">
            <table className='table table-bordered table-hover table-striped table-responsive caption-top text-center'>
                <caption><h2>Users Data</h2></caption>

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
                            const {username,email,password,id} = val;
                            return(
                                <tr key={id}>
                                    <td>{index + 1}</td>
                                    <td>{username}</td>
                                    <td>{email}</td>
                                    <td>{password}</td>
                                    <td>
                                        <button type="button" 
                                            onClick={()=> handleDelete(id)} 
                                            className="btn btn-outline-danger">
                                            Delete
                                        </button>
                                            {" "}
                                        <button type="button"
                                            onClick={()=> handleEdit(id)}
                                            className="btn btn-outline-warning">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            )
                        })

                        :
                         <tr>
                            <td colSpan={5}>Data Not Found.</td>
                         </tr>
                    }
                </tbody>
            </table>
        </div>
      </div>
    </>
  )
}

export default ViewUser
