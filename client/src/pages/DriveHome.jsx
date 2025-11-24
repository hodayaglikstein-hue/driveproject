import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CreateFolder from "../components/CreateFolder";
import DeleteFolder from "../components/DeleteFolder";

function DriveHome() {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  const username = localStorage.getItem("currentUser");
  useEffect(() => {
    if (!username) {
      navigate("/login");
      return;
    }
    getFiles(username);
  }, []);

  async function getFiles(username) {
    try {
      const res = await fetch(`http://localhost:3000/actions/${username}`);
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      const data = await res.json();
      console.log(data);
      setFiles(data);
    } catch (e) {
      console.error(e);
    }
  }

  function randomNum() {
    return Math.floor(Math.random() * 1000000000000000);
  }

  return (
    <>
      <h1>This is home page</h1>
      <h3>{username}</h3>
      <CreateFolder />
      <DeleteFolder />
      {files.map((file) => {
        return <div key={randomNum()}>{file}</div>;
      })}
    </>
  );
}

export default DriveHome;
