import { CardBtn, CardInfo, CardList, CardTopic } from "./QuizCard.styled";
import { ImBin } from "react-icons/im";

const QuizCard = ({ quiz: { id, topic, level, time, questions }, onDelete }) => {
    return (
        <>
            <CardTopic>{topic}</CardTopic>
            <CardList>
                <CardInfo>Level: {level}</CardInfo>
                <CardInfo>Time: {time} min</CardInfo>
                <CardInfo>Questions: {questions}</CardInfo>
            </CardList>
            <CardBtn onClick={() => onDelete(id)}><ImBin/></CardBtn>
        </>
    );
};


export default QuizCard;