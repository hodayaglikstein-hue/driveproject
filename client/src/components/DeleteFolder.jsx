import { useState } from "react";
import { deleteFolder } from "../js/actions";

function DeleteFolder() {
  const [value, setValue] = useState("");
  function deletee(value) {
    let path = window.location.pathname;
    const pathArr = path.split("/");
    pathArr.splice(0, 2);
    path = pathArr.join("/");
    deleteFolder(value, path);
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
          deletee(value);
        }}
      >
        delete Folder
      </button>
    </>
  );
}

export default DeleteFolder;
