import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CreateFolder from "../components/CreateFolder";
import { getFiles } from "../js/actions";

function DriveHome() {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  const username = localStorage.getItem("currentUser");

  useEffect(() => {
    if (!username) {
      navigate("/login");
      return;
    }

    getFiles(username, setFiles);
  }, []);

  function getPath() {
    let path = window.location.pathname;
    const pathArr = path.split("/");
    pathArr.splice(0, 2);
    return pathArr.join("/");
  }

  function updateURL(file) {
    navigate(window.location.pathname + "/" + file);
    getFiles(getPath(), setFiles);
  }

  function goBackToPart(partIndex) {
    const newPath = pathArr.slice(0, partIndex + 1).join("/");
    console.log("Navigating to:", newPath);
    navigate(`/driveHome/${newPath}`);
    getFiles(newPath, setFiles);
  }

  const pathArr = getPath().split("/");

  return (
    <>
      <h1>{username}'s Drive</h1>
      <h4>
        {pathArr.map((part, index) => {
          return (
            <span
              key={part + index}
              onClick={() => {
                goBackToPart(index);
              }}
            >
              {part + "/"}
            </span>
          );
        })}
      </h4>
      <CreateFolder setFiles={setFiles} />
      {files.map((file, index) => {
        return (
          <div
            key={file + "" + index}
            onClick={() => {
              updateURL(file);
            }}
          >
            {file}
          </div>
        );
      })}
    </>
  );
}

export default DriveHome;
