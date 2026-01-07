import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice';


const Form = () => {

    const [todo, setTodo] = useState("")
    const [error, setError] = useState(false)
    const dispatch = useDispatch();
    const currentTodo = useSelector(state => state.todos.currentTodo)

    useEffect(()=>{
        if(currentTodo){
            setTodo(currentTodo.text)
        }
    },[currentTodo])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todo.trim() == '') {
            setError(true);
            return
        }

        if (currentTodo) {
            dispatch(updateTodo({ id: currentTodo.id, text: todo }))
        } else {
            dispatch(addTodo(todo))
        }

        setTodo('')
        setError(false)
    }

    return (
        <section className='mt-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <h2>Todo Application</h2>
                            <div className="mb-3">
                                <label htmlFor="text" className='form-label'>Todo</label>
                                <input type="text" name="text" 
                                    value={todo || ''} 
                                    onChange={(e) => {
                                    setTodo(e.target.value)
                                    setError(false)
                                    }} 
                                    id="text" 
                                    className={`form-control mb-2 ${error ? 'is-invalid' : ""}`} 
                                />
                                    {error && (
                                    <small className="text-danger">
                                        Todo is required
                                    </small>
                                    )}
                            </div>
                            <button type="submit" className='btn btn-outline-primary'>
                                { currentTodo ? 'Update Todo' : 'Add Todo'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form
