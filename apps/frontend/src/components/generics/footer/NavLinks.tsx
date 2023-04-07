import { Button } from "lib";
import { useNavigate } from "react-router-dom";

export const NavLinks = () => {
  const navigation = useNavigate();
  return (
    <div>
      <Button onClick={() => navigation("avis")} variant="contained">
        Avis
      </Button>
    </div>
  );
};
