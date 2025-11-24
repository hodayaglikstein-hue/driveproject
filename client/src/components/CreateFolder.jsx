import { useState } from "react";
import { createFolder } from "../js/actions";

function CreateFolder() {
  const [value, setValue] = useState("");
  function createNewFolder(value) {
    let path = window.location.pathname;
    const pathArr = path.split("/");
    pathArr.splice(0, 2);
    path = pathArr.join("/");
    createFolder(value, path);
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
