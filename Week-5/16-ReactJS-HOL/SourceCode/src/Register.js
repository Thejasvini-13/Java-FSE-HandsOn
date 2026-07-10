import { useState } from "react";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.name.length < 5) {
      alert("Name should have atleast 5 characters");
      return;
    }

    if (!(user.email.includes("@") && user.email.includes("."))) {
      alert("Invalid Email");
      return;
    }

    if (user.password.length < 8) {
      alert("Password should have atleast 8 characters");
      return;
    }

    alert("Registration Successful");
  };

  return (
    <div className="register">
      <h2>Register Here!!!</h2>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />

        <br /><br />

        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <br /><br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default Register;