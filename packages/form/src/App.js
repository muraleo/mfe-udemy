import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { FormPage } from "./components/FormPage";

const generateClassName = createGenerateClassName({
  productionPrefix: "fo",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <FormPage />
      </StylesProvider>
    </div>
  );
};
