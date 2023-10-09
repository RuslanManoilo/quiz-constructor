import { ItemTopic } from "./QuizCard.styled";

const QuizCard = ({quiz: {id, topic, level, time, questions}, onDelete}) => {
    return (
        <div>
            <ItemTopic>{topic}</ItemTopic>
            <div>
                <p>Level: {level}</p>
                <p>Time: {time} min</p>
                <p>Questions: {questions}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}


export default QuizCard;