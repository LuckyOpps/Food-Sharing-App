import { addFood } from "./firebase/foodService";

function App() {
  return (
    <div>
      <h1>Food Sharing App</h1>
      <button onClick={addFood}>Add Test Food</button>
    </div>
  );
}

export default App;