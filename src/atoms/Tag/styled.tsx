import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Anchor = styled.a(
  ({ theme }) => css`
    text-decoration: none;
    cursor: pointer;
    color: ${theme.color.textLowEmphasis};
    margin-left: ${theme.space.xs};
    &::before {
      content: "#";
    }
  `
);
