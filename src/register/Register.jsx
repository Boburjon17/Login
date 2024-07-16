import React, { useEffect, useState } from "react";
import { loginImg } from "../constants/indeximg";
import Input from "../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { userError, userStart, userSuccess } from "../reducers/reducer";
import authService from "../service/auth";
import { useNavigate } from "react-router";
import { ValidationError } from "..";

const Register = () => {
  const { isLoading, isLogenIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(userStart());
    const user = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const responce = await authService.UserRegister(user);
      dispatch(userSuccess(responce.user));
    
      
    } catch (error) {
      dispatch(userError(error.response.data.errors));
    }
  };
  useEffect(() =>{
    if(isLogenIn){
      navigate("/")
    }
  }, [isLogenIn])

  return (
    <main className="form-signin w-100 m-auto">
      <form className="w-25 m-auto text-center">
        <img className="mb-4" src={loginImg} alt="" width="100" height="100" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <ValidationError/>

        <Input
          type={"text"}
          placeholder={"Enter your username"}
          id={"floatingusername"}
          label={"Username"}
          state={username}
          setState={setUsername}
        />
        <Input
          type={"email"}
          placeholder={"Enter your Email"}
          id={"floatingEmail"}
          label={"Email Adress"}
          state={email}
          setState={setEmail}
        />
        <Input
          type={"password"}
          placeholder={"Enter your Password"}
          id={"floatingPassword"}
          label={"Password"}
          state={password}
          setState={setPassword}
        />

        <button
          disabled={isLoading}
          onClick={handleRegister}
          className="btn btn-primary w-100 py-2 mt-3"
          type="submit"
        >
          {isLoading ? "Loading..." : "Register"}
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
      </form>
    </main>
  );
};

export default Register;
