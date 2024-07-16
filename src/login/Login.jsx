import React, { useEffect, useState } from "react";
import { loginImg } from "../constants/indeximg";
import Input from "../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { userError, userStart, userSuccess } from "../reducers/reducer";
import authService from "../service/auth";
import { useNavigate } from "react-router";
import { ValidationError} from "..";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const { isLoading, isLogenIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(userStart());

    const user ={
      email,
      password
    }
    try {
      const response = await authService.UserLogin(user);
      dispatch(userSuccess(response.user));
  
      navigate("/")
    } catch (error) {
      
  
      dispatch(userError(error.response.data.errors));
    }

  };

  useEffect(() =>{
    if(isLogenIn){
      navigate("/")
    }
  }, [isLogenIn ])
  return (
    <main className="form-signin w-100 m-auto">
      <form className="w-25 m-auto text-center">
        <img className="mb-4" src={loginImg} alt="" width="100" height="100" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <ValidationError/>

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
          onClick={handleLogin}
          className="btn btn-primary w-100 py-2 mt-3"
          type="submit"
        >
          {isLoading ? "Loading..." : " Login"}
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
      </form>
    </main>
  );
};

export default Login;
