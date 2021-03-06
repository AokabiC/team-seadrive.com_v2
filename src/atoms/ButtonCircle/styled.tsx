/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const buttonLength = "2.8em";

export const Button = styled.button(
  css`
    position: relative;
    border: none;
    background: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
    font-size: calc(${buttonLength} * 0.45);

    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;

    & > * {
      // next/imageとの併用でfont-awesomeのサイズの
      // font-sizeでの指定が効かなくなる
      width: calc(${buttonLength} * 0.4);
    }
  `
);

const SvgContainer = styled.svg(css`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(90deg);
`);

const SvgCircle = styled.circle(
  ({ theme }) => css`
    stroke: inherit;
    fill: transparent;
    stroke-dasharray: 1000 1000;
    transition: stroke-dasharray ${theme.transitionSpeed.hover} ease-in-out;

    ${theme.mediaQuery.md} {
      stroke-dasharray: 0 1000;
    }
  `
);

export const Container = styled.div(
  css`
    position: relative;
    width: ${buttonLength};
    height: ${buttonLength};
    &:hover {
      ${SvgCircle} {
        /* Circumference */
        stroke-dasharray: calc(2 * 3.14 * ${buttonLength} * 0.45) 1000;
      }
    }
  `
);

export const Circle: React.FC = () => (
  <SvgContainer>
    <SvgCircle
      cx={`calc(${buttonLength} * 0.5)`}
      cy={`calc(${buttonLength} * 0.5)`}
      r={`calc(${buttonLength} * 0.45)`}
    />
  </SvgContainer>
);
