import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//styledを上書きする場合は、styled.ではなく()で囲う
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
