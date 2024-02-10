import styled from 'styled-components';

export const TaskContainer = styled.div`
  text-align: center;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  color: #fff;
  background-color: ${props => (props.isDragging ? '#64D567' : 'none')};
`;