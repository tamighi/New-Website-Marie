import React from "react";

import CSSClasses from "./InputBase.css";

export interface BaseInputProps {
  color?: string;
  flex?: boolean;
  label?: string;
  children: React.ReactNode;
}

// TODO: Flex better styles ? margin input is not working correctly
const BaseInput = (
  props: BaseInputProps,
) => {
  const {
    flex = false,
    label,
    children
  } = props;

  const containerClassNames =
    `${CSSClasses.InputContainer} ` + `${flex ? CSSClasses.InputFlex : ""}`;

  return (
    <div className={containerClassNames}>
      {children}
      <label className={CSSClasses.Label}>
        {label}
      </label>
    </div>
  );
};

export default BaseInput;
