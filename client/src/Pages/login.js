import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setToken } from '../Store/Actions/userAction'
import { useHistory, Link } from 'react-router-dom'
import '../App.css'

export default function Login () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [failedLogin, setFailedLogin] = useState(false)
    const { users } = useSelector (state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    function emailChangeHandler (event) {
        setEmail(event.target.value)
    }

    function passwordChangeHandler (event) {
        setPassword(event.target.value)
    }

    function login (event) {
        event.preventDefault()
        if (users.length === 0) {
          setFailedLogin(true)
        }

        users.forEach(user => {
            if (user.email === email && user.password === password) {
              dispatch(setToken(true))
              history.push('/')
            } else {
              setFailedLogin(true)
            }
        })

        setPassword("")
        setEmail("")

        setTimeout(() => {
          setFailedLogin(false)
        }, 1000);


    }

    return (
        <div>
          <div className="shadow p-3 mb-5 bg-white rounded col-md-3 mx-auto" style={{marginTop: "8%"}}>
            <div>
              <img className="col-md-8" id="registerImg" src="https://cdn.dribbble.com/users/1965140/screenshots/9776931/dribbble_75_4x.png" />
            </div>
            <h1 className="mb-3 text-center" id="registerTitle">Login</h1>
            { failedLogin && <p style={{color: "red", textAlign: "center"}}>email/password is wrong, please try again!</p>}
            { !failedLogin && <p style={{color: "transparent"}}>email/password is wrong, please try again!</p>}
            <form onSubmit={(event) => login(event)}>
              <input
                className="form-control col-md-10 mb-1 mx-auto" 
                type="text"
                placeholder="email"
                autoComplete="off"
                value={email}
                onChange={(event) => emailChangeHandler(event)}
              />
              <input 
                className="form-control col-md-10 mb-3 mx-auto"
                type="password"
                placeholder="password"
                autoComplete="off"
                value={password}
                onChange={(event) => passwordChangeHandler(event)}
              />
              <button className="btn btn-block btn-info col-md-10 mx-auto" >Login</button>
            </form>
            <div>
              <p className="text-center mt-2" style={{fontSize: "13px"}}>Don't have an account? <Link to="/register">Sign up</Link> now</p>
            </div>
          </div>
        </div>
    )
}