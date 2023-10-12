import { Component } from "react";
import { nanoid } from "nanoid";
import { Container } from "./GlobalStyle";
import QuizList from "./QuizList/QuizList";
import initialQuizItems from "../data.json";
import SearchBar from "./SearchBar/SearchBar";
import QuizForm from "./QuizForm/QuizForm";

class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: {
      topic: "",
      level: "all"
    },
  };

  componentDidMount() {
    const savedFilters = localStorage.getItem('quiz-filters');
    if (savedFilters !== null) {
      this.setState({
        filters: JSON.parse(savedFilters)
      })
    }
  };

  componentDidUpdate(prevProp, prevState) {
    console.log(prevState);
    if (prevState.filters !== this.state.filters) {
      localStorage.setItem('quiz-filters', JSON.stringify(this.state.filters));
    }
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

  render() {
    const { filters } = this.state;
    const visibleItems = this.getVisibleItems();

    return (
      <Container>
        <QuizForm onAdd={this.addQuiz} />
        <SearchBar 
          filters={filters}           
          onChangeFilter={this.changeFilter} 
          onResetFilters={this.resetFilters}
        />
        <QuizList
          items={visibleItems}         
          onDelete={this.deleteQuizItem}
        />
      </Container>
    )
  };
};


export default App;