import React, { Fragment } from 'react'
import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import './AuthLogin.css'
import { UserContext } from '../context'

const AuthLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [state, setState] = useContext(UserContext);

    const navigate = useNavigate();
    // console.log(props.history.location)
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password)
        try {
            console.log( email, password);
            setLoading(true);
            const { data } = await axios.post(`http://localhost:8000/api/login`, {
                email,
                password,
            });

            if (data.error) {
                console.log(data.error);
            } else {
                // update context
                setState({
                    user: data.user,
                    token: data.token,
                });
                // save in local storage
                window.localStorage.setItem("auth", JSON.stringify(data));
                navigate("/user/dashboard");
                // history.push("/user/dashboard");
                // history.go('/user/dashboard')
            }
        } catch (err) {
            // toast.error(err.response.data);
            setLoading(false);
        }
    };
    if (state && state.token) navigate("/user/dashboard")
    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 d-sm-none d-md-block'>
                        <div className='login_text'>
                            <h2>Get Started With Quiz</h2>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='loginform'>
                            <form onSubmit={handleSubmit} >
                                <input
                                    className='form-control m-2'
                                    type="text"
                                    placeholder='enter email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input className='form-control m-2' type="password"
                                    placeholder='enter password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button className='btn btn-success'>login</button>
                            </form>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <Link to="/signup">haven't an account? signup</Link>
                                <Link to="/">Forgot password</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AuthLogin