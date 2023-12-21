import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("demo@dot.com");
  const [password, setPassword] = useState("12345");

  // useState...
  //working storing data......
  // [getMethod, setMethod] = useState(initialValue)

  const emailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const passwordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({email,password});
    if (email === "chandan@gmail.com" && password === "chandan123") {
      console.log("you are login successfully");
      setEmail("");
      setPassword("");
    } else {
      console.log("wrong email or password");
    }
  };

  return (
    <div
      style={{
        border: "1px solid",
        width: "20vw",
        height: "30vh",
        padding: 20,
        borderRadius: 10,
      }}
    >
      <h5 style={{ textAlign: "center" }}>Login Form</h5>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          style={{
            width: "80%",
            marginBottom: 10,
          }}
          placeholder="Enter email..."
          onChange={emailChange}
          value={email}
        />
        <input
          style={{
            width: "80%",
            marginBottom: 10,
          }}
          placeholder="Enter password..."
          onChange={passwordChange}
          value={password}
        />
        <button
          style={{
            width: "80%",
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
