import React, { FC } from "react";
import BaseFlexBox from "../BaseFlexBox";
import { Box } from "@mui/material";

interface BaseFormFieldProps {
  children: React.ReactNode;
}

const BaseFormField: FC<BaseFormFieldProps> = ({ children }) => {
  return (
    <BaseFlexBox gap="md" direction="column">
      {children}
    </BaseFlexBox>
  );
};
export default BaseFormField;
