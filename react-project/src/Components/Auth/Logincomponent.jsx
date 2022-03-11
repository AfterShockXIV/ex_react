import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Authcomponent.scss";
import {useDispatch} from 'react-redux'
import { AUTH_MODEL } from "../../Models/AuthModel";
const Logincomponent = () => {
  const { handleSubmit, control } = useForm();
  const dispach = useDispatch()
  const history = useNavigate();
  const onSubmit = async (data) => {
    if(data.username !== AUTH_MODEL.USERNAME || data.password !== AUTH_MODEL.PASSWORD ){
      await alert("Username or Password is wrong")
    }else{
      // await localStorage.setItem("user",JSON.stringify(AUTH_MODEL))
      await dispach({type: "set_user",user : AUTH_MODEL})
      await history("/user/home")
    }
  };
  return (
    <div className="login-container">
      <div className="App-form">
        <h1>MY LOGIN SYSTEM</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-container">
            <div className="form-group-container">
              <label>Username</label>
              <Controller
                name="username"
                rules={{ required: true }}
                control={control}
                render={({ field }) => <input type={"text"} {...field} />}
              />
            </div>

            <div className="form-group-container">
              <label>Password</label>
              <Controller
                name="password"
                rules={{ required: true }}
                control={control}
                render={({ field }) => <input type={"password"} {...field} />}
              />
            </div>

            <div className="form-botton-group">
              <button className="primary" type="submit">
                Login
              </button>
              <button className="danger" onClick={() => history("/Register")}>
                Register
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Logincomponent;
