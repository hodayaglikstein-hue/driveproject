import { useState } from "react";
import { createFolder } from "../js/actions";
import { getFiles } from "../js/actions";

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
    await getFiles(getPath(), props.setFiles);
    setValue("");
  }

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          createNewFolder(value);
        }}
      >
        New Folder
      </button>
    </>
  );
}

export default CreateFolder;
