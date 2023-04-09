import React from "react";
import { Card, Input, Select } from "../../library";
import styles from "../styles/Page.css";

export const TestPage = () => {
  const [v, setV] = React.useState("");
  return (
    <div className={styles.Page}>
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          width: "500px",
          height: "500px",
        }}
      >
        <Input label="test" />
        <Select
          flex
          label="Service"
          value={v}
          onChange={(e: any) => {
            setV(e.target.value);
          }}
        >
          <option value="">None</option>
          <option value="test1">Test1</option>
          <option value="test2">Test2</option>
        </Select>
      </Card>
    </div>
  );
};
