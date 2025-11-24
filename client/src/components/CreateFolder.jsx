import { useState } from "react";
import { createFolder, getFolders } from "../js/actions";

function CreateFolder(props) {
  const [value, setValue] = useState("");

  function getPath() {
    let path = window.location.pathname;
    const pathArr = path.split("/");
    pathArr.splice(0, 2);
    return pathArr.join("/");
  }

  async function createNewFolder(value) {
    let path = window.location.pathname;
    const pathArr = path.split("/");
    pathArr.splice(0, 2);
    path = pathArr.join("/");
    await createFolder(value, path);
    await getFolders(getPath(), props.setFiles);
    setValue("");
  }

  return (
    <div className="create-folder-container">
      <input
        type="text"
        placeholder="Folder name..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => createNewFolder(value)}>Create Folder</button>
    </div>
  );
}

export default CreateFolder;
