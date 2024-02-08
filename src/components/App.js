import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Use state to store the current mode (light or dark)
  const [mode, setMode] = useState("light");

  // Define a function to toggle the mode
  const toggleMode = () => {
    // If the mode is light, set it to dark
    if (mode === "light") {
      setMode("dark");
    }
    // If the mode is dark, set it to light
    else {
      setMode("light");
    }
  };


  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mode==="dark" ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}> {mode === "light" ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
