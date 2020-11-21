import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as DocsIcon } from "./logo.svg";

const Wrapper = styled.div({
  display: "flex",
  fontSize: 24,
});

const StyledDocsIcon = styled(DocsIcon)({
  marginTop: "6px",
});

export default function Logo() {
  return (
    <Wrapper>
      <StyledDocsIcon />
    </Wrapper>
  );
}
