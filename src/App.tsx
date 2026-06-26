import './App.css';
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer"
import Todos from "./MyComponent/Todos"
import { useState } from "react";
//import Todo from "./MyComponent/TodoItem"
type Todo = {
  sno: number;
  title: string;
  desc: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done1",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done2",
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the ghat to get this job done3",
    },
  ]);

  const onDelete = (sno: number) => {
    setTodos(todos.filter((todo) => todo.sno !== sno));
  };
  


      // const data = 'fatima'
  // console.log(data)

  return (
    <> 
    {/* //fragments */}
    {/* <h1>Hello world {data} </h1>
    <h2>Heading no 02 </h2> */}
    <Header title = "MyTodosList"/>
    <Todos todos={todos} onDelete={onDelete} />
    <Footer/>
    {/* <Todo/> */}
    </>

  );
}
export default App

// single application
// react virtual dom and actual dom 
// why we are using react 
// Is this framework or library 
// Explain me basic structure of react js 
// If it's javascript library why
// More concept on react basic structure
// How to install with vite and old pattern react js 
// why we are using vite js 
//  what is package.json file 
//  why we create components and how to 
//  What is react router dom 
//  how to create the single page routing 
