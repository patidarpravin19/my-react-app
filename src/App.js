import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/About';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  // let showSearchBar = false;
  let initTodos = localStorage.getItem("todoList");
  if (initTodos == null) initTodos = [];
  else initTodos = JSON.parse(initTodos);

  const addTodo = (title, description) => {
    let id;
    if (todoList.length === 0) {
      id = 1;
    }
    else {
      id = todoList[todoList.length - 1].id + 1;
    }
    let myTodo = {
      id: id,
      name: title,
      description: description
    }
    setTodos([...todoList, myTodo]);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  const onDelete = (todo) => {
    setTodos(todoList.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  const [todoList, setTodos] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList])

  return (
    <>
      <Router>
        <Header title="My Title" />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos data={todoList} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </>
  );
}

export default App;
