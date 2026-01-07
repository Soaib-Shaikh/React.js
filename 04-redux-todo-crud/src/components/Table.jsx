import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, setCurrentTodo, toggleComplete, toggleEdit } from '../features/todo/todoSlice'

const Table = () => {

    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()

    return (
        <section className='py-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <table className='table table-bordered table-striped table-responsive table-hover caption-top text-center'>
                            <caption>
                                <h2>Todo List</h2>
                            </caption>
                            <thead>
                                <tr>
                                    <th>Sr. No</th>
                                    <th>Todo</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos.length > 0 ?
                                        todos.map((val, index) => {
                                            return (
                                                <tr key={val.id}>
                                                    <td>{index + 1}</td>
                                                    <td 
                                                        style={{
                                                        textDecoration: val.completed ? "line-through" : "none",
                                                        color: val.completed ? "gray" : "black"
                                                        }}>
                                                        {val.text}
                                                    </td>
                                                    <td>
                                                        {
                                                            !val.completed ? (
                                                                <>
                                                                    <button type='button' className='btn btn-outline-success btn-sm me-2'
                                                                        onClick={() => dispatch(toggleComplete(val.id))}
                                                                    >Complete
                                                                    </button>

                                                                    <button type="button" className="btn btn-outline-warning btn-sm"
                                                                        onClick={() => dispatch(setCurrentTodo(val))}
                                                                    >
                                                                        Update
                                                                    </button>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <button type="button" className="btn btn-outline-danger me-2 btn-sm"
                                                                        onClick={() => dispatch(removeTodo(val.id))}
                                                                    >
                                                                        Remove
                                                                    </button>

                                                                    <button type="button" className="btn btn-outline-secondary me-2 btn-sm"
                                                                        onClick={() => dispatch(toggleComplete(val.id))}
                                                                    >
                                                                        Uncomplete
                                                                    </button>
                                                                </>
                                                            )
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        :
                                        <tr>
                                            <td colSpan={3}>Todo Not Found.</td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Table
