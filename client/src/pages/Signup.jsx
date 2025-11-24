import { createFolder } from "../js/actions";
function Signup() {
  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;

    try {
      if (confirmPassword !== password) {
        throw Error("The passwords aren't the same");
      }
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        throw Error("Something went wrong");
      } else {
        console.log("Logging in!");
        localStorage.setItem("currentUser", username);
        createFolder(username);
      }
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
      <h1>Signup:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required />
        <label htmlFor="confirmPassword">Password:</label>
        <input type="password" id="confirmPassword" required />
        <input type="submit" />
      </form>
    </>
  );
}

export default Signup;
