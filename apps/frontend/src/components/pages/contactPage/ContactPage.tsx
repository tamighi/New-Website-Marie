import React from "react";

import { Button } from "lib";
import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { QuestionContactForm } from "./QuestionContactForm";
import { DevisContactForm } from "./DevisContactForm";

export const ContactPage = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <CenteredPage>
      <h2>Contact</h2>
      <div style={{ display: "flex" }}>
        <Button onClick={() => setTab(0)}>Tab 1</Button>
        <Button onClick={() => setTab(1)}>Tab 2</Button>
      </div>
      {tab === 0 && <QuestionContactForm />}
      {tab === 1 && <DevisContactForm />}
    </CenteredPage>
  );
};
