import React, { FC } from "react";
import BaseFlexBox from "../BaseFlexBox";

interface BaseFormFieldProps {
  children: React.ReactNode;
}

const BaseInputGroup: FC<BaseFormFieldProps> = ({ children }) => {
  return (
    <BaseFlexBox gap="md" alignItems="center">
      {children}
    </BaseFlexBox>
  );
};
export default BaseInputGroup;
