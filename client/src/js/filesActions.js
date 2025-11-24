export async function createFile(fileName, textValue, path) {
  try {
    await fetch("http://localhost:3000/filesActions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fileName: fileName,
        textValue: textValue,
        path: path,
      }),
    });
  } catch (err) {
    console.log(err);
  }
}

export async function getFiles(fullPath) {
  try {
    const res = await fetch(`http://localhost:3000/filesActions/${fullPath}`);
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    const data = await res.json();
    console.log(data.text);
    return data.text;
  } catch (e) {
    console.error(e);
  }
}
