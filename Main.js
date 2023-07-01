import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { } from './App.css'
// import axios from 'axios'
function Main() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
    })
    const { username, email, password, confirmpassword } = data
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    // const submitHandler = e => {
    //     e.preventDefault()
    //     axios.post('https://anydata-2ee4c-default-rtdb.firebaseio.com/register.json', data).then(() => alert("Uploaded To Firebase Successfully"))
    //     // deleteTodo(id){
    //     //     //make a delete request
    //     //     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //     //       .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
    //     //       .catch(err => console.log(err));
    //     //   },
    // }
    return (
        <div className='container'>
            <center className='login'>
                <form>
                    <h2>Login</h2>
                    <input className='inputs' placeholder='enter username' type="text" name='username' value={username} onChange={changeHandler} /><br /><br />
                    <input className='inputs' placeholder='enter email' type="email" name='email' value={email} onChange={changeHandler} /><br /><br />
                    <input className='inputs' placeholder='enter password' type="password" name='password' value={password} onChange={changeHandler} /><br /><br />
                    <input className='inputs' placeholder='enter confirmpassword' type="password" name='confirmpassword' value={confirmpassword} onChange={changeHandler} /><br /><br />
                    {password !== confirmpassword ? <p style={{ color: "red" }}>Password And ConfirmPassword is not same</p> : null}
                  <input type="submit" onClick={()=> navigate('/Caluculator')}  name='submit' className='submit' />

                </form>
            </center>
        </div>
    )
}

export default Main;
