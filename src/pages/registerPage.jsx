import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
export const Register = () => {
  const { register } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  // all constants below are used to handle input changes when registering user
  const onFistNameChange = (event) => {
    let value = event.target.value;
    setFirstName(value);
  };
  const onLastNameChange = (event) => {
    let value = event.target.value;
    setLastName(value);
  };

  const onEmailChange = (event) => {
    let value = event.target.value;
    setEmail(value);
  };
  const onPasswordChange = (event) => {
    let value = event.target.value;
    setPassword(value);
  };
  //array to create dropdown age selection
  const agePicker = Array.from({ length: 100 }, (value, i) => i + 1);

  const onRegisterEvent = async () => {
    setError("");
    if (!firstName || !lastName || !email || !password || !age) {
      setError("Fill all feilds");
      return;
    }
    const result = await register({
      firstName,
      lastName,
      email,
      password,
      age: Number(age),
    });
    console.log(result);
    if (result.error) {
      setError(result.error.message);
    } else {
      console.log("Registation Successfull");
    }
  };
  return (
    <div className="">
      <h1 className=""> </h1>
      {error && <p className="error">{error}</p>}
      <div className="">
        <label htmlFor="fistName">First Name</label>
        <inout type="text" id="fistName" onChange={onFistNameChange} />
        <labele htmlFor="lastName">Last name</labele>
        <input type="text" id="lastName" onChange={onLastNameChange} />
        <lable htmlFor="registerEmail">Email</lable>
        <input type="email" id="registerEmail" onChange={onEmailChange} />
        <label htmlFor="registerPassword">Password</label>
        <input
          type="password"
          id="registerPassword"
          onChange={onPasswordChange}
        />
        {/**inbuilt function similar to above function forwith event handler */}
        <label htmlFor="age">Selet Age</label>
        <select id="age" onChange={(event) => setAge(event.target.value)}>
          <option value="" disabled>
            --Select Age--
          </option>
          {agePicker.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
        <button onClick={onRegisterEvent} className="">
          Register
        </button>
      </div>
      <p className="">
        Alreadyt have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};
