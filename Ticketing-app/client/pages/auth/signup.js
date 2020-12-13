import { useState } from "react";
import axios from "axios";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/users/signup", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.errors);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1> Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
        {error.length > 0 && <div className="alert alert-danger">
          <h4>Something went wrong!</h4>
          <ul className="my-0">
            {error.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>}
        
     
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};
