
import './App.css';
import { MyMeals } from './MyMeals';




function App() {
  return (
    <div className="App">
    
    <h1>
Meal Plan

    </h1>
    <input type="text" placeholder="add a meal"/> 
    <button>ADD</button>
    <MyMeals text="My meals"/>
    </div>
  );
}

export default App;
