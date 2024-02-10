import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
`;

export const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
export const Title = styled.h3`
  text-align: center;
  padding: 8px;
  margin-bottom: 12px;
  color: #ffffff;
`;
export const TaskList = styled.div`
  min-height: 340px;
  padding: 8px;
  /* background-color: ${props => (props.isDraggingOver ? '#7B8792' : 'none')}; */
`;