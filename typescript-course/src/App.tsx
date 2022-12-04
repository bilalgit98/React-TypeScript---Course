import React from "react";
import "./App.css";

let name: string = "bilal";
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

type Information = {
  name: string;
  age: number;
};

let person: Information = {
  name: "bilal",
};
// let name: string;
// name = 7; // not possible because the type is set to string
// role: [5, 8]; //not possible because the type is set to number and string
function App() {
  return (
    <div className="App">
      <header className="">
        <h1> HELLO WORLD</h1>
      </header>
    </div>
  );
}

export default App;
