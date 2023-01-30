import styled from "styled-components";

export const SelectStyled = styled.select`
  padding: 8px 20px;
  border: 1px solid #0a1d37;
  cursor: pointer;
  border-radius: 5px;
  background-color: #0a1d37;
  color: #fff;

  &:focus {
    outline: none;
  }
`;

export const OptionStyled = styled.option`
  font-size: 0.9rem;
`;

export const SearchBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #0a1d37;
  border-radius: 5px;
  padding-right: 12px;
  padding-left: 2px;
  cursor: pointer;
`;

export const InputStyled = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 8px 10px;
`;
