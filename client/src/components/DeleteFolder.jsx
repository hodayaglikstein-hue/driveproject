import { deleteFolder, getFolders } from "../js/actions";

function getPath() {
  let path = window.location.pathname;
  const pathArr = path.split("/");
  pathArr.splice(0, 2);
  return pathArr.join("/");
}

function DeleteFolder(props) {
  async function deletee(value) {
    let path = window.location.pathname;
    const pathArr = path.split("/");
    pathArr.splice(0, 2);
    path = pathArr.join("/");
    await deleteFolder(value, path);
    await getFolders(getPath(), props.setFiles);
  }

  return (
    <>
      <button
        onClick={() => {
          deletee(props.folderName);
        }}
      >
        delete Folder
      </button>
    </>
  );
}

export default DeleteFolder;
