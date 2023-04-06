import {
  ArrowBackIcon,
  Card,
  ContactSupportIcon,
  HelpIcon,
  ReviewIcon,
  SnippetFolderIcon,
} from "library";

import styles from "../styles/Page.css";

export const TestIcons = () => {
  return (
    <div className={styles.Page}>
      <Card
        style={{
          display: "flex",
          width: "100%",
          height: "500px",
          margin: "30px",
        }}
      >
        <ArrowBackIcon />
        <ReviewIcon />
        <HelpIcon />
        <ContactSupportIcon />
        <SnippetFolderIcon />
      </Card>
    </div>
  );
};
