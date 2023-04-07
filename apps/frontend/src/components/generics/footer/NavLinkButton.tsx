import { Button } from "lib";
import { useNavigate } from "react-router-dom";

import styles from "./Footer.css";

export const NavLinkButton = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();
  return (
    <Button
      className={styles.FooterNavLink}
      onClick={() => navigate(to)}
      variant="contained"
    >
      {children}
    </Button>
  );
};
