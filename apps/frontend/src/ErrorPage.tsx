import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { Button } from "lib";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <CenteredPage>
      <h1>Oupsi !</h1>
      <p>Cette page n'existe pas ...</p>
      <Button onClick={() => navigate("/")}>Retourner a la page d'accueil</Button>
    </CenteredPage>
  );
};
