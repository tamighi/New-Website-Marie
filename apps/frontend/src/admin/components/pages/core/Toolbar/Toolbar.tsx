import { AddIcon, IconButton, Navbar } from "lib";
import { useNavigate } from "react-router-dom";

export const Toolbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar style={{ justifyContent: "flex-end" }}>
      <IconButton onClick={() => navigate("create")}>
        <AddIcon />
      </IconButton>
    </Navbar>
  );
};
