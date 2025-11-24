import { useState } from "react";
import { createFile } from "../js/filesActions";
import { getFolders } from "../js/actions";

function CreateFile(props) {
  const [nameValue, setNameValue] = useState("");
  const [textValue, setTextValue] = useState("");

  function getPath() {
    let path = window.location.pathname;
    const pathArr = path.split("/");
    pathArr.splice(0, 2);
    return pathArr.join("/");
  }

  async function createNewFile(nameValue, textValue) {
    let path = window.location.pathname;
    const pathArr = path.split("/");
    pathArr.splice(0, 2);
    path = pathArr.join("/");
    await createFile(nameValue, textValue, path);
    await getFolders(getPath(), props.setFiles);
    setNameValue("");
    setTextValue("");
  }

  return (
    <div className="create-file-container">
      <input
        type="text"
        placeholder="File name..."
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <textarea
        placeholder="File content..."
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <button onClick={() => createNewFile(nameValue, textValue)}>
        Create File
      </button>
    </div>
  );
}

export default CreateFile;
