import styled from "styled-components";

export const Home = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

Home.Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 3.5rem;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  color: #283b40;
`;

Home.Image = styled.img`
  width: 100%;
  max-width: 400px;
  transform: scaleX(-1);
`;

Home.CTAButton = styled.button`
  border: 0;
  border-radius: 2rem;
  background: radial-gradient(
      4.46% 21.55% at 50% 50%,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #f2968f;
  color: var(--White, #fcfcfc);
  font-size: 2rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: radial-gradient(
      4.46% 21.55% at 50% 50%,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #f2968f;
    filter: brightness(1.05);
    color: var(--White, #fcfcfc);
  }
`;
