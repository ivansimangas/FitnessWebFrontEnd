import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

export const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onEmailChange = (event) => {
    let value = event.taget.value;
    setEmail(value);
  };
  const onPAsswordchange = (event) => {
    let value = event.taget.value;
    setPassword(value);
  };
  const onLoginEvent = async () => {
    setError("");
    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }
    const result = await login({ email, password });
    if (result.error) {
      setError(result.error.message);
    } else {
      console.log("Login Successful!", result);
    }
  };
  return (
    <div className="">
      <h1 className="">Log in to your account</h1>
      {error && <p className="error">{error}</p>}
      <div className="">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={onEmailChange} value={email} />
        <lable htmlFor="password">Password</lable>
        <input
          type="password"
          id="password"
          onChange={onPAsswordchange}
          value={password}
        />
        d
        <button className="" onClick={onLoginEvent}>
          Login
        </button>
        <p className="">
          Need an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};
