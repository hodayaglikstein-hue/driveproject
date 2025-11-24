export async function createFolder(folderName, path) {
  try {
    await fetch("http://localhost:3000/actions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ folderName: folderName, path: path }),
    });
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFolder(folderName, path) {
  try {
    const fullPath = path ? `${path}/${folderName}` : folderName;
    fetch(`http://localhost:3000/actions/${fullPath}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
  }
}

export async function getFiles(path, setFiles) {
  try {
    const res = await fetch(`http://localhost:3000/actions/${path}`);
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    const data = await res.json();
    setFiles(data);
  } catch (e) {
    console.error(e);
  }
}
