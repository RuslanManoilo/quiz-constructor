import { Component } from "react";
import QuizList from "./QuizList/QuizList";
import initialQuizItems from "../data.json";
import SearchBar from "./SearchBar/SearchBar";
import QuizForm from "./QuizForm/QuizForm";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: {
      topic: "",
      level: "all"
    },
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

  render() {
    const { filters } = this.state;
    const visibleItems = this.getVisibleItems();

    return (
      <div>
        <QuizForm onAdd={this.addQuiz} />
        <SearchBar 
          filters={filters}           
          onChangeFilter={this.changeFilter}         
        />
        <QuizList
          items={visibleItems}         
          onDelete={this.deleteQuizItem}
        />
      </div>
    )
  };
};


export default App;