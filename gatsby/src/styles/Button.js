import styled from 'styled-components';

export const ButtonStyles = styled.button`
  font-family: 'latobold';
  border-radius: 25px;
  height: 50px;
  width: 16rem;
  padding: 0.5rem;
  cursor: pointer;
  background-color: var(--burnt-sienna);
  border: none;
  color: var(--blue-vogue);
  box-shadow: 2px 3px 6px 0 rgba(0, 0, 0, 0.5);
  font-size: 1.2rem;

  @media (max-width: 76.8rem) {
    width: 14rem;
  }

  @media (max-width: 36.8rem) {
    width: 12rem;
    font-size: 1rem;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #aaa;
    color: grey !important;
    border: 1px solid grey;
    pointer-events: none;
  }

  &:hover {
    background-color: var(--blue-vogue);
    color: var(--white);
    transition: 0.6s;
  }
`;
