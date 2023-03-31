import React , {useState} from 'react'
import './Signupform.css'
import { useNavigate } from 'react-router-dom';
import Button from "../Button";
import { BASE_URI } from "../../services/helper";

const Signupform = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${BASE_URI}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === 200) {
      navigate("/login");
    }
  };
  return (
    <>
      {/* <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={handleSubmit}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" name='name' placeholder="name" onChange={HandleChange} value={user.fullName}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="email" className="login__input" name='email' placeholder="email" onChange={HandleChange} value={user.email}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" name='password' placeholder="Password" onChange={HandleChange} value={user.password}/>
				</div>
				
				
				<button type='submit' value ='Submit' className="button login__submit">
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div className="social-login">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="#/" className="social-login__icon fab fa-instagram"> </a>
					<a href="#/" className="social-login__icon fab fa-facebook"> </a>
					<a href="#/" className="social-login__icon fab fa-twitter"> </a>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div> */}

      <div className="Mastercontainer">
        <div className="upContainer">
          <form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <input
              id="name"
              type="name"
              className="input"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="username"
            />
            <br />
            <input
              id="email"
              type="email"
              className="input"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <br />
            <input
              id="password"
              type="password"
              className="input"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <input type="checkbox" id="checkbox" />
            <span>Remember password</span>

            <Button type="submit">Submit</Button>
            <a href="/login">Already a Member</a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signupform