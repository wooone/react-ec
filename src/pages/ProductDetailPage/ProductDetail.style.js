import styled, { css } from "styled-components";

export const RatingIcon = styled.i`
  color: coral;
`;

const TextStyled = css`
  width: 100%;
  border: 1px solid #0a1d37;
  border-radius: 5px;
  padding: 8px 20px;

  &:focus {
    outline: none;
  }
`;

export const InputStyled = styled.input`
  ${TextStyled}
`;

export const TextAreaStyled = styled.textarea`
  ${TextStyled}
`;

export const SpanStyled = styled.span`
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: coral;
  font-weight: 600;
  cursor: pointer;
`;
