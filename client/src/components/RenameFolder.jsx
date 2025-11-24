import { useState } from "react";
import { renameFolder } from "../js/actions";
import { getFiles } from "../js/actions";

function RenameFolder(props) {
  const [value, setValue] = useState("");

  function getPath() {
    let path = window.location.pathname;
    const pathArr = path.split("/");
    pathArr.splice(0, 2);
    return pathArr.join("/");
  }

  async function renameF(value) {
    let path = window.location.pathname;
    const pathArr = path.split("/");
    pathArr.splice(0, 2);
    path = pathArr.join("/");
    const oldFolderName = props.folderName;
    await renameFolder(oldFolderName, value, path);
    await getFiles(getPath(), props.setFiles);
    setValue("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="new name"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          renameF(value);
        }}
      >
        rename Folder{" "}
      </button>
    </>
  );
}

export default RenameFolder;
