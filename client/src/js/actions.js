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
    await fetch(`http://localhost:3000/actions/${fullPath}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
  }
}

export async function getFolders(path, setFiles) {
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

export async function renameFolder(
  oldFolderName,
  newFolderName,
  currentPath = ""
) {
  try {
    console.log("renameFolder Called!");
    const arr = currentPath.split("/");
    arr.pop();
    const savePath = arr.join("/");
    console.log(savePath);

    // const oldFullPath = currentPath
    //   ? `${currentPath}/${oldFolderName}`
    //   : oldFolderName;
    // const newFullPath = currentPath
    //   ? `${currentPath}/${newFolderName}`
    //   : newFolderName;
    const oldFullPath = `${savePath}/${oldFolderName}`;
    const newFullPath = `${savePath}/${newFolderName}`;

    console.log("oldFullPath", oldFullPath);
    console.log("newFullPath", newFullPath);

    await fetch("http://localhost:3000/actions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ oldPath: oldFullPath, newPath: newFullPath }),
    });
  } catch (err) {
    console.log(err);
  }
}
