import styled from "styled-components";

export const ListItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const QuizItem = styled.li`
  width: calc(33.33% - 10px);
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};
  margin: 10px 0;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${p => p.theme.colors.backgroundDark};

  &:nth-child(3n) {
    margin-right: 0;
  }
`;