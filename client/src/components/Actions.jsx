function Actions() {
  async function post() {
    try {
      fetch("http://localhost:3000/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "tali" }),
      });
    } catch (err) {
      console.log(err);
    }
  }
  //   post();

  async function delete1() {
    const name = "ram";
    try {
      fetch(`http://localhost:3000/actions/${name}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log(err);
    }
  }
  delete1();
}

export default Actions;
