  import React, { useEffect, useState } from 'react'

  const App = () => {

    const [user,setUser] = useState({});
    const [userList, setUserList] = useState([]);
    const [editId,setEditId] = useState(0);
    const [error, setError] = useState({});
    const [success,setSuccess] = useState('');
    const [mount, setMount] = useState(false);

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("list"));
        setUserList(data);
        setMount(true);
    },[])

    useEffect(()=>{
        if(mount){
          localStorage.setItem('list',JSON.stringify(userList))
        }
    },[userList])

    const handleChange = (e) =>{
      const {name,value} = e.target;

      setUser({...user,[name]:value});
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      if(validate()){
        return
      }

      if(!editId){
         setUserList([...userList,{...user,id:Date.now()}]);
          setSuccess('User Added Successfully!')
      }else{
        let data = userList.map((val)=>{
            if(val.id == editId){
              return {...val, ...user}
            }
            return val;
        })
        setUserList(data);
        setEditId(null);
        setSuccess('User Update Successfully!')
      }
      setUser({});
      setError({});

      setTimeout(() => setSuccess(""),3000)
    }
   
    const handleDelete = (id) => {
      let data = userList.filter(val=> val.id != id);
      setUserList(data);
    }

    const handleEdit = (id) => {
      let editData = userList.find(val => val.id == id);
      setUser(editData);
      setEditId(id);
    }

    const validate = () => {
      let tempError = {};

      if(!user.username) tempError.username = 'Username is Required';
      if(!user.email) tempError.email = 'Email is Required';
      if(!user.phone) tempError.phone = 'Phone is Required';
      setError(tempError)

      return Object.keys(tempError).length != 0;
    }
    

    return (
      <>
        <div className="container">
          <div className="row justify-content-center mt-5" >
            <div className="col-md-6">
              <form action="" method="post" onSubmit={handleSubmit} className='shadow p-3 mb-5 border rounded-3'>
                <h2>Add User</h2>

                  {
                    success && (
                      <div className="alert alert-success">
                        <span>{success}</span>
                      </div>
                    )
                  }

                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username:</label>
                  <input type="text" name="username" className='form-control' onChange={handleChange}
                  value={user.username || ''} id="username"   />
                  {error.username ? <span className='text-danger'>{error.username}</span> : ''} 
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" name="email" className='form-control' onChange={handleChange}
                  value={user.email || ''} id="email" />
                  {error.email ? <span className='text-danger'>{error.email}</span> : ''}  
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number:</label>
                  <input type="number" name="phone" className='form-control' onChange={handleChange}
                  value={user.phone || ''} id="phone" />
                  {error.phone ? <span className='text-danger'>{error.phone}</span> : ''}   
                </div>

                <div className="text-center">
                  <button className="btn btn-outline-success w-50">Add User</button>
                </div>
              </form>
            </div>
          </div>

          <div className="row justify-content-center mt-5" >
            <div className="col-md-10">
              <h2 className='text-center'>User Data</h2>
                <table className="table border rounded-1 table-bordered table-striped table-hover table-responsive text-center">
                    <thead>
                      <tr>
                        <th>Sr.No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone-Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        userList.length > 0 ?
                        
                        userList.map((val,index)=>{
                           const {username,email,phone,id} = val;
                          return(
                            <>
                              <tr>
                                <td>{index + 1}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td className='d-flex justify-content-evenly'>
                                  <button className="btn btn-outline-danger" 
                                  onClick={()=>handleDelete(id)}>Delete</button>
                                  <button className="btn btn-outline-warning" 
                                  onClick={()=>handleEdit(id)}>Edit</button>
                                </td>
                              </tr>
                            </>
                          )
                        })

                        :

                        <tr>
                          <td colSpan={5}>Data not Found.</td>
                        </tr>
                      }
                    </tbody>
                </table>
            </div>
          </div>
        </div>

      </>
    )
  }

  export default App
