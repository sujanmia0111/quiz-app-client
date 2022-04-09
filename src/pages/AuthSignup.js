import React, { Fragment } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./AuthSignup.css"
import axios from 'axios'
import { UserContext } from '../context'

const AuthSignup = () => {
    const [fname, setFname] = React.useState('')
    const [lname, setLname] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [state, setState] = React.useContext(UserContext);
    const history = useNavigate();
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(fname, lname, email, password)
        try {
            const { data } = await axios.post(`http://localhost:8000/api/register`, {
              fname,
              lname,
              email,
              password
            });
      
            if (data.error) {
                console.log(data.error);
            } else {
                // update context
              setEmail("");
              setPassword("");
              setLoading(false);
            }
          } catch (err) {
            // toast.error(err.response.data);
            setLoading(false);
          }
    }


    if (state && state.token) history("/user/dashboard");
    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='signup_text'>
                            <h2>Get Started With Quiz</h2>
                        </div>
                    </div>
                    <div className='col-lg-6 text-center'>
                        <div className='signupform'>
                            <form onSubmit={handleSubmit}>
                                <input className='form-control m-2'
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    type="text"
                                    placeholder='first name'
                                />
                                <input className='form-control m-2'
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    type="text" placeholder='last name' />
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='form-control m-2' 
                                    type="text"
                                     placeholder='enter email' />
                                <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                 className='form-control m-2' 
                                 type="password"
                                  placeholder='password'
                                   />
                                {/* <input className='form-control m-2' type="password" placeholder='confirm password' /> */}
                                <button className='btn btn-success'>sign up</button>
                            </form>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Link to="/login">already have an account? signup</Link>
                                <Link to="/">Forgot password</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AuthSignup