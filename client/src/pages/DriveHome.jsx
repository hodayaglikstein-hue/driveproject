import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CreateFolder from "../components/CreateFolder";
import DeleteFolder from "../components/DeleteFolder";
import { getFolders } from "../js/actions";
import CreateFile from "../components/CreateFile";
import ReadFile from "../components/ReadFile";

function DriveHome() {
  const [files, setFiles] = useState([]);
  const [selectedPath, setSelectedPath] = useState();
  const navigate = useNavigate();
  const username = localStorage.getItem("currentUser");

  useEffect(() => {
    if (!username) {
      navigate("/login");
      return;
    }

    getFolders(username, setFiles);
  }, []);

  function getPath() {
    let path = window.location.pathname;
    const pathArr = path.split("/");
    pathArr.splice(0, 2);
    return pathArr.join("/");
  }

  function updateURL(file, fullPath) {
    navigate(window.location.pathname + "/" + file);
    getFolders(getPath(), setFiles);
    if (file.includes(".txt")) {
      setSelectedPath(fullPath);
    }
    if (pathArr[pathArr.length - 1].includes(".txt")) {
      pathArr.pop();
      const newPath = pathArr.join("/");
      navigate(`/driveHome/${newPath}`);
      console.log(newPath);
    }
  }

  function goBackToPart(partIndex) {
    const newPath = pathArr.slice(0, partIndex + 1).join("/");
    console.log("Navigating to:", newPath);
    navigate(`/driveHome/${newPath}`);
    getFolders(newPath, setFiles);
    setSelectedPath(null);
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
      <div className="create-items-container">
        <CreateFile setFiles={setFiles} />
        <CreateFolder setFiles={setFiles} />
      </div>

      <div className="files-container">
        {files.map((file, index) => {
          const fullPath = getPath() + "/" + file;
          return (
            <div
              key={file + index}
              className="file-item"
              onClick={() => updateURL(file, fullPath)}
            >
              <div className="file-icon">
                {file.includes(".txt") ? "📄" : "📁"}
              </div>
              <div className="file-name">{file}</div>
              {file.includes(".txt") ? (
                ""
              ) : (
                <DeleteFolder folderName={file} setFiles={setFiles} />
              )}
            </div>
          );
        })}
      </div>

      {/* Render selected file content here */}

      {selectedPath && <ReadFile filePath={selectedPath} />}
    </>
  );
}

export default DriveHome;
