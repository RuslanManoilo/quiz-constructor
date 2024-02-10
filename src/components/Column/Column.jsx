import { Droppable } from 'react-beautiful-dnd';
import Task from 'components/Task/Task';
import { Container, Title, TaskList } from './Column.styled';

const Column = ({ column, tasks}) => {
    return (
        <Container>
            <Title>{column.title}</Title>

            <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                    
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        
                        {tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}

                        {provided.placeholder}
                    </TaskList>

                )}
            </Droppable>

        </Container>
    );
};

export default Column;