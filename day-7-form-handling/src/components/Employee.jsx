import React, { useState, useEffect } from 'react'

const Employee = () => {

    const [emp, setEmp] = useState({});
    const [list, setList] = useState([]);


    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("employees"));
        if (savedData) {
            setList(savedData);
        }
    }, []);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setEmp({ ...emp, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newList = [...list, { ...emp, id: Date.now() }];
        setList(newList);

        localStorage.setItem("employees", JSON.stringify(newList));

        
    }


    return (
        <>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <form method='post' onSubmit={handleSubmit}>
                            <h2>Employee Data</h2>
                            <div className="mb-3">
                                <label htmlFor="employeeName" className="form-label">Employee Name</label>
                                <input type="text" value={emp.ename || ""} name='ename' onChange={handleInput} className="form-control" id="employeeName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="salary" className="form-label">Employee Salary</label>
                                <input type="number" value={emp.salary || ""} name='salary' onChange={handleInput} className="form-control" id="salary" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-12">
                        <table className='table text-center table-bordered table-stripped table-light caption-top'>
                            <caption>
                                <h2>Employee Details</h2>
                            </caption>

                            <thead>
                                <tr>
                                    <th>Sr. No</th>
                                    <th>Employee Name</th>
                                    <th>Employee Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    list.length !== 0 ?

                                        list.map((employee, index) => {
                                            const { id, ename, salary } = employee;
                                            return (
                                                <tr key={id}>
                                                    <td>{index + 1}</td>
                                                    <td>{ename}</td>
                                                    <td>{salary}</td>
                                                    <td className='d-flex justify-content-evenly'>
                                                        <button className="btn btn-danger">Delete</button>
                                                        <button className="btn btn-warning">Edit</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        :
                                        <tr>
                                            <td colSpan={4} className='text-center'>No Data Found</td>
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

export default Employee;