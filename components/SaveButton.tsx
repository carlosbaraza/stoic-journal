import React from "react";
import { Button } from "./Button";

type Props = {
  onPress(): void;
};

export const SaveButton = (props: Props) => {
  return <Button {...props}>Save journal</Button>;
};
