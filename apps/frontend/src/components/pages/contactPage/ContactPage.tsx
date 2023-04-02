import React from "react";

import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { QuestionContactForm } from "./QuestionContactForm";
import { DevisContactForm } from "./DevisContactForm";
import { Tab, Tabs } from "../core";

export const ContactPage = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <CenteredPage>
      <h2>Contact</h2>
      <Tabs>
        <Tab active={tab === 0} onClick={() => setTab(0)}>Information</Tab>
        <Tab active={tab === 1} onClick={() => setTab(1)}>Devis</Tab>
      </Tabs>
      {tab === 0 && <QuestionContactForm />}
      {tab === 1 && <DevisContactForm />}
    </CenteredPage>
  );
};
