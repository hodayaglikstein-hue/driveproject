import { useEffect } from "react";
import { useNavigate } from "react-router";

function DriveHome() {
  const navigate = useNavigate();
  const username = localStorage.getItem("currentUser");
  useEffect(() => {
    if (!username) {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <>
      <h1>This is home page</h1>
    </>
  );
}

export default DriveHome;
