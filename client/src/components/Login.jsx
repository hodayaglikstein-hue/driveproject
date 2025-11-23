function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    // const username = e.target.elements.username.value;
    // const password = e.target.elements.password.value;
  }
  return (
    <>
      <h1>Login:</h1>
      <form action="/login" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <input type="submit" />
      </form>
    </>
  );
}

export default Login;
