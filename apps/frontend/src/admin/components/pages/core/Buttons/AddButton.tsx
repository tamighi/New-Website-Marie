import { AddIcon, IconButton } from "lib";
import { useNavigate } from "react-router-dom";

export const AddButton = () => {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate("create")}>
      <AddIcon />
    </IconButton>
  );
};
