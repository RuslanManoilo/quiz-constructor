import styled from "styled-components";

export const CardTopic = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${p => p.theme.colors.textWhite};
`;

export const CardList = styled.ul`
  display: flex;
  gap: ${p => p.theme.spacing(4)};
`;

export const CardInfo = styled.li`
  font-size: 16px;
  margin-bottom: 5px;
  color: ${p => p.theme.colors.textWhite}; 
`;

export const CardBtn = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  margin-top: 8px;
  border: none;
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  color: ${p => p.theme.colors.textWhite}; 
  background-color: ${p => p.theme.colors.primary};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${p => p.theme.colors.primaryHover};
  }
`;