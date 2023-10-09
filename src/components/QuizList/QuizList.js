import QuizCard from "components/QuizCard/QuizCard";
import { ListItem } from "./QuizList.styled";

const QuizList = ({ items, onDelete }) => {
    return (
        <ul>
            {items.map(item =>
                <ListItem key={item.id}>
                    <QuizCard quiz={item} onDelete={onDelete} />
                </ListItem>)}
        </ul>
    );
};


export default QuizList;