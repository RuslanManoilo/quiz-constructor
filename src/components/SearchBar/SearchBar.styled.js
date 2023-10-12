import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.colors.backgroundDark};
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  border-radius: 0 0 ${p => p.theme.radii.sm} ${p => p.theme.radii.sm};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FilterInput = styled.input`
  font-size: 14px;
  width: 50%;
  padding: 10px;
  outline: none;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};
  color: ${p => p.theme.colors.textWhite};
  background-color: ${p => p.theme.colors.backgroundLight};

  &::placeholder {
    color: ${p => p.theme.colors.textGray};
  }
`;

export const FilterSelect = styled.select`
  font-size: 14px;
  width: 30%;
  padding: 10px;
  outline: none;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};
  color: ${p => p.theme.colors.textWhite};
  background-color: ${p => p.theme.colors.backgroundLight};
`;

export const ResetBtn = styled.button`
  padding: 12px 12px;
  border: none;
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  color: ${p => p.theme.colors.textWhite};
  background-color: ${p => p.theme.colors.primary};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${p => p.theme.colors.red};
  }
`;