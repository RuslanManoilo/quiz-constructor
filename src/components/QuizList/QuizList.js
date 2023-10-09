import QuizCard from "components/QuizCard/QuizCard";
import { ListItems, QuizItem } from "./QuizList.styled";

const QuizList = ({ items, onDelete }) => {
    return (
        <ListItems>
            {items.map(item =>
                <QuizItem key={item.id}>
                    <QuizCard quiz={item} onDelete={onDelete} />
                </QuizItem>)}
        </ListItems>
    );
};


export default QuizList;