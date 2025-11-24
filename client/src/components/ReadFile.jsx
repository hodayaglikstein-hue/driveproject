import { useEffect, useState } from "react";
import { getFiles } from "../js/filesActions";

function ReadFile({ filePath }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!filePath) return;
    async function readFiles() {
      const text = await getFiles(filePath, setText);
      setText(text);
      console.log(text);
    }
    readFiles();
  }, [filePath]);

  return (
    <>
      <h2>{text}</h2>
    </>
  );
}

export default ReadFile;
