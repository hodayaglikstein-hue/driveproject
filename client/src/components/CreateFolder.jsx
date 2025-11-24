import { useState } from "react";
import { createFolder } from "../js/actions";

function CreateFolder(props) {
  const [value, setValue] = useState("");
  const username = localStorage.getItem("currentUser");

  function createNewFolder(value) {
    let path = window.location.pathname;
    const pathArr = path.split("/");
    pathArr.splice(0, 2);
    path = pathArr.join("/");
    createFolder(value, path);
    props.getFiles(username);
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
