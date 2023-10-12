import styled from "styled-components";

export const ListItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${p => p.theme.spacing(1)};;
`;

export const QuizItem = styled.li`
  width: 33%;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};
  margin: 8px 0;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${p => p.theme.colors.backgroundDark};
`;