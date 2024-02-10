import { Component } from "react";
import { nanoid } from "nanoid";
import { Container } from "./GlobalStyle";
import { DragDropContext } from "react-beautiful-dnd";
// import QuizList from "./QuizList/QuizList";
import initialQuizItems from "../data.json";
import SearchBar from "./SearchBar/SearchBar";
import QuizForm from "./QuizForm/QuizForm";
import initialData from "./initial-data";
import Column from "./Column/Column";
import { BoardContainer } from "./Column/Column.styled";


class App extends Component {
    state = {
    quizItems: initialQuizItems,
    filters: {
        topic: "",
        level: "all"
    },
    initialData
    };

    componentDidMount() {
        const savedFilters = localStorage.getItem('quiz-filters');
        const savedInitialData = localStorage.getItem("quiz-initialData");
    
        if (savedFilters !== null) {
            this.setState({
                filters: JSON.parse(savedFilters)
            });
        };

        if (savedInitialData !== null) {
            this.setState({
                initialData: JSON.parse(savedInitialData),
            });
        };
    };

    componentDidUpdate(prevProp, prevState) {
        if (prevState.filters !== this.state.filters) {
            localStorage.setItem('quiz-filters', JSON.stringify(this.state.filters));
        };

        if (prevState.initialData !== this.state.initialData) {
            localStorage.setItem(
                "quiz-initialData",
                JSON.stringify(this.state.initialData)
            );
        };
    };

    resetFilters = () => {
    this.setState({
        filters: {
        topic: "",
        level: "all"
        }
    })
    };

    addQuiz = (newQuiz) => {
    this.setState(prevState => ({
        quizItems: [...prevState.quizItems, { ...newQuiz, id: nanoid() }]
    }));
    };

    changeFilter = (key, value) => {
    this.setState(prevState => ({
        filters: {
        ...prevState.filters,
        [key]: value
        }
    }));
    };

    deleteQuizItem = (quizId) => {
    this.setState(prevState => ({
        quizItems: prevState.quizItems.filter(item => item.id !== quizId)
    }))
    };

    getVisibleItems = () => {
    const { quizItems, filters } = this.state;

    return quizItems.filter(item => {
    const topicFilter = filters.topic.toLowerCase();
    const hasTopic = item.topic.toLowerCase().includes(topicFilter);

    if (filters.level === 'all') {
    return hasTopic;
    }
    return hasTopic && item.level === filters.level;
    });
    };
    
    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        // Перевірка, чи є дійсне призначення (destination)
        if (!destination) {
            return;
        };

        // Перевірка, чи таска перемістилася в іншу позицію
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        };

        //Отримання початкової і кінцевої колонок
        const startColumn = this.state.initialData.columns[source.droppableId];
        const finishColumn = this.state.initialData.columns[destination.droppableId];

        if (startColumn === finishColumn) {
            //Отримання списку тасок для почткової колонки
            const newTaskIds = Array.from(startColumn.taskIds);
            // // Видалення таски зі списку початкової колонки
            newTaskIds.splice(source.index, 1);
            // // Вставлення таски в список кінцевої колонки на нове місце
            newTaskIds.splice(destination.index, 0, draggableId);
            // Оновлення стану компонента та данних з новим порядком тасок у колонках
            const newInitialData = {
                ...this.state.initialData,
                columns: {
                    ...this.state.initialData.columns,
                    [startColumn.id]: {
                        ...startColumn,
                        taskIds: newTaskIds,
                    },
                },
            };

            this.setState({
                initialData: newInitialData,
            });

            return;
        };

        // Moving from one list to another
        const startTaskIds = Array.from(startColumn.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...startColumn,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finishColumn.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finishColumn,
            taskIds: finishTaskIds,
        };

        const newInitialData = {
            ...this.state.initialData,
            columns: {
                ...this.state.initialData.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };

        this.setState({
            initialData: newInitialData,
        });
    };


    render() {
    const { filters } = this.state;
    // const visibleItems = this.getVisibleItems();

        return (
            <Container>
                <QuizForm onAdd={this.addQuiz} />
                <SearchBar
                    filters={filters}
                    onChangeFilter={this.changeFilter}
                    onResetFilters={this.resetFilters}
                />

                <BoardContainer>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        {this.state.initialData.columnOrder.map(columnId => {
                            const column = this.state.initialData.columns[columnId];
                            const tasks = column.taskIds.map(taskId => this.state.initialData.tasks[taskId]);

                            return <Column key={column.id} column={column} tasks={tasks} />;
                        })}
                    </DragDropContext>
                </BoardContainer>
            
                {/* <QuizList
            items={visibleItems}         
            onDelete={this.deleteQuizItem}
        /> */}
            </Container>
        );
    };
};


export default App;