import React from 'react'

function ViewUsers({list, currentItems, handleEdit, handleDelete}) {
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-12">
            <table className="table table-bordered table-hover table-striped table-responsive caption-top text-center">
                <caption><h2>Users Data</h2></caption>

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
                        currentItems.length >  0 ?

                            currentItems.map((val,index)=>{
                            const {username,email,id} = val;
                            return(
                                <tr key={id}>
                                    <td>{index + 1}</td>
                                    <td>{username}</td>
                                    <td>{email}</td>
                                    <td>
                                        <button className="btn btn-outline-danger" onClick={()=> handleDelete(id)}>Delete</button>
                                        {' '}
                                        <button className="btn btn-outline-warning" onClick={()=> handleEdit(id)}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })

                        :

                        <tr>
                            <td colSpan={4}>Data not Found.</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
      </div>
    </>
  )
}

export default ViewUsers
