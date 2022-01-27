import React, { useContext, useState } from 'react';
import myContext from '../Context/Mycontext';
import Admin_profile from './AdminPanel/Admin_profile';
import "../css/Login.css";

const Login = () => {
  const a = useContext(myContext)
  const [wrong, setwrong] = useState("");
  const [uname, setuname] = useState("");
  const [password, setpassword] = useState("");
  const username = (e) => {
    setuname(e.target.value);
  }
  const handle = (e) => {
    console.log(uname,password);
    e.preventDefault()
    if ((uname == a.Loginu) && (password == a.Loginpass)) {
      a.update();
      setwrong("");
      setuname("");
      setpassword("");
    } else {
      setwrong("Please enter correct detail")
      setuname("");
      setpassword("");
    }
  }
  const pass = (e) => {
    setpassword(e.target.value);
  }
  if (a.state === true) {
    return (
      <Admin_profile />
    )
  }
  else {
    return (
      <>
        <div className="center">
          <h1>Login</h1>
          <form method="#" onSubmit={handle}>
            <div className="txt_field">
              <input type="text" value={uname} onChange={username} required />
              <span></span>
              <label>Username</label>
            </div>
            <div className="txt_field">
              <input type="password" value={password} onChange={pass} required />
              <span></span>
              <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <input type="submit" value="Login" />
            <div className="signup_link">
              <p>{wrong}</p>
            </div>
          </form>
        </div>
      </>
    )
  }
}
export default Login;
