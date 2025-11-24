import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        throw Error("Something went wrong");
      } else {
        console.log("Logging in!");
        localStorage.setItem("currentUser", username);
        navigate(`../driveHome/${username}`);
      }
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
      <h1>Login:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required />
        <input type="submit" />
      </form>
    </>
  );
}

export default Login;
