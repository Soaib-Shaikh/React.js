import React from 'react'

function Viewusers({list, handleDelete, handleEdit }) {
  return (
    <div className='conntainer'>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="table-responsive">
            <table className='table text-center table-hover table-bordered table-striped caption-top'>
              <caption>
                <h2>View Users Data</h2>
              </caption>
              <thead>
                <tr>
                  <th>Sr.no</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  list.length > 0 ?
                  list.map((val,index)=>{
                    const {username, email, password, id} = val;
                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>{username}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>
                          <button type="button" onClick={()=> handleDelete(id)} className="btn btn-outline-danger">Delete</button>
                          {' '}
                          <button type="button" onClick={()=> handleEdit(id)} className="btn btn-outline-warning">Edit</button>
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
      </div>

    </div>
  )
}

export default Viewusers
