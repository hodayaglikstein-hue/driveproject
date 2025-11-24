export async function createFolder(folderName, path) {
  try {
    fetch("http://localhost:3000/actions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ folderName: folderName, path: path }),
    });
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFolder(name) {
  try {
    fetch(`http://localhost:3000/actions/${name}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
  }
}

// export async function getFolders(folderName, path) {
//     try {

//     }
// }

// async function getFiles(username) {
//     try {
//       const res = await fetch(`http://localhost:3000/actions/${username}`);
//       if (!res.ok) {
//         throw Error("Something went wrong");
//       }
//       const data = await res.json();
//       console.log(data);
//       setFiles(data);
//     } catch (e) {
//       console.error(e);
//     }
//   }

// router.get("/:folderName", async (req, res) => {
//   try {
//     const folderPath = path.join(
//       __dirname,
//       `../users${req.body.path}`,
//       req.params.folderName
//     );
//     const files = await fs.readdir(folderPath);
//     res.json(files);
//   } catch (err) {
//     res.status(500).json({ error: "Error getting files" });
//   }
// });
