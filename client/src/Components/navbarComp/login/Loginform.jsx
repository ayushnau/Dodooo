import React, { useState } from "react";
import "./loginform.css";
import { BASE_URI } from "../../../services/helper";
import Button from "../../Button";

const Loginform = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${BASE_URI}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.user) {
      localStorage.setItem("token", data.user);
      console.log("login successfull");
      window.location.href = "/";
    } else {
      console.log("incorrect username or password");
    }
  };
  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <div className="login-wrap">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              checked
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    email
                  </label>
                  <input
                    id="user"
                    type="email"
                    className="input"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="input"
                    name="password"
                    data-type="password"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="group">
                  <input type="submit" className="button" value="Sign In" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form> */}

      <div className="Mastercontainer">
        <div className="upContainer">
          <form onSubmit={handleSubmit}>
            <h2>SignIn</h2>
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

            <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Loginform;
