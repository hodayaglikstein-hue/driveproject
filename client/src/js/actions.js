export async function createFolder(folderName, path) {
  try {
    fetch("http://localhost:3000/actions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ folderName: folderName, path: path }),
    });
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFolder(name) {
  try {
    fetch(`http://localhost:3000/actions/${name}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
  }
}
