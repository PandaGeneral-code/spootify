import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const rotatingAnimation = ({ animated, rotationSpeed }) =>
  css`
    ${rotate} ${rotationSpeed === 0
      ? "1"
      : 1 / rotationSpeed}s linear infinite ${animated
      ? rotationSpeed === 0
        ? "paused"
        : "running"
      : "paused"}
  `;

export const RotatingContainer = styled.div``;

export const Rotate = styled.div`
  animation: ${rotatingAnimation};
  display: inline-block;
  font-size: 1.2rem;
  padding: 2rem 1rem;
`;

const RootContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default RootContainer;
