import React from "react";

import { CenteredPage } from "components/generics/basePage/CenteredPage";
import { QuestionContactForm } from "./QuestionContactForm";
import { DevisContactForm } from "./DevisContactForm";
import { Tabs } from "../core/Tabs/Tabs";
import { Tab } from "../core/Tabs/Tab";

export const ContactPage = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <CenteredPage>
      <h2>Contact</h2>
      <Tabs>
        <Tab active={tab === 0} onClick={() => setTab(0)}>Tab 1</Tab>
        <Tab active={tab === 1} onClick={() => setTab(1)}>Tab 2</Tab>
      </Tabs>
      {tab === 0 && <QuestionContactForm />}
      {tab === 1 && <DevisContactForm />}
    </CenteredPage>
  );
};
