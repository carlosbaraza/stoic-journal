import React from "react";
import { Button } from "./Button";

type Props = {
  onPress(): void;
  disabled?: boolean;
};

export const SaveButton = (props: Props) => {
  return <Button {...props}>Save journal</Button>;
};
